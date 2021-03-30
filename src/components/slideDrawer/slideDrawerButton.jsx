import React from "react";
import "./sliderDrawerButton.css";

const toggleButton = (props) => {
  return (
    <button className="button-toggle">
      <div className="button-toggle_line"></div>
      <div className="button-toggle_line"></div>
      <div className="button-toggle_line"></div>
    </button>
  );
};

export default toggleButton;
