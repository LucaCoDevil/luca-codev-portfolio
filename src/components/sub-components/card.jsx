import React from "react";

const card = (props) => {
  return (
    <div className="col">
      <img className="card-img" src={props.imgURL} alt={props.alt} />
      <div className="card-middle">
        <a className="card-text" href={props.projectURL}>
          View project
        </a>
      </div>
    </div>
  );
};

export default card;
