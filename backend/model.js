// Define schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  acc:String
});

// Compile model from schema
const exp = mongoose.model("exp", UserSchema);
module.exports = exp