const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  },
  {
    collection: "result",
    versionKey: false,
  }
);

module.exports = mongoose.model("result", Result);
