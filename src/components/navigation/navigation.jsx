import { React, useState } from "react";
import NavItem from "../sub-components/navigationItem";
import "./navigation.css";
import SliderButton from "../slideDrawer/slideDrawerButton";
import Media from "../mediaLinks/mediaLinks";

const Navigation = (props) => {
  //ADD STATE TO CONTROL STYLING OF NAVBAR BASED ON POSITION

  let getPosition = (el) => {
    const position0 = (window.pageYOffset = 0);
    window.addEventListener("scroll", () => {
      let navbarPosition = el.getBoundingClientRect().y;
      if (navbarPosition <= 0) {
        console.log("reached");
        document.getElementById("navbar").classList.add("blah");
      }
    });
  };

  return (
    <nav ref={getPosition} id="navbar">
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
      <Media containerStyle="nav-container_icon" styleIcon="nav-icon" />
    </nav>
  );
};

export default Navigation;
