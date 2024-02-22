
const express = require("express"),
router = express.Router(),
playlistServices = require("../BL/playlists.service");
const { verify } = require("../auth");

router.get("/", async (req, res) => {
    try{
        const allPlaylists = await playlistServices.getAllplaylists()
        res.send(allPlaylists)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post("/addplaylist", verify, async (req, res) => {
    try{
        const newPlaylist = await playlistServices.addPlaylist(req.body, req.userName)
        res.send(newPlaylist)
    }catch(err){
        res.status(400).send(err)
    }
})

router.post("/addsong/:playlistid" ,verify , async (req, res) => {
    try{
        const songData = req.body;
        const playlistId = req.params.playlistid;
        const newSong = await playlistServices.addSongToPlaylist(songData, playlistId)
        res.send(newSong)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.get("/user",verify ,async (req, res) => {
    try{
        const userName = req.userName
        const playlists = await playlistServices.getPlaylistsByUserName(userName)
        res.send(playlists)
    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/likedsongs" ,verify ,async (req, res) => {
    try{
        const likesSongsPlaylist = await playlistServices.getLikedSongsPlaylist(req.userName)
        res.send(likesSongsPlaylist)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post("/deletesong/:playlistid" ,verify ,async (req, res) => {
    try{
        const playlistId = req.params.playlistid;
        const songId = req.body.id;
        const updatedPlaylist = await playlistServices.deleteSongFromPlaylist(playlistId, songId)
        res.send({songId: req.body.id, msg: updatedPlaylist})
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router