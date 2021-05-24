import React, { useState } from "react";

const FAB = () => {
  const [top, setTop] = useState(0);
  window.addEventListener("scroll", () => {
    var position = window.scrollY + window.outerHeight * 0.75;
    setTop(position);
  });
  return (
    <div
      className="upfab"
      style={{ top: top }}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      {"^"}
    </div>
  );
};

export default FAB;
