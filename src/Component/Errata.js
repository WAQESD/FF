import React from "react";

const Errata = ({ num, answer, select, result }) => {
  const style = {
    correct: {
      backgroundColor: "#1FAB2F",
      color: "white",
      borderRadius: "6px",
      margin: "0px 4px",
    },
    wrong: {
      backgroundColor: "#C73510",
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

  const onClick = () => {
    let location = document.querySelectorAll(".commentary")[num - 1].offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <div className="errata" onClick={onClick}>
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
