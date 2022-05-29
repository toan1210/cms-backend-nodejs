const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const Story = new Schema({
    title: { type: String,},
    author:{type:String},
    category: { type: String,},
    date: {type:Date},
    images:{type: String},
    sumary:{type:String},
    content:{type:String},
    story:{type:String},
    createdAt:{type:Date, default: Date.now},
    updatedAt:{type:Date, default: Date.now},
  });
module.exports =mongoose.model('Story', Story); 