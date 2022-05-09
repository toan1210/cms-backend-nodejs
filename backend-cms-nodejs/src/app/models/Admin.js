const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const Admin = new Schema({
  username: { type: String,},
  password:{type:String},
    category: { type: String,},
    createdAt:{type:Date, default: Date.now},
    updatedAt:{type:Date, default: Date.now},
  });
module.exports =mongoose.model('Admin', Admin); 