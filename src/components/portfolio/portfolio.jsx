import React, { useEffect } from "react";
import Card from "../sub-components/card";
import "./portfolio.css";
import keeper from "../../images/keeper.png";
import DailyJournal from "../../images/dailyjournal.png";
import SignUp from "../../images/signup.png";

function Portfolio() {
  useEffect(() => {
    document.getElementById("defaultOpen").click();
  });

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    console.log(document.getElementById(tabName));

    document.getElementById(tabName).style.display = "block";

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }

  return (
    <div id="portfolio-container">
      <h2>PROJECTS</h2>
      <div id="container">
        <div className="tab">
          <button
            className="tablinks"
            onClick={(e) => {
              openTab(e, "All");
            }}
            id="defaultOpen"
          >
            ALL
          </button>
          <button
            className="tablinks"
            onClick={(e) => {
              openTab(e, "Reactjs");
            }}
          >
            REACT-JS
          </button>
          <button
            className="tablinks"
            onClick={(e) => {
              openTab(e, "Javascript");
            }}
          >
            JAVASCRIPT
          </button>
        </div>

        <div id="All" className="tabcontent">
          <div className="row">
            <Card
              imgURL={keeper}
              projectURL="https://luca-codev-keeper.herokuapp.com/"
              alt="Dev"
            />
            <Card
              imgURL={DailyJournal}
              projectURL="https://luca-codev-dailyjournal.herokuapp.com/"
              alt="Dev"
            />
            <Card
              imgURL={SignUp}
              projectURL="https://lucacodev-emailform.herokuapp.com"
              alt="Dev"
            />
          </div>
        </div>

        <div id="Reactjs" className="tabcontent">
          <div className="row">
            <Card
              imgURL={keeper}
              projectURL="https://luca-codev-keeper.herokuapp.com/"
              alt="Dev"
            />
          </div>
        </div>

        <div id="Javascript" className="tabcontent">
          <div className="row">
            <Card
              imgURL={DailyJournal}
              projectURL="https://luca-codev-dailyjournal.herokuapp.com/"
              alt="Dev"
            />
            <Card
              imgURL={SignUp}
              projectURL="https://lucacodev-emailform.herokuapp.com"
              alt="Dev"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
