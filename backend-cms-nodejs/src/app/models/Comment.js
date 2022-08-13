const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comments = new Schema({
  idPost: {type: String},
  username: { type: String },
  content: { type: String },
  createdAt: { type: String, default: Date.now },
  updatedAt: { type: String, default: Date.now },
});
module.exports = mongoose.model("Comments", Comments);
