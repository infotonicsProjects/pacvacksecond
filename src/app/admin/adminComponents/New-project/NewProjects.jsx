import React from "react";
import Table from "./Table";

const NewProjects = () => {
  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button className="btn btn-secondary" type="button">
                    Search
                  </button>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_leads"
                    type="button"
                  >
                    Add new Leads
                  </button>
                </div>
                {/* Modal: Add new Leads */}
                {/* <button class="btn btn-primary px-4 text-uppercase" data-bs-toggle="modal" data-bs-target="#add_leads" type="button">Add new Leads</button> */}
                <div
                  className="modal fade"
                  id="add_leads"
                  tabIndex={-1}
                  aria-labelledby="add_leads"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Add new Lead</h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h6 className="fw-bold">Basic Information</h6>
                        <div className="row g-3">
                          <div className="col-lg-6 col-md-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                              />
                              <label>Enter Name</label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Company"
                              />
                              <label>Enter Company</label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-floating">
                              <input
                                type="date"
                                className="form-control"
                                placeholder="Date of Birth"
                              />
                              <label>Date of Birth </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-floating">
                              <select className="form-select form-control">
                                <option value={1}>Male</option>
                                <option value={2}>Female</option>
                              </select>
                              <label htmlFor="floatingSelect">Gender</label>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <label htmlFor="formFile" className="form-label">
                              Select Avatar
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-floating">
                              <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                style={{ height: 100 }}
                                defaultValue={""}
                              />
                              <label>Description</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <h6 className="fw-bold">
                              Leads's Account Information
                            </h6>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                              />
                              <label>Enter Email</label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                              />
                              <label>Enter Phone</label>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-floating">
                              <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                style={{ height: 100 }}
                                defaultValue={""}
                              />
                              <label>Address</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Table />
          </div>
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
  );
};

export default NewProjects;
