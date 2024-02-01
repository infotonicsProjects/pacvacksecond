import React from "react";
import "./imageand.css";
const Imageandform = () => {
  return (
    <div className="email mt-5">
      <div className="wrapper-email">
        <div className="content-email">
          <div className="img-email">
            <img src="/img/aside.webp" alt="" />
          </div>
          <div className="form-email">
            <h1 style={{ fontSize: "1.667rem" }}>
              It &apos;s good to be on the list.
            </h1>
            <h3 style={{ fontSize: "1.111rem" }}>
              Get 15% off your order when you sign up for our emails
            </h3>
            <form>
              <div className="input-div">
                <input
                  type="email"
                  placeholder="Subscription email"
                  className="input-text required-entry email-input"
                  defaultValue=""
                  id="email-input"
                  style={{ fontStyle: "italic", opacity: "0.8" }}
                />
              </div>
              <p style={{ fontSize: "0.778rem", fontWeight: "100" }}>
                Yes&lsquo; I&apos;d like to receive special offer emails from
                PacvackPrint&lsquo; as well as news about products&lsquo;
                services and my designs in progress. Read our
                <a href="#"> Privacy and Cookie policy</a> .
              </p>
              <div className="btn-email">
                <button className="btn-buss">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageandform;
