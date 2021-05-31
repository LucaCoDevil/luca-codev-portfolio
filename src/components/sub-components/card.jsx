import React from "react";

const card = (props) => {
  const handleClick = () => {
    window.open(props.projectURL);
  };

  return (
    <div className="col" onTouchStart={handleClick}>
      <img className="card-img" src={props.imgURL} alt={props.alt} />
      <div className="card-middle">
        <p className="card-description">{props.description}</p>
        <a className="card-link" href={props.projectURL} target="_blank">
          View project
        </a>
      </div>
    </div>
  );
};

export default card;
