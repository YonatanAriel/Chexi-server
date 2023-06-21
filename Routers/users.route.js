const express = require("express"),
router = express.Router(),
usersServices = require("../BL/users.service");

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
        const newUser = await usersServices.register(req.body);
        res.send(newUser);
    }
    catch(err){
        res.status(400).send(err);
    }
})
module.exports = router;



