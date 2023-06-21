const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    videoId: {
        type:String,
        require:true,
        unique:true,
    },
    somgImg: {
        type:String,
        require:true
    },
    channelName: {
        type:String,
        require:true
    },
    channelImg: {
        type:String,
        require:true
    },
    duration: {
        type: String,
        require:true
    },
    duration_formatted: {
        type:String,
        require:true
    }
})
const songsModel = mongoose.model("songs", songsSchema);
module.exports = songsModel;