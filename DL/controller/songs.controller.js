const songsModel = require("../model/songs");

async function create(data) {
    return await songsModel.create(data);
  }
  async function read(filter = {}) {
    return await songsModel.find(filter);
  }
  async function readOne(filter) {
    return await songsModel.findOne(filter);
  }
  async function update(filter, data){
    return await songsModel.updateOne;
  }
  async function del(id){
    return await update(id, {isActive:false})
  }
  module.exports = { create, read, readOne, update, del};
  