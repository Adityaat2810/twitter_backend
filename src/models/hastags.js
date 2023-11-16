const mongoose = require('mongoose');

const hastagSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    tweets:[
        {
            types:mongoose.Schema.Types.ObjectId,
            ref:"Tweet"
        }
    ]
},{timestamps:true});

const Hashtag = mongoose.model('Hastag',hastagSchema);
module.exports = Hashtag