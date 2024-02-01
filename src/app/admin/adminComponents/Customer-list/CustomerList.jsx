import React from "react";

const CustomerList = () => {
  return (
    <>
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
                      data-bs-target="#add_customers"
                      type="button"
                    >
                      Add new Customers
                    </button>
                  </div>
                  {/* Modal: Add new Customers */}
                  {/* <button class="btn btn-primary px-4 text-uppercase" data-bs-toggle="modal" data-bs-target="#add_customers" type="button">Add new Customers</button> */}
                  <div
                    className="modal fade"
                    id="add_customers"
                    tabIndex={-1}
                    aria-labelledby="add_customers"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Add new Customers</h5>
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
                                  placeholder="First Name"
                                />
                                <label>Enter First Name</label>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last Name"
                                />
                                <label>Enter Last Name</label>
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
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Bank details"
                                />
                                <label>Bank details</label>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                              <div className="form-floating">
                                <select className="form-select form-control">
                                  <option value={1}>VIP</option>
                                  <option value={2}>Vendors</option>
                                  <option value={2}>Regular</option>
                                </select>
                                <label htmlFor="floatingSelect">
                                  Customer type
                                </label>
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
                                  placeholder="Address"
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
              <table
                id="myDataTable_no_filter"
                className="table myDataTable align-middle custom-table"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Join</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar1.jpg"
                          className="rounded-circle avatar"
                          alt=""
                        />
                        <h6 className="ms-2 mb-0 fw-bold">Chris Fox</h6>
                      </div>
                    </td>
                    <td>+14 1234 567 888</td>
                    <td>chris.fox@example.com</td>
                    <td>12 April 2016</td>
                    <td>44 Shirley Ave. West Chicago, IL 60185</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favorite"
                      >
                        <i className="fa fa-star-o" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Manage"
                      >
                        <i className="fa fa-gear" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar2.jpg"
                          className="rounded-circle avatar"
                          alt=""
                        />
                        <h6 className="ms-2 mb-0 fw-bold">Edit Toke</h6>
                      </div>
                    </td>
                    <td>+14 1234 567 565</td>
                    <td>Toke.fox@example.com</td>
                    <td>14 Nov 2020</td>
                    <td>123 6th St. Melbourne, FL 32904</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favorite"
                      >
                        <i className="fa fa-star-o" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Manage"
                      >
                        <i className="fa fa-gear" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar3.jpg"
                          className="rounded-circle avatar"
                          alt=""
                        />
                        <h6 className="ms-2 mb-0 fw-bold">Manuella</h6>
                      </div>
                    </td>
                    <td>+14 1234 567 999</td>
                    <td>Manuella.fox@example.com</td>
                    <td>22 Aug 2020</td>
                    <td>44 Shirley Ave. West Chicago, IL 60185</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favorite"
                      >
                        <i className="fa fa-star-o" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Manage"
                      >
                        <i className="fa fa-gear" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar10.jpg"
                          className="rounded-circle avatar"
                          alt=""
                        />
                        <h6 className="ms-2 mb-0 fw-bold">Maryam Amiri</h6>
                      </div>
                    </td>
                    <td>+14 1234 567 343</td>
                    <td>Maryam.fox@example.com</td>
                    <td>18 May 2017</td>
                    <td>70 Bowman St. South Windsor, CT 06074</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favorite"
                      >
                        <i className="fa fa-star-o" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Manage"
                      >
                        <i className="fa fa-gear" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar9.jpg"
                          className="rounded-circle avatar"
                          alt=""
                        />
                        <h6 className="ms-2 mb-0 fw-bold">Brian Swader</h6>
                      </div>
                    </td>
                    <td>+14 1234 567 666</td>
                    <td>Brian.fox@example.com</td>
                    <td>12 Jun 2018</td>
                    <td>44 Shirley Ave. West Chicago, IL 60185</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favorite"
                      >
                        <i className="fa fa-star-o" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Manage"
                      >
                        <i className="fa fa-gear" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>{" "}
          {/* .row end */}
        </div>
      </div>
    </>
  );
};

export default CustomerList;
