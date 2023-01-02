// Define schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {acc:String},
  {pro_title:String},
  {exp_date:Date},
  {proj_desc:String},
  {amount:Number},
  {versionKey:false}
);

// Compile model from schema
const exp = mongoose.model("exp", UserSchema);
module.exports = exp