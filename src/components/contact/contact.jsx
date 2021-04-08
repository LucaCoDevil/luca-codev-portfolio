import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const contact = () => {
  const {
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID,
    REACT_APP_USER_ID,
  } = process.env;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        REACT_APP_USER_ID,
        e.target
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="contact-container">
      <h2 style={{ color: "#dbdbdb", borderColor: "#dbdbdb" }}>CONTACT</h2>
      <div className="form-align">
        <form onSubmit={sendEmail} className="form-controller">
          <input
            type="text"
            className="input-controller"
            placeholder="Name"
            name="user_name"
          />
          <input
            type="email"
            className="input-controller"
            placeholder="Email"
            name="user_email"
          />
          <textarea
            cols="50"
            className="input-controller"
            style={{resize: "none"}}
            placeholder="Message"
            rows="8"
            name="message"
          ></textarea>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
