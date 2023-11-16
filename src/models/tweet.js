const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content:{
        type:String ,
        require:true ,
        max:[250,'Tweet cannnot be more than 250 characters']
    },
    hastags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hashtag'
        }
    ]


}, {timeseries:true});



const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports=Tweet

