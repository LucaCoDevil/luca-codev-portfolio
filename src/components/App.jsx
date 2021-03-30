import React from "react";
import Nav from "./navigation/navigation";
import Landing from "./landing/landingPage";
import Portfolio from "./portfolio/portfolio";
import Bio from "./bio/bio";
import Contact from "./contact/contact";
export default function App() {
  return (
    <div className="App">
      <Landing />
      <Nav />
      <Portfolio />
      <Bio />
      <Contact />
    </div>
  );
}
