const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:true,
        unique:true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: 6
    },
    favoriteArtists: [{
        name:{
            type: String
        },
        img: {
            type: String
        }
    }],
    isActive :{
        type:Boolean,
        default:true
    }
})

const usersModel = mongoose.model("users", userSchema);
module.exports = usersModel;