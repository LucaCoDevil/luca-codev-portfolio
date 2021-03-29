import React from "react";

const card = (props) => {
  return (
    <div className="col">
      <img className="card-img" src={props.srcURL} alt={props.alt} />
      <div className="card-middle">
        <div className="card-text">View project</div>
      </div>
    </div>
  );
};

export default card;
