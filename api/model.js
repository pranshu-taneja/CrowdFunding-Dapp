// Define schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    acc:String,
    protitle:String,
    projdesc:String,
    expdate:String,
    amount:Number,
    imgLink:String,
    versionKey:false
  }
);

// Compile model from schema
const exp = mongoose.model("exp", UserSchema);
module.exports = exp