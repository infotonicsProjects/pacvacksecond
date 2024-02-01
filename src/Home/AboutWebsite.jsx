import React from "react";
import "./aboutwebsite.css";
const AboutWebsite = () => {
  return (
    <div className="about-website pt-5 pb-5">
      <div className="wrapper-about-website">
        <div className="content-about">
          <div className="first-content">
            <div className="heading-first-about">
              <h1>Infotoinics: Here for small business since 1995.</h1>
              <p style={{ fontWeight: "100" }}>
                For more than 20 years, PacvackPrint has helped small business
                owners, entrepreneurs and dreamers create custom designs and
                professional marketing. Our online printing services are
                intended to help you find custom products you need – business
                cards, promotional marketing and more – to create a look you
                love.
              </p>
            </div>
          </div>
          <div className="second-content" style={{ paddingLeft: "15rem" }}>
            <div className="first-second-content mt-2">
              <h3>Easy Design</h3>
              <p>
                Our online tools make the process as simple and clear as
                possible, and we’re working to improve your experience all the
                time.
              </p>
            </div>
            <div className="second-second-content">
              <h3>Make it Match</h3>
              <p>
                Our designs can be used across multiple printed products, which
                makes it easier for you to create consistent, professional
                marketing.
              </p>
            </div>
            <div className="third-second-content">
              <h3>Absolutely Guaranteed</h3>
              <p>
                We stand by everything we sell. So if you’re not satisfied,
                we’ll make it right.
                <a href="#" className="text-dark text-decoration-underline">
                  {" "}
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWebsite;
