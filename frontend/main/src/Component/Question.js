import React from "react";

const Question = (props) => {
  return (
    <div className="question">
      <div className="question-content">
        <div className="number">{`${props.num}.`}</div>
        <div>{props.content}</div>
      </div>
      <div
        className="question-choice"
        onClick={() => props.onClick(1)}
        style={{ marginTop: "auto" }}
      >{`A. ${props.choice[0]}`}</div>
      <div
        className="question-choice"
        onClick={() => props.onClick(2)}
      >{`B. ${props.choice[1]}`}</div>
      <div
        className="question-choice"
        onClick={() => props.onClick(3)}
      >{`C. ${props.choice[2]}`}</div>
    </div>
  );
};

export default Question;
