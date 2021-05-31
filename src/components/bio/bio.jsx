import React, { useState } from "react";
import "./bio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faNodeJs,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import image from "../../images/p001c001.JPG";
import circleImg from "../../images/cirlceProfilePic.png";

const Bio = () => {
  const [isSmall, setIsSmall] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 850) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  });

  return (
    <div id="bio-container">
      <h2>BIO</h2>
      {/* <p className="description">some info about me </p> */}

      <div id="info-container">
        <div id="left-bio">
          <img
            id="portrait-img"
            src={isSmall ? circleImg : image}
            alt="Portrait"
          />

          <div className="wrapper">
            <div className="left-text">
              <h3>Who am I? </h3>
              <p className="bio-description">
                I’m a full-stack web developer, primarily focusing on the MERN
                (MongoDB, ExpressJS, ReactJS, NodeJS) stack. I enjoy creating
                easily used, fluid webApps while incorporating a fully
                functional back-end component. I also have a hard driven passion
                for writing dynamically loaded, efficient code that allows for
                an enjoyable user experience.
              </p>
            </div>
            <a
              className="bio-btn"
              href="https://www.linkedin.com/in/luca-codevilla-3b379419a/"
            >
              Learn more!
            </a>
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

export default Bio;
