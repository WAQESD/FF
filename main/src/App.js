import "./App.css";
import Container from "./Component/Container";
import Question from "./Component/Question";
import Answer from "./Component/Answer";
import { useState } from "react";

let questions = [];
let time = new Date();
let submit = false;
const URL =
  "http://ec2-13-125-219-111.ap-northeast-2.compute.amazonaws.com:8080";

const answer = [3, 2, 3, 3, 3, 3, 3, 1, 3, 1, 3, 3, 1];

function App() {
  const [num, setNum] = useState(0);
  const [select, setSelect] = useState(new Array(14));

  let content = "";
  let choice = ["", "", ""];

  if (questions.length) {
    content = questions[num].content;
    choice = questions[num].choice;
  }

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

  return (
    <div className="App">
      <div>
        <Container>
          {num ? (
            num < 14 ? (
              <div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <span className="title">
                    팩트풀니스 테스트 (Factfullness Test)
                  </span>
                  <div className="question-number"> {`${num} / 13`} </div>
                </div>
                <Question
                  num={num}
                  content={content}
                  choice={choice}
                  select={select[num]}
                  onClick={(n) => {
                    onClick(n);
                    setNum(num + 1);
                  }}
                ></Question>
              </div>
            ) : num < 15 ? (
              <div>
                <div className="title-box">
                  <div className="title">당신의 점수는?</div>
                  <div className="score-box">
                    <span
                      className="score"
                      style={{
                        color: `rgba(232,124,19,${
                          0.5 + (0.5 * checkScore(select)) / 13
                        })`,
                      }}
                    >
                      {checkScore(select)}
                    </span>
                    <span className="score-max"> {" / 13"}</span>
                  </div>
                </div>
                <div className="result-description-box">
                  <div className="result-description">
                    당신은 {checkScore(select)}점이군요.
                  </div>
                  <div className="result-description">
                    너무 걱정하지는 마세요. 전 세계 평균은 2점 정도니까요.
                  </div>
                  <div className="result-description">
                    어떤 문제를 틀렸는지 확인해보세요.
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="result-button"
                    onClick={() => {
                      setNum(15);
                    }}
                  >
                    해설 보기
                  </button>
                </div>
              </div>
            ) : (
              <Answer
                select={select}
                answer={answer}
                questions={questions}
              ></Answer>
            )
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="main">
                팩트풀니스 테스트 (Factfullness Test)
              </span>
              <div className="main-content-box">
                <img
                  src="http://image.yes24.com/goods/69724044/800x0"
                  width="200"
                  height="305"
                  className="book-image"
                />
                <div>
                  <div className="main-content">
                    전 세계적으로 확증편향이 기승을 부리는 탈진실의 시대에,
                    막연한 두려움과 편견을 이기는 팩트의 중요성을 일깨우는
                    세계적 역작!
                  </div>
                  <div className="main-content">
                    세계를 이해하기 위한 13가지 문제에서 인간의 평균 정답률은
                    16%, 침팬지는 33%.
                  </div>
                  <div className="main-content">
                    똑똑하고 현명한 사람일수록 세상의 참모습을 정확히 알지
                    못한다!
                  </div>
                  <div
                    className="main-content"
                    style={{
                      fontFamily: "KOTRA_BOLD-Bold",
                      fontSize: "14pt",
                      marginTop: "24px",
                    }}
                  >
                    세계를 제대로 이해하고 있는지 확인해보세요
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button className="button" onClick={start}>
                  시작하기
                </button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

export default App;
