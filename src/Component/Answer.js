import React from "react";
import Errata from "./Errata";
import Commentary from "./Commentary";
import FAB from "./FAB";

const Answer = ({ answer, select, questions }) => {
  let errata = [];
  let commentary = [];
  const num2alp = (num) => {
    if (num == 1) {
      return "A";
    } else if (num == 2) {
      return "B";
    } else {
      return "C";
    }
  };

  const makeErrata = () => {
    errata.push(
      <Errata num="" answer="정답" select="답안" result="결과" key={0}></Errata>
    );
    for (let i = 1; i < 14; i++) {
      errata.push(
        <Errata
          key={i}
          num={i}
          answer={num2alp(answer[i - 1])}
          select={num2alp(select[i])}
          result={answer[i - 1] == select[i] ? "O" : "X"}
        ></Errata>
      );
    }
  };

  const makeCommentary = () => {
    for (let i = 1; i < 14; i++) {
      commentary.push(
        <Commentary
          key={i}
          num={i}
          choice={questions[i].choice}
          answer={answer[i - 1]}
          select={select[i]}
          content={questions[i].content}
        ></Commentary>
      );
    }
  };

  makeErrata();
  makeCommentary();

  return (
    <div className="answer-box">
      <div className="errata-box">{errata}</div>
      <div className="commentary-box">{commentary}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="button"
          style={{ marginRight: "40px" }}
          onClick={() => {
            window.location.reload();
          }}
        >
          다시 풀기
        </button>
        <button className="button">공유하기</button>
      </div>
      <FAB></FAB>
    </div>
  );
};

export default Answer;
