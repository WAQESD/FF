import React from "react";
import Container from "./Container";

const Main = ({ start }) => {
  return (
    <Container>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span className="main">팩트풀니스 테스트 (Factfullness Test)</span>
        <div className="main-content-box">
          <img
            src="http://image.yes24.com/goods/69724044/800x0"
            width="200"
            height="305"
            className="book-image"
          />
          <div>
            <div className="main-content">
              전 세계적으로 확증편향이 기승을 부리는 탈진실의 시대에, 막연한
              두려움과 편견을 이기는 팩트의 중요성을 일깨우는 세계적 역작!
            </div>
            <div className="main-content">
              세계를 이해하기 위한 13가지 문제에서 인간의 평균 정답률은 16%,
              침팬지는 33%.
            </div>
            <div className="main-content">
              똑똑하고 현명한 사람일수록 세상의 참모습을 정확히 알지 못한다!
            </div>
            <div
              className="main-content"
              style={{
                fontFamily: "KOTRA_BOLD-Bold",
                fontSize: "14pt",
                marginTop: "24px",
              }}
            >
              세계를 제대로 이해하고 있는지 확인해보세요.
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "70px",
          }}
        >
          <button className="button" onClick={start}>
            시작하기
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Main;
