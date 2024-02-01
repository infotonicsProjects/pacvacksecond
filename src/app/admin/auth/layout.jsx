import React from "react";
import FooterLogo from "../../../app/admin/adminComponents/FooterLogo";
import logo from "../main/packVack-logo.png";

export default function layout({ children }) {
  return (
    <>
      <header
        className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mobile-header"
        color-theme="light"
      >
        <div className="container-fluid">
          <nav className="navbar">
            <FooterLogo src={logo} width={240} height={50} />
          </nav>
        </div>
      </header>
      {/* <!-- start: body area --> */}
      <div className="wrapper mobileAuth-view">
        {/* <!-- Sign In version 1 --> */}
        {/* <!-- start: page body --> */}
        <div className="page-body auth px-xl-4 px-sm-2 px-0 py-lg-2 py-1 movbileview">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                <div style={{ maxWidth: "25rem" }}>
                  <div className="mb-4">
                    <FooterLogo src={logo} width={240} height={50} />
                  </div>
                  <div className="mb-5">
                    <h2 className="color-900">Build digital products with:</h2>
                  </div>
                  <ul className="list-unstyled mb-5">
                    <li className="mb-4">
                      <span className="d-block mb-1 fs-4 fw-light">
                        All-in-one tool
                      </span>
                      <span className="color-600">
                        Amazing Features to make your life easier & work
                        efficient
                      </span>
                    </li>
                    <li>
                      <span className="d-block mb-1 fs-4 fw-light">
                        Easily add &amp; manage your services
                      </span>
                      <span className="color-600">
                        It brings together your tasks, projects, timelines,
                        files and more
                      </span>
                    </li>
                  </ul>
                  <div className="mb-2">
                    <a href="#y" className="me-3 color-600">
                      Home
                    </a>
                    <a href="#y" className="me-3 color-600">
                      About Us
                    </a>
                    <a href="#y" className="me-3 color-600">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#y" className="me-3 color-400">
                      <i className="fa fa-facebook-square fa-lg"></i>
                    </a>
                    <a href="#y" className="me-3 color-400">
                      <i className="fa fa-github-square fa-lg"></i>
                    </a>
                    <a href="#y" className="me-3 color-400">
                      <i className="fa fa-linkedin-square fa-lg"></i>
                    </a>
                    <a href="#y" className="me-3 color-400">
                      <i className="fa fa-twitter-square fa-lg"></i>
                    </a>
                  </div>
                </div>

                {/* <!-- List Checked --> */}
              </div>
              {children}
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              {/* <!-- YOUR DYNAMIC PAGE CODE START HERE  --> */}
              {/* <!--//////// YOUR DYNAMIC PAGE CODE START HERE  --> */}
            </div>
            {/* <!-- start: page footer --> */}
          </div>

          {/* <!-- End Row --> */}
        </div>
      </div>
    </>
  );
}
