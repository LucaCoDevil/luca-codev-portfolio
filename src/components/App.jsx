import React, { useState } from "react";
import Landing from "./landing/landingPage";
import Portfolio from "./portfolio/portfolio";
import Bio from "./bio/bio";
import Contact from "./contact/contact";
import SlideDrawer from "./slideDrawer/slideDrawer";
import Backdrop from "./backdrop/backdrop";

export default function App() {
  const [sliderIsOpen, setSliderOpen] = useState(false);

  const sliderClickHandler = () => {
    setSliderOpen((prev) => {
      return !sliderIsOpen;
    });
  };

  const backdropClickHandler = () => {
    setSliderOpen(false);
  };

  let backdrop;

  if (sliderIsOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div className="App">
      {/* <div className="landing-nav"> */}
      <Landing handleClick={sliderClickHandler} />
      {/* </div> */}
      <SlideDrawer show={sliderIsOpen} />
      {backdrop}
      <Portfolio />
      <Bio />
      <Contact />
    </div>
  );
}
