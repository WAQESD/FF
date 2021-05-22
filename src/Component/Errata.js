import React from "react";

const Errata = ({ num, answer, select, result }) => {
  return (
    <div className="errata">
      <div className="errata-num">{num}</div>
      <div className="errata-answer">{answer}</div>
      <div className="errata-select">{select}</div>
      <div className="errata-result">{result}</div>
    </div>
  );
};

export default Errata;
