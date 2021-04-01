import React from "react";
import "./slideDrawer.css";
import NavItem from "../sub-components/navigationItem";
import Media from "../mediaLinks/mediaLinks";

const slideDrawer = (props) => {
  let addOpen = "slide-drawer";

  if (props.show) {
    addOpen = "slide-drawer open";
  }

  return (
    <nav className={addOpen}>
      <ul className="mobile-nav">
        <NavItem
          className="mobile-link"
          name="Home"
          href="#landing-container"
        />
        <NavItem
          className="mobile-link"
          name="My work"
          href="#portfolio-container"
        />
        <NavItem className="mobile-link" name="Bio" href="#bio-container" />
        <NavItem
          className="mobile-link"
          name="Contact"
          href="#contact-container"
        />
      </ul>
      <Media containerStyle="mobile-container_icon" styleIcon="mobile-icons" />
    </nav>
  );
};

export default slideDrawer;
