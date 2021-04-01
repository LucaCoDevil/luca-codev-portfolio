import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const mediaLinks = (props) => (
  <div className={props.containerStyle}>
    <a href="https://github.com/LucaCoDevil">
      <FontAwesomeIcon
        className={props.styleIcon}
        icon={faGithubSquare}
        size="2x"
      />
    </a>
    <a href="https://www.linkedin.com/in/luca-codevilla-3b379419a/">
      <FontAwesomeIcon
        className={props.styleIcon}
        icon={faLinkedin}
        size="2x"
      />
    </a>
  </div>
);

export default mediaLinks;
