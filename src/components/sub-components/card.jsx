import React from "react";

const card = (props) => {
  return (
    <div className="col">
      <img className="card-img" src=".../images/p001c001.JPG" alt={props.alt} />
      <div className="card-middle">
        <div className="card-text">View project</div>
      </div>
    </div>
  );
};

export default card;
