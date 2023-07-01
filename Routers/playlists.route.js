const express = require("express"),
router = express.Router(),
playlistServices = require("../BL/playlists.service");

router.get("/", async (req, res) => {
    try{
        const allPlaylists = await playlistServices.getAllplaylists()
        res.send(allPlaylists)
    }
    catch(err){
        res.status(400).send(err)
    }
})
router.post("/addplaylist", async (req, res) => {
    try{
        const newPlaylist = await playlistServices.addPlaylist(req.body)
        res.send(newPlaylist)
    }catch(err){
        res.status(400).send(err)
    }
})
router.post("/addsong/:playlistid", async (req, res) => {
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
router.get("/user/:userid", async (req, res) => {
    try{
        const userId = req.params.userid
        const playlists = await playlistServices.getPlaylistsByUserId(userId)
        res.send(playlists)
    }catch(err){
        res.status(400).send(err)
    }
})
router.post("/likedsongs" , async (req, res) => {
    try{
        const likesSongsPlaylist = await playlistServices.getLikedSongsPlaylist(req.body.userId)
        res.send(likesSongsPlaylist)
    }
    catch(err){
        res.status(400).send(err)
    }
})
router.post("/deletesong/:playlistid", async (req, res) => {
    try{
        const playlistId = req.params.playlistid;
        const songId = req.body.id;
        const updatedPlaylist = await playlistServices.deleteSongFromPlaylist(playlistId, songId)
        res.send(updatedPlaylist)
        //need to delete / isAcrive: false the song from songs (only if it doesnt in any other playlists)
    }
    catch(err){
        res.status(400).send(err)
    }
})
module.exports = router