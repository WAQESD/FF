import React, { useEffect, useState } from "react";

const FAB = () => {
  const [top, setTop] = useState(() => {
    window.addEventListener("scroll", () => {
      var position = window.scrollY + window.outerHeight * 0.75;
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

  return (
    <div
      className="upfab"
      style={{ top: top, left: left }}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      {"^"}
    </div>
  );
};

export default FAB;
