import React from "react";

const Errata = ({ num, answer, select, result }) => {
  const onClick = () => {
    let location =
      document.querySelectorAll(".commentary")[num - 1].offsetTop - 200;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <div className="errata">
      <div className="errata-num">{num}</div>
      <div
        className={
          num ? `errata-${answer == select ? "correct" : "wrong"}` : ""
        }
        onClick={num ? onClick : undefined}
      >
        <div className="errata-answer">{answer}</div>
        <div className="errata-select">{select}</div>
        <div className="errata-result">{result}</div>
      </div>
    </div>
  );
};

export default Errata;
