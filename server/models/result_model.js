const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Collection & Schema
let Result = new Schema(
  {
    name: {
      type: String,
    },
    student_id: {
      type: String,
    },
    ewhaian_id: {
      type: String,
    },
    team: {
      type: String,
    },
    pass: {
      type: String,
    },
    key: {
      type: String,
    },
    submit: {
      type: Boolean,
    },
    password: {
      type: String,
      length: 4,
    },
  },
  {
    collection: "result",
    versionKey: false,
  }
);

Result.pre('save', function(next){
  if(this.isModified('password')){
    bcrypt.genSalt(saltRounds, function(err, salt){
      if(err) return next(err);
      bcrypt.hash(this.password, salt, function(err, hash){
        if(err) return next(err);
        this.password=hash;
        next();
      });
    });
  }
  else
    next();
});

module.exports = mongoose.model("result", Result);
