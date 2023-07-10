const mongoose = require("mongoose");

const playlistsSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true,
        minlength:1
    },
    userName: {
        type: String
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        // require: true
    },
    // img: {
    //     // type :String,?
    //     // default?
    // },
    songsId: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "songs"
    }],
    isFavorite: {
        type: Boolean,
        default: false
    }
})
const playlistsModel = mongoose.model("playlists", playlistsSchema);
module.exports = playlistsModel;