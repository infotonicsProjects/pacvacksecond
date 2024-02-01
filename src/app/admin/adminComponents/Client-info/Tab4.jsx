import React from "react";

const Tab4 = () => {
  return (
    <div className="" id="b-tab-4" role="tabpanel">
      <h5>My bookmark</h5>
      <div className="card overflow-visible mb-1">
        <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-">
          <div className="container-fluid">
            <div className="row g-3">
              <div className="col-12">
                <div className="card overflow-hidden">
                  <div className="card-body bg-secondary text-light">
                    <h4>thememakker.com</h4>
                    <span>
                      Warning: You're approaching your limit. Please upgrade.
                    </span>
                  </div>
                  <div className="card-body">
                    <h2 className="fw-normal">
                      Current subscription: Pro Business (Annual){" "}
                    </h2>
                    <p>
                      Your subscription has 3 (included){" "}
                      <code>team members</code>. Your next payment of{" "}
                      <strong>$990</strong> (yearly) occurs on{" "}
                      <strong>April 20, 2023</strong>.{" "}
                    </p>
                    <span className="text-muted">
                      Thanks for choosing{" "}
                      <strong className="text-primary">ThemeMakker</strong>{" "}
                      Admin.
                    </span>
                  </div>
                  <div className="card-footer">
                    <a
                      href="page-pricing.html"
                      title=""
                      className="btn btn-secondary text-uppercase"
                    >
                      Upgrade Plan
                    </a>
                    <button type="button" className="btn btn-link text-danger">
                      Cancel subscription
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card fieldset border border-muted mt-3">
                  <span className="fieldset-tile text-muted bg-body">
                    Order History
                  </span>
                  <div className="card">
                    <div className="card-body table-responsive p-0">
                      <table className="table card-table mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Type</th>
                            <th scope="col">Receipt</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>April 27, 2021</td>
                            <td>
                              LUNO - Admin Dashboard Template for One project
                            </td>
                            <td className="date status">
                              <a href="#">HTML</a>
                              <span className="mx-3">|</span>
                              <a href="#">PDF</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Jun 22, 2021</td>
                            <td>
                              Lucid ASP .NET Core MVC - Responsive Admin
                              Template
                            </td>
                            <td className="date status">
                              <a href="#">HTML</a>
                              <span className="mx-3">|</span>
                              <a href="#">PDF</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Jun 22, 2021</td>
                            <td>
                              Aero - Bootstrap 5 &amp; 4 Admin Template with
                              Laravel &amp; Angular version
                            </td>
                            <td className="date status">
                              <a href="#">HTML</a>
                              <span className="mx-3">|</span>
                              <a href="#">PDF</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Jun 22, 2021</td>
                            <td>
                              Alpino - Bootstrap 4 Admin Dashboard Template
                            </td>
                            <td className="date status">
                              <a href="#">HTML</a>
                              <span className="mx-3">|</span>
                              <a href="#">PDF</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .row end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab4;
