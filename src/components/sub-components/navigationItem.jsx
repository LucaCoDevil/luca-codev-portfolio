import React from "react";

const navigationItem = function (props) {
  return (
    <li className="nav-item">
      <a href={props.href}>{props.name}</a>
    </li>
  );
}

export default navigationItem;
