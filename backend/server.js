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

const statistic = mongoose.Schema({
  number: { type: Number, require: true, unique: true },
  answer: { type: Number, require: true },
  A: { type: Number, require: true },
  B: { type: Number, require: true },
  C: { type: Number, require: true },
});

const Statistic = mongoose.model("Statistic", statistic);
const Question = mongoose.model("Questions", questions);

const setDB = require("./setDB.js");

Question.find(function (error, questions) {
  if (error) {
    console.log(error);
  } else {
    if (!questions.length) {
      setDB.setQuestion(Question);
    } else {
      console.log("data already exist");
    }
  }
});

Statistic.find(function (error, statistic) {
  if (error) {
    console.log(error);
  } else {
    if (!statistic.length) {
      setDB.setStatistic(Statistic);
    } else {
      console.log("answer already exist");
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
  Question.find(function (error, questions) {
    res.send(JSON.stringify(questions));
  });
});

app.post("/result", jsonParser, function (req, res) {
  if (req.body.select.length === 13 && req.body.time > 1000) {
    var newResult = new Result(req.body);
    newResult.save(function (error, data) {
      if (error) {
        console.log(error);
      } else {
        Statistic.find((error, statistic) => {
          if (error) {
            console.log(error);
          } else {
            statistic.map(({ number, A, B, C }) => {
              console.log(number, A, B, C);
              let select = req.body.select[number - 1];
              console.log(select);
              if (select === 1) {
                Statistic.updateOne({ number: number }, { A: A + 1 })
                  .then((res) => console.log(res))
                  .catch((e) => console.log(e));
              } else if (select === 2) {
                Statistic.updateOne({ number: number }, { B: B + 1 })
                  .then((res) => console.log(res))
                  .catch((e) => console.log(e));
              } else {
                Statistic.updateOne({ number: number }, { C: C + 1 })
                  .then((res) => console.log(res))
                  .catch((e) => console.log(e));
              }
            });
          }
        });
      }
    });
  }
  res.send("complete");
});

const router = require("./build/main.js");
router.index();
