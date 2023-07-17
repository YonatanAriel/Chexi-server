
const express = require("express"),
router = express.Router(),
usersServices = require("../BL/users.service");
const {verify} = require("../auth")

router.get("/", async (req, res) => {
    try{
        const allUsers = await usersServices.getAllUsers();
        res.send(allUsers)
    }
    catch(err){
        res.status(400).send(err);
    }
})
router.post("/register", async (req, res) => {
    try{
        const token = await usersServices.register(req.body);
        res.send(token);
    }
    catch(err){
        res.status(400).send(err);
    }
})
router.post("/login", async (req, res) => {
    try{
        const token = await usersServices.login(req.body)
        res.send(token)
    }
    catch(err){
        res.status(400).send(err)
    }
})
router.get("/getfavoritartists", verify, async (req, res) => {
    try{
        const artists = await usersServices.getFavoriteArtists(req.userName)
        res.send(artists)
    }
    catch(err){
        res.status(400).send(err)
    }
})
router.post("/addfavoriteartist",verify, async (req, res) => {
    try{
        const artistName = req.body.artistName
        const artistImg = req.body.artistImg
        const userName = req.userName
        const newArtist = await usersServices.addFavoriteArtist(userName, artistName, artistImg)
        res.send(newArtist)
    }
    catch(err){
        res.status(400).send(err)
    }
})
module.exports = router;

router.post("/test",verify,(req,res)=>{
    res.send('ok')
})
module.exports = router;




