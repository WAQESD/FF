import React, { useState } from "react";
import Commentary from "./Commentary";
import FAB from "./FAB";

//const URL = "http://ec2-13-125-219-111.ap-northeast-2.compute.amazonaws.com:8080";
const URL = "http://localhost:8080";
let hasData = false;

const Answer = ({ questions, answer }) => {
  const [commentary, setCommentary] = useState([]);

  if (!hasData) {
    fetch(URL + "/statistic").then((res) => {
      res.json().then((data) => {
        data.sort((a, b) => {
          if (a.number > b.number) return 1;
          else if (a.number === b.number) return 0;
          else return -1;
        });
        let tmp = [];
        data.map((statistic) => {
          const num = statistic.number;
          tmp.push(
            <Commentary
              key={num}
              num={num}
              answer={statistic.answer}
              choice={questions[num].choice}
              content={questions[num].content}
              A={statistic.A}
              B={statistic.B}
              C={statistic.C}
            ></Commentary>
          );
        });
        console.log(hasData);
        hasData = true;
        setCommentary(tmp);
      });
    });
  }
  return (
    <div className="answer-box">
      <div className="commentary-box">{commentary}</div>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <FAB></FAB>
    </div>
  );
};

export default Answer;
