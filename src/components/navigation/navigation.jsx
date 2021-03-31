import React from "react";
import NavItem from "../sub-components/navigationItem";
import "./navigation.css";
import SliderButton from "../slideDrawer/slideDrawerButton";

const navigation = (props) => {
  return (
    <nav id="navbar">
      <SliderButton onClick={props.onToggleClick} />
      <ul className="item-list">
        <NavItem className="nav-item" name="HOME" href="#landing-container" />
        <NavItem
          className="nav-item"
          name="PORTFOLIO"
          href="#portfolio-container"
        />
        <NavItem className="nav-item" name="BIO" href="#bio-container" />
        <NavItem
          className="nav-item"
          name="CONTACT"
          href="#contact-container"
        />
      </ul>
    </nav>
  );
};

export default navigation;
