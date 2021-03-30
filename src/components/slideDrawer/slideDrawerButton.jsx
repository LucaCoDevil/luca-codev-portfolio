import React from "react";
import "./sliderDrawerButton.css";

const toggleButton = (props) => {
  return (
    <div>
      <button className="button-toggle" onClick={props.onClick}>
        <div className="button-toggle_line"></div>
        <div className="button-toggle_line"></div>
        <div className="button-toggle_line"></div>
      </button>
    </div>
  );
};

export default toggleButton;
