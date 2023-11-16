const mongoose = require('mongoose');

const connect = async() =>{
    await mongoose.connect('mongodb://localhost:27017/twitter_backend')
}

module.exports = connect ;
