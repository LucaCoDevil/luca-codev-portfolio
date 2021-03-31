import React from "react";
import "./landing.css";

const landingPage = () => {
  return (
    <div>
      <div class="clip01"></div>

      <div class="clip02"></div>

      <div id="landing-container">
        <h1 className="main-header">Luca Codevilla</h1>
        <h4 className="main-description">Full-stack web developer</h4>
        {/* <button id="cta-btn">CTA</button> */}
      </div>
    </div>
  );
};

export default landingPage;
