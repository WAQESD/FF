import React from "react";

const Button = (props) => {
  return (
    <div className="button">
      <button className="button-prev" onClick={props.prev}>
        이전
      </button>
      <button className="button-next" onClick={props.next}>
        다음
      </button>
    </div>
  );
};

export default Button;
