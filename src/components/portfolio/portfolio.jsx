import React, { useEffect } from "react";
import Card from "../sub-components/card";
import "./portfolio.css";
import keeper from "../../images/keeper.png";
import DailyJournal from "../../images/dailyjournal.png";
import SignUp from "../../images/signup.png";
import subsearch from "../../images/subsearch.png";

function Portfolio() {
  //project description variables
  const keeperDesc =
    "Keeper is a dynamically loaded note taking webApp built with the MERN stack technologies.";
  const dailyJournalDesc =
    "Daily Journal is a Blog based webApp where one can create and manage blog posts.";
  const emailFormDesc =
    "Email Form is a Mailchimp newsletter sign up page used to add the user to an email list.";
  const subsearchDesc =
    "SubSearch is a subreddit search engine that allows one to view the most popular posts in a subreddit";
  useEffect(() => {
    document.getElementById("defaultOpen").click();
  });

  //change tab
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }

  return (
    <div id="portfolio-container">
      <h2>PORTFOLIO</h2>
      <div id="container">
        {/* portfolio nav */}
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
        {/* portfolio content */}
        {/* all */}
        <div id="All" className="tabcontent">
          <div className="row">
            <Card
              imgURL={keeper}
              projectURL="https://luca-codev-keeper.herokuapp.com/"
              alt="Keeper project"
              description={keeperDesc}
            />
            <Card
              imgURL={DailyJournal}
              projectURL="https://luca-codev-dailyjournal.herokuapp.com/"
              alt="Daily Journal project"
              description={dailyJournalDesc}
            />
            <Card
              imgURL={SignUp}
              projectURL="https://lucacodev-emailform.herokuapp.com"
              alt="Email form project"
              description={emailFormDesc}
            />
            <Card
              imgURL={subsearch}
              projectURL="https://lucacodev-subsearch.netlify.app/"
              alt="subreddit search engine"
              description={subsearchDesc}
            />
          </div>
        </div>
        {/* react */}
        <div id="Reactjs" className="tabcontent">
          <div className="row">
            <Card
              imgURL={keeper}
              projectURL="https://luca-codev-keeper.herokuapp.com/"
              alt="Keeper project"
              description={keeperDesc}
            />
            <Card
              imgURL={subsearch}
              projectURL="https://lucacodev-subsearch.netlify.app/"
              alt="subreddit search engine"
              description={subsearchDesc}
            />
          </div>
        </div>
        {/* javascript */}
        <div id="Javascript" className="tabcontent">
          <div className="row">
            <Card
              imgURL={DailyJournal}
              projectURL="https://luca-codev-dailyjournal.herokuapp.com/"
              alt="Daily Journal project"
              description={dailyJournalDesc}
            />
            <Card
              imgURL={SignUp}
              projectURL="https://lucacodev-emailform.herokuapp.com"
              alt="Email form project"
              description={emailFormDesc}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
