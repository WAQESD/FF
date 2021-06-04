import "./App.css";
import Answer from "./Component/Answer";
import Main from "./Component/Main";
import Result from "./Component/Result";
import QuestionBox from "./Component/QuestionBox";
import { useState, useEffect } from "react";

let questions = [];
let time = new Date();
let submit = false;
const URL =
  "http://ec2-13-125-219-111.ap-northeast-2.compute.amazonaws.com:8080";

const answer = [3, 2, 3, 3, 3, 3, 3, 1, 3, 1, 3, 3, 1];

function App() {
  const [num, setNum] = useState(0);
  const [select, setSelect] = useState(new Array(14));
  const [modal, setModal] = useState(undefined);

  const start = () => {
    fetch(URL + "/questions")
      .then((res) => {
        res.json().then((data) => {
          data.sort((a, b) => {
            if (a.qid > b.qid) return 1;
            else if (a.qid === b.qid) return 0;
            else return -1;
          });
          questions = data;
          setNum(1);
          time = Date.now();
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [app, setApp] = useState(<Main start={start}></Main>);

  let content = "";
  let choice = ["", "", ""];

  if (questions.length) {
    content = questions[num].content;
    choice = questions[num].choice;
  }

  const onClick = (n) => {
    let tmp = select;
    tmp[num] = n;
    setSelect(tmp);
  };

  const checkScore = (arr) => {
    let score = 0;
    for (let i = 0; i < 13; i++) {
      if (answer[i] === arr[i + 1]) {
        score += 1;
      }
    }
    return score;
  };

  if (num === 14 && !submit) {
    let rid = Date.now();
    time = Date.now() - time;
    let score = checkScore(select);
    submit = true;
    fetch(URL + "/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ rid, select: select.slice(1), time, score }),
    }).catch((e) => console.log(e));
  }

  useEffect(() => {
    if (num === 0) {
      setApp(<Main start={start}></Main>);
    } else if (num === 14) {
      setApp(
        <Result
          checkScore={checkScore}
          setNum={setNum}
          select={select}
        ></Result>
      );
    } else if (num > 14) {
      setApp(
        <Answer
          answer={answer}
          select={select}
          questions={questions}
          setModal={setModal}
        ></Answer>
      );
    } else {
      setApp(
        <QuestionBox
          content={content}
          num={num}
          choice={choice}
          select={select}
          onClick={onClick}
          setNum={setNum}
          key={num}
        ></QuestionBox>
      );
    }
  }, [num]);

  return (
    <div className="App">
      <div>{app}</div>
      <div>{modal}</div>
    </div>
  );
}

export default App;
