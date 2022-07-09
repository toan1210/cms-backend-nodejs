const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comments = new Schema({
  idPost: {type: String},
  username: { type: String },
  content: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Comments", Comments);
