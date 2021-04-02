import React, { useState, useRef } from "react";
import "./landing.css";
import Nav from "../navigation/navigation";

const LandingPage = (props) => {
  // const navbar = document.get("blah");

  const refer = useRef();

  // const checkScroll = () => {
  //   console.log(refer.getBoundingClientRect().width);
  // };

  // window.addEventListener("scroll", checkScroll);

  return (
    <div>
      <div className="clip01"></div>

      <div className="clip02"></div>

      <div id="landing-container">
        <h1 className="main-header">Luca Codevilla</h1>
        <h4 className="main-description">Full-stack web developer</h4>
        {/* <button id="cta-btn">CTA</button> */}
      </div>
      <Nav parentRef={refer} id="blah" onToggleClick={props.handleClick} />
    </div>
  );
};

export default LandingPage;
