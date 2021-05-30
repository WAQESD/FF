const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Factfullness");
const db = mongoose.connection;

const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");
const app = express();
const port = 8080;

db.on("error", function () {
  console.log("Connection Failed!");
});

db.once("open", function () {
  console.log("Connected!");
});

const questions = mongoose.Schema({
  qid: { type: Number, require: true, unique: true },
  content: { type: String, require: true },
  choice: { type: Array, require: true },
});

const Question = mongoose.model("Questions", questions);

const initDB = require("./initDB.js");

Question.find(function (error, questions) {
  if (error) {
    console.log(error);
  } else {
    if (!questions) {
      initDB.init(Question);
    } else {
      console.log("data already exist");
    }
  }
});

const result = mongoose.Schema({
  rid: { type: Number, require: true, unique: true },
  time: { type: Number },
  select: { type: Array, require: true },
  score: { type: Number, require: true },
});

const Result = mongoose.model("Result", result);

app.use(cors());

app.listen(port, () => {
  console.log(`port number is ${port}`);
});

app.get("/questions", (req, res) => {
  Question.find(function (error, questinos) {
    res.send(JSON.stringify(questinos));
  });
});

app.post("/result", jsonParser, function (req, res) {
  if (req.body.select.length === 13 && req.body.time > 5000) {
    console.log(req.body);
    var newResult = new Result(req.body);
    newResult.save(function (error, data) {
      if (error) {
        console.log(error);
      } else {
        Result.find(function (error, results) {
          if (error) {
            console.log(error);
          } else {
            console.log(results.length);
          }
        });
      }
    });
  }
  res.send("complete");
});
