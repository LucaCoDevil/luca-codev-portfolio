import React from "react";
import './bio.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faNodeJs,
  faCss3Alt,
  faJsSquare,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import image from "../../images/p001c001.JPG";

 const bio = () => {
  return (
    <div id="bio-container">
      <h2>Bio</h2>
      <p className="description">some info about me </p>

      <div id="info-container">
        <div id="left-bio">
          <img id="portrait-img" src={image} alt="Portrait" />

          <div className="wrapper">
            <div className="left-text">
              <h3>Who am I? </h3>
              <p className="bio-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
                risus eget ex tempor gravida at sed orci. Proin id turpis odio.
                Vivamus fermentum tincidunt sem a porta. Donec accumsan pulvinar
                odio, nec bibendum quam tincidunt sed.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed id risus eget ex tempor
                gravida at sed orci. Proin id turpis odio. Vivamus fermentum
                tincidunt sem a porta.
              </p>
            </div>
            <button className="bio-btn">Learn more</button>
          </div>
        </div>
        <div id="right-bio">
          <div id="inner-rb">
            <FontAwesomeIcon className="skill-icon" icon={faHtml5} size="3x" />
            <FontAwesomeIcon className="skill-icon" icon={faNodeJs} size="3x" />
            <FontAwesomeIcon
              className="skill-icon"
              icon={faCss3Alt}
              size="3x"
            />
            <FontAwesomeIcon
              className="skill-icon"
              icon={faJsSquare}
              size="3x"
            />
            <FontAwesomeIcon className="skill-icon" icon={faServer} size="3x" />
            <FontAwesomeIcon
              className="skill-icon"
              icon={faDatabase}
              size="3x"
            />
            <FontAwesomeIcon className="skill-icon" icon={faReact} size="3x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default bio;
