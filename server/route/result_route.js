const express = require("express");
const resultRoutes = express.Router();
let Result = require("../models/result_model");
resultRoutes.route("/").post(function (req, res) {
  Result.find(function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });
});

resultRoutes.route("/add").post(function (req, res) {
  let result = new Result(req.body);
  result
    .save()
    .then((result) => {
      res.status(200).json({ result: "Result successfully added!" });
      console.log("successfully added");
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database.");
      console.log("unable to add");
    });
});

resultRoutes
  .route("/find/:student_id/:name/:ewhaian_id")
  .get(function (req, res) {
    let id = req.params.student_id;
    let sname = req.params.name;
    let eId = req.params.ewhaian_id;
    Result.find(
      { student_id: id, name: sname, ewhaian_id: eId },
      function (err, result) {
        res.json(result);
      }
    );
  });

resultRoutes.route("/:key").get(function (req, res) {
  let k = req.params.key;
  Result.find({ key: k }, function (err, result) {
    res.json(result);
  });
});

resultRoutes.route("/edit/:id").post(function (req, res) {
  let id = req.params.id;
  Result.findById(id, function (err, result) {
    res.json(result);
  });
});

resultRoutes.route("/update/:id").post(function (req, res) {
  Result.findById(req.params.id, function (err, notice) {
    if (!notice) res.status(404).send("data is not found");
    else {
      notice.name = req.body.name;
      notice.student_id = req.body.student_id;
      notice.ewhaian_id = req.body.ewhaian_id;
      notice.team = req.body.team;
      notice.pass = req.body.pass;
      notice.key = req.body.key;
      notice
        .save()
        .then((notice) => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("Unable to update the database");
        });
    }
  });
});

module.exports = resultRoutes;
