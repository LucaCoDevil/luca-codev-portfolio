import React, { useState } from "react";

const Card = (props) => {
  const [isTouch, setisTouch] = useState(false);

  window.addEventListener("touchstart", () => {
    setisTouch(true);
  });

  const handleClick = () => {
    window.open(props.projectURL);
  };

  return (
    <div className="col" onClick={isTouch ? handleClick : null}>
      <img className="card-img" src={props.imgURL} alt={props.alt} />
      <div className="card-middle">
        <p className="card-description">{props.description}</p>
        <a
          className="card-link"
          href={props.projectURL}
          target="_blank"
          rel="noreferrer"
        >
          View project
        </a>
      </div>
    </div>
  );
};

export default Card;
