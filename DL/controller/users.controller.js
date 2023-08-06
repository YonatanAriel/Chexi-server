const usersModel = require("../model/users");

async function create(data) {
  return await usersModel.create(data);
}
async function read(filter = {}) {
  return await usersModel.find(filter);
}
async function readOne(filter, select) {
  return await usersModel.findOne(filter, select);
}
async function update(filter, data){
  return await usersModel.updateOne(filter, data);
}
async function del(id){
  return await update(id, {isActive:false})
}

module.exports = { create, read, readOne, update, del};
