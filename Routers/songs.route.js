const express = require("express"),
router = express.Router(),
songsServices = require("../BL/songs.service");

router.get("/" , async (req, res) => {
    try{
        const allSongs = await songsServices.getAllSongs() 
        res.send(allSongs)
    }
    catch(err){
        res.status(400).send(err)
    }
})
router.get("/getsong/:videoid", async (req, res) => {
    try{
        const song = await songsServices.getSong({videoId: req.params.videoid})
        res.send(song)
    }
    catch(err){
        res.status(400).send(err)
    }
})
// router.post("/", async (req, res) => {
//     try{
//         const newSong = await songsServices.addSong(req.body)
//         res.send(newSong);
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })
module.exports = router


