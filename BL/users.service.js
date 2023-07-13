const userController = require("../DL/controller/users.controller");
const bcrypt = require("bcrypt")
const {createToken} = require("../auth")

async function getAllUsers(filter){
    const allUsers = await userController.read(filter);
    return allUsers
}
async function register(data) {
    if(!data.userName || !data.password ) throw "Missing data"
    const isUserAlreadyExist = await userController.readOne({userName: data.userName})
    if(isUserAlreadyExist) throw  "User already exist"
    const SALT_ROUNDS = Number(process.env.SALT_ROUNDS)
    const hashedPassword = bcrypt.hashSync(data.password,SALT_ROUNDS)
    const user = {userName: data.userName, password: hashedPassword}
    const newUser = await userController.create(user);
    const token = createToken({userName: newUser.userName})
    return token
}
async function login(data) {
    if(!data.userName || !data.password) throw "Missing data"
    const user = await userController.readOne({userName: data.userName}, "+password")
    if(!user) throw "User not exist"
    const isPasswordMatch = bcrypt.compareSync(data.password, user.password)
    if(!isPasswordMatch) throw "password mismatch" 
    const token = createToken({userName: user.userName})
    return token
}
async function getFavoriteArtists(userName){
    const user = await userController.readOne({userName: userName})
    return user.favoriteArtists
}
async function addFavoriteArtist(userName, artistName){
    const newArtist = await userController.update({userName: userName}, { $push: {favoriteArtists: artistName}})
    return "New artist added - " + artistName
}
module.exports = {getAllUsers, register, login, addFavoriteArtist, getFavoriteArtists}