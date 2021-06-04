import React, { useState } from "react";

const url =
  "http://ec2-13-125-219-111.ap-northeast-2.compute.amazonaws.com:3001/";
const Modal = ({ setModal, top }) => {
  const [alert, setAlert] = useState("");

  function shareFacebook() {
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
  }
  function shareTwitter() {
    var text =
      "[팩트풀니스 테스트] 세계를 제대로 이해하고 있는지 확인해보세요!";
    window.open(
      "https://twitter.com/intent/tweet?text=" + text + "&url=" + url
    );
  }
  const event = () => {
    setModal(undefined);
    window.removeEventListener("scroll", this);
  };
  window.addEventListener("scroll", event);

  const copyLink = () => {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = url;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    setAlert("링크가 복사되었습니다");
  };
  return (
    <div
      className="modal-overlay"
      style={{ top: top }}
      onClick={(e) => {
        if (e.target.className == "modal-overlay") {
          event();
        }
      }}
    >
      <div className="modal-window">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="modal-title">공유하기</div>
          <button className="modal-button" onClick={event}>
            X
          </button>
        </div>
        <div className="modal-link-box">
          <div className="modal-link">{url}</div>
          <button className="modal-link-copy" onClick={copyLink}>
            copy
          </button>
        </div>
        <div className="modal-copy-alert">{alert}</div>
        <div className="modal-sns-box">
          <div className="modal-sns" onClick={shareTwitter}>
            <div className="modal-twitter-icon"></div>
            <div className="modal-sns-text">트위터</div>
          </div>
          <div className="modal-sns" onClick={shareFacebook}>
            <div className="modal-facebook-icon"></div>
            <div className="modal-sns-text">페이스북</div>
          </div>
          <div className="modal-sns">
            <div className="modal-kakao-icon"></div>
            <div className="modal-sns-text">카카오톡</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
