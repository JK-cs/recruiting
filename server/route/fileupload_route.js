const express = require("express");
const multer = require("multer");
const upload = require("../fileupload.js");
const uploadRoutes = express.Router();

//upload file
uploadRoutes.post("/", (req, res, next) => {
  upload(req, res, function (err) {
    const file = req.file;
    if (!file) {
      console.log("file is not posting");
    }
    if (err instanceof multer.MulterError) {
      return next(err);
    } else if (err) {
      return next(err);
    }
    console.log("file successfully added");
    return res.json({ success: 1 });
    /*
        res.send(file); 
        */
  });
});

module.exports = uploadRoutes;
