import React from "react";
import Nav from "./navigation";
import Landing from "./landingPage";
import Portfolio from "./portfolio";
import Bio from "./bio";
import Contact from "./contact";

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
