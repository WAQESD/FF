import React from "react";
import Container from "./Container";
import Question from "./Question";

const QuestionBox = ({ content, num, choice, select, onClick, setNum }) => {
  return (
    <Container>
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
          onClick={(n) => {
            onClick(n);
            setNum(num + 1);
          }}
        ></Question>
      </div>
    </Container>
  );
};

export default QuestionBox;
