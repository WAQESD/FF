import React from "react";
import Container from "./Container";
import Question from "./Question";
import { useState } from "react";

const QuestionBox = ({ content, num, choice, select, onClick, setNum }) => {
  const [animate, setAnimate] = useState("question-box");

  const click = (n) => {
    setAnimate("question-box-out");
    setTimeout(() => {
      onClick(n);
      setNum(num + 1);
    }, 300);
  };

  return (
    <Container className={animate} key={num}>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <span className="title">팩트풀니스 테스트 (Factfullness Test)</span>
          <div className="question-number"> {`${num} / 13`} </div>
        </div>
        <Question
          num={num}
          content={content}
          choice={choice}
          select={select[num]}
          onClick={click}
        ></Question>
      </div>
    </Container>
  );
};

export default QuestionBox;
