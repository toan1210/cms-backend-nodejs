const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const Arrayadvertisements = new Schema({
    images:{type: String},
    images1:{type: String},
    createdAt:{type:Date, default: Date.now},
    updatedAt:{type:Date, default: Date.now},
  });
module.exports =mongoose.model('Arrayadvertisements', Arrayadvertisements); 