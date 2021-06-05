import React from "react";

const Container = (props) => {
  let className = "";
  if (props.className) {
    className = " " + props.className;
  }
  return <div className={`Container` + className}>{props.children}</div>;
};

export default Container;
