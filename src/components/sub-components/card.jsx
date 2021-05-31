import React from "react";

const Card = (props) => {
  return (
    <div className="col">
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
