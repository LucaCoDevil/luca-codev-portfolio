import React from "react";
import "./landing.css";
import Nav from "../navigation/navigation";
import SliderButton from "../slideDrawer/slideDrawerButton";


const LandingPage = (props) => {


  return (
    <div id="landing">
      <div className="clip01"></div>

      <div className="clip02"></div>
      
      <div id="landing-container">
        <h1 className="main-header">Luca Codevilla</h1>
        <h4 className="main-description">Full-stack web developer</h4>
        {/* <button id="cta-btn">CTA</button> */}
      </div>
      <Nav/>
      <SliderButton onClick={props.handleClick} />
    </div>
     
  );
};

export default LandingPage;
