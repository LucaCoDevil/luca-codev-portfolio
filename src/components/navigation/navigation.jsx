import { React, useEffect } from "react";
import NavItem from "../sub-components/navigationItem";
import "./navigation.css";
// import SliderButton from "../slideDrawer/slideDrawerButton";
import Media from "../mediaLinks/mediaLinks";

const Navigation = (props) => {
  //ADD STATE TO CONTROL STYLING OF NAVBAR BASED ON POSITION

  useEffect(() => {
    const el = document.getElementById("navbar");
    const positionOrigin = el.getBoundingClientRect().y;
    window.addEventListener("scroll", () => {
      let navbarPosition = el.getBoundingClientRect();
      if (navbarPosition.y <= 0) {
        document.getElementById("navbar").classList.add("scrolled");
      }
      if (window.pageYOffset <= positionOrigin) {
        document.getElementById("navbar").classList.remove("scrolled");
      }
    });
  });

  return (
    <nav id="navbar">
      {/* <SliderButton onClick={props.onToggleClick} /> */}
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
