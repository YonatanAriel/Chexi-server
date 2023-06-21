const mongoose = require("mongoose");

const playlistsSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require: true
        // require:true
    },
    // img: {
    //     // type :String,?
    //     // default?
    // },
    songsId: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "songs"
    }],
    isFavorit: {
        type: Boolean,
        default: false
    }
})
const playlistsModel = mongoose.model("playlists", playlistsSchema);
module.exports = playlistsModel;