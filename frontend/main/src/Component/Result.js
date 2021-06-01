import React from "react";
import Container from "./Container";

const Result = ({ checkScore, select, setNum }) => {
  return (
    <Container>
      <div>
        <div className="title-box">
          <div className="title">당신의 점수는?</div>
          <div className="score-box">
            <span
              className="score"
              style={{
                color: `rgba(232,124,19,${
                  0.5 + (0.5 * checkScore(select)) / 13
                })`,
              }}
            >
              {checkScore(select)}
            </span>
            <span className="score-max"> {" / 13"}</span>
          </div>
        </div>
        <div className="result-description-box">
          <div className="result-description">
            당신은 {checkScore(select)}점이군요.
          </div>
          <div className="result-description">
            너무 걱정하지는 마세요. 전 세계 평균은 2점 정도니까요.
          </div>
          <div className="result-description">
            어떤 문제를 틀렸는지 확인해보세요.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="result-button"
            onClick={() => {
              setNum(15);
            }}
          >
            해설 보기
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Result;
