const userController = require("../DL/controller/users.controller");

async function getAllUsers(filter){
    const allUsers = await userController.read(filter);
    return allUsers
}

async function register(userData) {
    let isUserAlreadyExist = await userController.readOne({userName:userData.userName})
    if(isUserAlreadyExist){
        console.log("User already exist")
        throw  "User already exist"
    }
    if(userData.password.trim().length < 6 || userData.userName.trim() < 2){
        console.log("missing field / not enough characters")
        throw "missing field / not enough characters"
    }
    await userController.create(userData);
    return userData
}
module.exports = {getAllUsers, register}