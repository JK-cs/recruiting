const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3322;
const cors = require("cors");
const mongoose = require("mongoose");
const resultRoute = require("./route/result_route");
const uploadRoute = require("./route/fileupload_route");
const deleteRoute = require("./filedelete");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "process.env" });

dotenv.config();
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Cannot connect to the database" + err);
    }
  );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/api/result", resultRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/delete", deleteRoute);
app.use("/api/download", express.static("download"));
app.use("/api/upload", express.static("uploads"));

app.use(cors());

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
