const songsController = require("../DL/controller/songs.controller");

async function getAllSongs(){
    const allSongs = await songsController.read()
    if(!allSongs) throw "No songs found"
    return allSongs
}

async function getSong(filter){
    const song = await songsController.readOne(filter)
    return song
}

async function addSong(data){
    const isSongExist = await getSong({videoId: data.videoId})
    if(isSongExist) return isSongExist._id
    if(!data.title || !data.videoId || !data.songImg || !data.channelName 
        || !data.channelImg ){
            throw "Missing data"
        }
    const newSong = await songsController.create(data)
    return newSong._id
}

module.exports = {getAllSongs, addSong, getSong} 
