import "./App.css";
import Container from "./Component/Container";
import Question from "./Component/Question";
import Answer from "./Component/Answer";
import { useState, useEffect } from "react";

const questions = [
  { content: "", choice: ["", "", ""] },
  {
    content:
      "오늘날 세계 모든 저소득 국가에서 초등학교를 나온 여성은 얼마나 될까?",
    choice: ["20%", "40%", "60%"],
  },
  {
    content: "세계 인구의 다수는 어디에 살까?",
    choice: ["저소득 국가", "중간 소득 국가", "고소득 국가"],
  },
  {
    content: "지난 20년간 세계 인구에서 극빈층 비율은 어떻게 바뀌었을까?",
    choice: ["거의 두 배로 늘었다", "별 차이 없다", "거의 절반으로 줄었다"],
  },
  {
    content: "오늘날 전 세계 평균 기대 수명은?",
    choice: ["50세", "60세", "70세"],
  },
  {
    content:
      "오늘날 세계 인구 중 0~15세 인구가 약 20억이다. 유엔이 예상하는 2100년의 0~15세 인구는 몇일까?",
    choice: ["40억", "30억", "20억"],
  },
  {
    content:
      "유엔은 2100년까지 세계 인구가 40억명 정도 늘어날 것이라고 예상한다. 주로 어떤 인구층이 늘어날까?",
    choice: ["0 ~ 15세", "15 ~ 74세", "75세 이상"],
  },
  {
    content: "지난 100년간 연간 자연재해 사망자 수는 어떻게 변했을까?",
    choice: ["두 배 이상 늘었다", "거의 변화가 없다", "절반 이하로 줄었다"],
  },
  {
    content:
      "오늘날 세계 인구는 약 70억이다. 다음 중 대륙별 인구 분포를 가장 정확하게 설명한 걸 고르면?",
    choice: [
      "유럽 10억, 아시아 40억, 아프리카 10억, 아메리카 10억",
      "유럽 10억, 아시아 30억, 아프리카 20억, 아메리카 10억",
      "유럽 10억, 아시아 30억, 아프리카 10억, 아메리카 20억",
    ],
  },
  {
    content: "오늘날 전 세계 1세 아동 중 어떤 질병이든 예방접종을 받은 비율은?",
    choice: ["20%", "50%", "80%"],
  },
  {
    content:
      "전 세계 30세 남성은 평균 10년간 동안 학교를 다닌다. 같은 나이의 여성은 평균 몇 년간 학교를 다닐까?",
    choice: ["9년", "6년", "3년"],
  },
  {
    content:
      "1996년에 호랑이, 대왕판다, 검은코뿔소가 멸종위기종에 등록되었다. 이 셋 중 오늘날 더 위급한 단계의 멸종위기종이 된 종은 몇 종일까?",
    choice: ["2종", "1종", "없다"],
  },
  {
    content: "세계 인구 중 어떤 식으로든 전기를 공급받는 비율은?",
    choice: ["20%", "50%", "80%"],
  },
  {
    content:
      "세계 기후 전문가들은 앞으로 100년 동안의 평균기온 변화를 어떻게 예상할까?",
    choice: [
      "더 더워질 것이라고 예상한다",
      "그대로일 거라고 예상한다",
      "더 추워질 거라고 예상한다",
    ],
  },
  { content: "", choice: ["", "", ""] },
  { content: "", choice: ["", "", ""] },
];

const answer = [3, 2, 3, 3, 3, 3, 3, 1, 3, 1, 3, 3, 1];

function App() {
  const [num, setNum] = useState(0);
  const [select, setSelect] = useState(new Array(14));
  let content = questions[num].content;
  let choice = questions[num].choice;
  useEffect(() => {
    content = questions[num].content;
    choice = questions[num].choice;
  }, [num]);

  const prev = () => {
    setNum(num - 1);
  };
  const next = () => {
    setNum(num + 1);
  };
  const onClick = (n) => {
    let tmp = select;
    tmp[num] = n;
    setSelect(tmp);
  };
  const checkScore = (arr) => {
    let score = 0;
    for (let i = 0; i < 13; i++) {
      if (answer[i] == arr[i + 1]) {
        score += 1;
      }
    }
    return score;
  };
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
              <div className="main-content"></div>
              <div className="main-content"></div>
              <div className="main-content"></div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "auto",
                }}
              >
                <button
                  className="button"
                  onClick={() => {
                    setNum(1);
                  }}
                >
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
