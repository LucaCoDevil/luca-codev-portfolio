import React, { useEffect } from "react";
import "./sliderDrawerButton.css";

const ToggleButton = (props) => {
  useEffect(() => {
    const button = document.getElementById("button");
    const positionOrigin = button.getBoundingClientRect().y;
    window.addEventListener("scroll", () => {
      if (button.getBoundingClientRect().y >= 0) {
        button.classList.add("fixed");
      }
      if (window.pageYOffset <= positionOrigin) {
        button.classList.remove("fixed");
      }
    });
  });

  return (
    <div className="button-container" id="button">
      <button className="button-toggle" onClick={props.onClick}>
        <div className="button-toggle_line"></div>
        <div className="button-toggle_line"></div>
        <div className="button-toggle_line"></div>
      </button>
    </div>
  );
};

export default ToggleButton;
