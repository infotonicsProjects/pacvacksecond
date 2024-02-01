import React from "react";
// form wizard

import logo from "./packVack-logo.png";
import Link from "next/link";
import FooterLogo from "../../../app/admin/adminComponents/FooterLogo";
export default function Footer() {
  return (
    <>
      <footer className="page-footer px-xl-4 px-sm-2 px-0 py-3">
        <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
          <p className="col-md-4 mb-0 text-muted">
            © 2023{" "}
            <a
              target="_blank"
              title="ThemeMakker Infotech LLP"
              rel="noreferrer"
              href="/"
            >
              Pack Vack
            </a>
            &comma;All Rights Reserved.
          </p>
          <Link
            href="/admin"
            className="col-md-4 d-flex align-items-center justify-content-center my-3 my-lg-0 me-lg-auto ms-auto"
          >
            <FooterLogo src={logo} width={150} height={50} />
          </Link>
          <ul className="nav col-md-4 justify-content-center justify-content-lg-end">
            <h6>Powered by Infotonic Media</h6>
          </ul>
        </div>
      </footer>
      <div className="modal fade" id="CreateNew" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-vertical modal-dialog-scrollable">
          {/* kyv form modal  */}
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title"> Kyc Form</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body custom_scroll">
              <div className="tab-content">
                {/* personal information form */}
                {/* <form onSubmit={personalInFormSu}> */}
                <div className="tab-pane fade show active" id="step1">
                  <div className="card mb-2">
                    <div className="card-body">
                      <p className="text-muted small">
                        Please fill with your personal information
                      </p>
                      <div className="form-floating mb-2">
                        {/* section1 = personal form */}
                        <div id="heading-kyc-form">
                          <h5>{"heading"}</h5>
                        </div>

                        {/* <Section1 /> */}
                      </div>
                    </div>
                  </div>
                  {/* personal information submit button */}
                  {/* <div className="text-center">
                      <button className="btn btn-lg bg-secondary text-light next text-uppercase sw-btn-next" >Next</button>
                    </div> */}
                </div>
                {/* </form> */}
                {/* Spouse Inforamtion  */}

                {/* Parent Inforamtion  */}

                {/* Child Inforamtion Form */}

                {/* Invesment Information */}

                {/* Loans Information */}

                {/*Assets Information  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
