const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const Arrayadvertisements = new Schema({
  news:{type: String},
  technology:{type: String},
  economy:{type: String},
  cultural:{type: String},
  entertain:{type: String},
  living:{type: String},
  video:{type: String},
  tourism:{type: String},
  brandstuff:{type: String},
  fashion:{type: String},
  sport:{type: String},
  cuisine:{type: String},
  createdAt:{type:Date, default: Date.now},
  updatedAt:{type:Date, default: Date.now},
  });
module.exports =mongoose.model('Arrayadvertisements', Arrayadvertisements); 