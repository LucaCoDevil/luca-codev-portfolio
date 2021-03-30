import React from "react";
import NavItem from "../sub-components/navigationItem";
import "./navigation.css";
import SliderButton from "../slideDrawer/slideDrawerButton";

const navigation = () => {
  return (
    <nav id="navbar">
      <SliderButton />
      <ul className="item-list">
        <NavItem name="Home" href="#landing-container" />
        <NavItem name="My work" href="#portfolio-container" />
        <NavItem name="Bio" href="#bio-container" />
        <NavItem name="Contact" href="#contact-container" />
      </ul>
    </nav>
  );
};

export default navigation;
