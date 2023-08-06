const playlistsModel = require("../model/playlists");

async function create(data) {
    return await playlistsModel.create(data);
  }
  async function read(filter = {}) {
    return await playlistsModel.find(filter).populate("songsId")
  }
  async function readOne(filter) {
    return await playlistsModel.findOne(filter).populate("songsId")
  }
  async function update(filter, data){
    return await playlistsModel.updateOne(filter, data);
  }
  async function del(id){
    return await update(id, {isActive:false})
  }
  
  module.exports = { create, read, readOne, update, del};
