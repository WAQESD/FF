import React, { useState } from "react";

const FAB = () => {
  const [top, setTop] = useState(() => {
    window.addEventListener("scroll", () => {
      var position = window.scrollY + window.outerHeight * 0.7;
      setTop(position);
    });
    return window.scrollY + window.outerHeight * 0.75;
  });
  const [left, setLeft] = useState(() => {
    window.addEventListener("resize", () => {
      var left = document.querySelector(".Container").offsetLeft + 760;
      setLeft(left);
    });
    return document.querySelector(".Container").offsetLeft + 760;
  });
  const mobile = window.outerWidth < 769;

  return !mobile ? (
    <div
      className="upfab"
      style={{ top: top, left: left }}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      {"^"}
    </div>
  ) : (
    <div></div>
  );
};

export default FAB;
