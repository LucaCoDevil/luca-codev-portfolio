import React from "react";

const contact = () => {
  return (
    <div id="contact-container">
      <h2 style={{ color: "#dbdbdb", borderColor: "#dbdbdb" }}>Contact</h2>
      <div className="form-align">
        <form action="" className="form-controller">
          <input
            type="text"
            className="input-controller"
            placeholder="First name"
          />
          <input
            type="text"
            className="input-controller"
            placeholder="Last Name"
          />
          <textarea
            cols="50"
            className="input-controller"
            placeholder="Message"
            rows="8"
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
