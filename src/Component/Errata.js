import React from "react";

const Errata = ({ num, answer, select, result }) => {
  const style = {
    correct: {
      backgroundColor: "#FF5F08",
      color: "white",
      borderRadius: "6px",
      margin: "0px 4px",
    },
    wrong: {
      backgroundColor: "#0A0863",
      color: "white",
      borderRadius: "6px",
      margin: "0px 4px",
    },
  };

  const checkAnswer = (result) => {
    if (result == "O") {
      return style.correct;
    } else if (result == "X") {
      return style.wrong;
    } else {
      return;
    }
  };
  return (
    <div className="errata">
      <div className="errata-num">{num}</div>
      <div style={checkAnswer(result)}>
        <div className="errata-answer">{answer}</div>
        <div className="errata-select">{select}</div>
        <div className="errata-result">{result}</div>
      </div>
    </div>
  );
};

export default Errata;
