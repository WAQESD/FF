import React from "react";
import Errata from "./Errata";

const Answer = ({ answer, select }) => {
  let errata = [];

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
      <Errata num="" answer="정답" select="답안" result="결과"></Errata>
    );
    for (let i = 1; i < 14; i++) {
      errata.push(
        <Errata
          num={i}
          answer={num2alp(answer[i - 1])}
          select={num2alp(select[i])}
          result={answer[i - 1] == select[i] ? "O" : "X"}
        ></Errata>
      );
    }
  };
  makeErrata();
  return (
    <div className="answer-box">
      <div className="errata-box">{errata}</div>
    </div>
  );
};

export default Answer;
