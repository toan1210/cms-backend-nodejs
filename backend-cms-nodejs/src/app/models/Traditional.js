const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const Traditional = new Schema({
    title: { type: String,},
    author:{type:String},
    status: { type: String,},
    category: { type: String,},
    date: {type:Date},
    traditional:{type:String},
    images:{type: String},
    sumary:{type:String},
    content:{type:String},
    createdAt:{type:Date, default: Date.now},
    updatedAt:{type:Date, default: Date.now},
  });
module.exports =mongoose.model('Traditional', Traditional); 