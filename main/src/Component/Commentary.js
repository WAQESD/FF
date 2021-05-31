import React from "react";

const Commentary = (props) => {
  const answer = props.answer - 1;
  const select = props.select - 1;
  const style = [{}, {}, {}];

  const applyStyle = () => {
    if (answer == select) {
      style[answer] = {
        backgroundColor: "#1FAB2F",
        color: "white",
        border: "1px solid #1FAB2F",
      };
    } else {
      style[answer] = {
        backgroundColor: "#1FAB2F",
        color: "white",
        border: "1px solid #1FAB2F",
      };
      style[select] = {
        backgroundColor: "#c73510",
        color: "white",
        border: "1px solid #c73510",
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
      {answer == select ? (
        <div
          style={{ marginTop: "16px", display: "flex", flexDirection: "row" }}
        >
          <div className="correct-box"></div>
          <div className="correct">정답</div>
          <div className="correct-box"></div>
          <div className="wrong">내가 고른 답</div>
        </div>
      ) : (
        <div
          style={{ marginTop: "16px", display: "flex", flexDirection: "row" }}
        >
          <div className="answer-box"></div>
          <div className="answer">정답</div>
          <div className="select-box"></div>
          <div className="select">내가 고른 답</div>
        </div>
      )}
      <div
        className="commentary-choice"
        style={style[0]}
      >{`A. ${props.choice[0]}`}</div>
      <div
        className="commentary-choice"
        style={style[1]}
      >{`B. ${props.choice[1]}`}</div>
      <div
        className="commentary-choice"
        style={style[2]}
      >{`C. ${props.choice[2]}`}</div>
    </div>
  );
};

export default Commentary;
