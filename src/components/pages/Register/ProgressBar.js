import React from "react";

const ProgressBar = ({ ChangeSpanColor, page }) => {
  return (
    <div className="progress__barContainer">
      <span className="first" style={ChangeSpanColor(1)}>
        1
      </span>
      <span className="second" style={ChangeSpanColor(2)}>
        2
      </span>
      <span className="third" style={ChangeSpanColor(3)}>
        3
      </span>
      <div
        className="progress__bar"
        style={{ width: page === 0 ? "0%" : page === 1 ? "50%" : "100%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
