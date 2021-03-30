import React from "react";
import NavItem from "../sub-components/navigationItem";
import "./navigation.css";
import SliderButton from "../slideDrawer/slideDrawerButton";

const navigation = (props) => {
  return (
    <nav id="navbar">
      <SliderButton onClick={props.onToggleClick} />
      <ul className="item-list">
        <NavItem className="nav-item" name="Home" href="#landing-container" />
        <NavItem
          className="nav-item"
          name="My work"
          href="#portfolio-container"
        />
        <NavItem className="nav-item" name="Bio" href="#bio-container" />
        <NavItem
          className="nav-item"
          name="Contact"
          href="#contact-container"
        />
      </ul>
    </nav>
  );
};

export default navigation;
