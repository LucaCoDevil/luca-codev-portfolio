import React, { useEffect } from "react";
import Card from "../sub-components/card";
import "./portfolio.css";

// document.getElementById("defaultOpen").click();
// Get the element with id="defaultOpen" and click on it

function Portfolio() {
  useEffect(() => {
    document.getElementById("defaultOpen").click();
  });

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    console.log(document.getElementById(cityName));

    document.getElementById(cityName).style.display = "block";

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }

  return (
    //container

    <div id="portfolio-container">
      <h2>My work</h2>
      {/* description */}
      {/* <p className="description">A few of my favorite projects</p> */}
      {/* tab nav system */}
      <div id="container">
        {/* buttons for tab nav */}
        <div className="tab">
          <button
            className="tablinks"
            onClick={(e) => {
              openCity(e, "London");
            }}
            id="defaultOpen"
          >
            London
          </button>
          <button
            className="tablinks"
            onClick={(e) => {
              openCity(e, "Paris");
            }}
          >
            Paris
          </button>
          <button
            className="tablinks"
            onClick={(e) => {
              openCity(e, "Tokyo");
            }}
          >
            Tokyo
          </button>
        </div>

        {/* tab content */}
        <div id="London" className="tabcontent">
          {/* row of 4 columns */}
          <div className="row">
            {/* each column is a quarter of the parent  */}
            <Card srcURL="../images/p001c001.JPG" alt="Dev" />
            <Card
              srcURL="https://res.cloudinary.com/practicaldev/image/fetch/s--wvB7F1QQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/3840/1%2Ay3c9ggOkOzdAr8JC7TUrEQ%402x.png"
              alt="Dev"
            />
            <Card
              srcURL="https://www.wethetalent.co/wp-content/uploads/2015/05/1400_700-Q8gA0YeaskPak6UY77BXMnrOA4WpMCCXVKdmRxyD6tfDafw50mYBah41r90C9Jww.jpg"
              alt="Dev"
            />
          </div>
        </div>

        <div id="Paris" className="tabcontent">
          {/* row of 4 columns */}
          <div className="row">
            {/* each column is a quarter of the parent  */}
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>

        <div id="Tokyo" className="tabcontent">
          {/* row of 4 columns */}
          <div className="row">
            {/* each column is a quarter of the parent  */}
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
