import React from "react";
import NavItem from "../sub-components/navigationItem";
import './navigation.css'

const navigation = () => {
  return (
    <nav>
      <ul id="navbar">
        <NavItem name="Home" href="#landing-container" />
        <NavItem name="My work" href="#portfolio-container" />
        <NavItem name="Bio" href="#bio-container" />
        <NavItem name="Contact" href="#contact-container" />
      </ul>
    </nav>
  );
};

export default navigation;