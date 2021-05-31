import React from "react";

const Commentary = (props) => {
  const answer = props.answer - 1;
  const style = [{}, {}, {}];
  const commonStyle = {
    border: "2px solid #244533",
    backgroundImage: "linear-gradient(90deg, #85FFBD, #6DE884)",
    backgroundRepeat: "no-repeat",
  };

  let A_ = -1;
  let B_ = -1;
  let C_ = -1;

  const applyStyle = () => {
    if (props.A >= 0 && props.B >= 0 && props.C >= 0) {
      const sum = props.A + props.B + props.C;
      A_ = Math.round((props.A / sum) * 100);
      B_ = Math.round((props.B / sum) * 100);
      C_ = 100 - A_ - B_;

      style[0] = {
        ...commonStyle,
        backgroundSize: `${A_}%`,
      };
      style[1] = {
        ...commonStyle,
        backgroundSize: `${B_}%`,
      };
      style[2] = {
        ...commonStyle,
        backgroundSize: `${C_}%`,
      };
      style[answer]["backgroundImage"] =
        "linear-gradient(90deg, #FF9085, #E86D87)";
    } else {
      style[answer] = {
        backgroundColor: "#1FAB2F",
        color: "white",
        border: "1px solid #1FAB2F",
      };
    }
  };

  applyStyle();

  return (
    <div className="commentary">
      <div className="commentary-content">
        <div className="number">{`${props.num}.`}</div>
        <div>{props.content}</div>
      </div>
      <div className="choice-box">
        <div
          className="commentary-choice"
          style={style[0]}
        >{`A. ${props.choice[0]}`}</div>
        <div className="choice-ratio">{`${A_}%`}</div>
      </div>
      <div className="choice-box">
        <div
          className="commentary-choice"
          style={style[1]}
        >{`B. ${props.choice[1]}`}</div>
        <div className="choice-ratio">{`${B_}%`}</div>
      </div>
      <div className="choice-box">
        <div
          className="commentary-choice"
          style={style[2]}
        >{`C. ${props.choice[2]}`}</div>
        <div className="choice-ratio">{`${C_}%`}</div>
      </div>
    </div>
  );
};

export default Commentary;
