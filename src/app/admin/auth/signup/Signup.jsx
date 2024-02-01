import React from "react";
import Form from "./Form.jsx";

export default function Signup() {
  return (
    <>
      <Form />

      <div
        className="modal fade"
        id="exampleModalFullscreen"
        tabIndex={-1}
        aria-labelledby="exampleModalFullscreenLabel"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title h4" id="exampleModalFullscreenLabel">
                Full screen modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModalFullscreen" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-vertical modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header px-4">
              <h5 className="modal-title">
                My Notes <span className="badge bg-danger ms-2">14</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="bg-light px-4 py-3">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#Notetab-all"
                    role="tab"
                    aria-selected="true"
                  >
                    All Notes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#Notetab-Business"
                    role="tab"
                    aria-selected="false"
                  >
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#Notetab-Social"
                    role="tab"
                  >
                    Social
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#Notetab-Create"
                    role="tab"
                  >
                    <i className="fa fa-plus me-2"></i>New
                  </a>
                </li>
              </ul>
            </div>
            <div className="modal-body px-4 custom_scroll">
              <div className="tab-content p-0">
                <div
                  className="tab-pane fade active show"
                  id="Notetab-all"
                  role="tabpanel"
                >
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-primary position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">02 January 2021</span>
                      <p className="lead">Give Review for design</p>
                      <span>
                        It has roots in a piece of classical Latin literature
                        from 45 BC, making it over 2020 years old.
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-success position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">17 January 2022</span>
                      <p className="lead">Give salary to employee</p>
                      <span>
                        The generated Lorem Ipsum is therefore always free from
                        repetition
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-info position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">02 Fabruary 2020</span>
                      <p className="lead">Launch new template</p>
                      <span>
                        Blandit tempus porttitor aasfs. Integer posuere erat a
                        ante venenatis.
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-dark position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">22 August 2021</span>
                      <p className="lead">Nightout with friends</p>
                      <span>
                        Blandit tempus porttitor aasfs. Integer posuere erat a
                        ante venenatis.
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-danger position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">01 December 2021</span>
                      <p className="lead">Change a Design</p>
                      <span>
                        {" "}
                        It has survived not only five centuries, but also the
                        leap into electronic
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-warning position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">10 December 2021</span>
                      <p className="lead">Meeting with Mr.Lee</p>
                      <span>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Notetab-Business"
                  role="tabpanel"
                >
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-warning position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">10 December 2021</span>
                      <p className="lead">Meeting with Mr.Lee</p>
                      <span>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-danger position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">01 December 2021</span>
                      <p className="lead">Change a Design</p>
                      <span>
                        {" "}
                        It has survived not only five centuries, but also the
                        leap into electronic
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Notetab-Social"
                  role="tabpanel"
                >
                  <div className="card ribbon mb-2">
                    <div className="option-2 bg-dark position-absolute"></div>
                    <div className="card-body">
                      <span className="text-muted">22 August 2021</span>
                      <p className="lead">Nightout with friends</p>
                      <span>
                        Blandit tempus porttitor aasfs. Integer posuere erat a
                        ante venenatis.
                      </span>
                    </div>
                    <div className="card-footer pt-0 border-0">
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-star favourite-note"></i>
                      </a>
                      <a className="btn btn-sm btn-outline-secondary" href="#y">
                        <i className="fa fa-trash favourite-note"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Notetab-Create"
                  role="tabpanel"
                >
                  <div className="form-floating mb-2">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Note Title"
                    />
                    <label>Note Title</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      required
                      type="text"
                      className="form-control datepicker"
                      placeholder="Select Date"
                    />
                    <label>Select Date</label>
                  </div>
                  <div className="form-floating mb-2">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">Business</option>
                      <option value="2">Social</option>
                    </select>
                    <label>Works with selects</label>
                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label>Leave a comment here</label>
                  </div>
                  <button type="button" className="btn btn-primary lift">
                    Save note
                  </button>
                  <button
                    type="button"
                    className="btn btn-white border lift"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
