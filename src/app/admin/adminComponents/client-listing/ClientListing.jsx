import { getUserData } from "@/utlis/Home";
import React from "react";

const ClientListing = async () => {
  const clientListData = await getUserData("ClientList");
  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12 mb-4">
            <div className="card p-3">
              <div className="row g-3">
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                  <div className="form-floating">
                    <select className="form-select" id="floatingSelect">
                      <option>Australia</option>
                      <option value={1}>Austria</option>
                      <option value={2}>Belgium</option>
                      <option value={3}>Italy</option>
                      <option value={4}>Germany</option>
                      <option value={5}>Cyprus</option>
                    </select>
                    <label htmlFor="floatingSelect">Location</label>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-6 col-md-6 col-sm-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Search by company, Location etc..."
                    />
                    <label>Search...</label>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-12">
                  <button
                    type="button"
                    className="btn w-100 btn-lg btn-primary"
                  >
                    Fillter
                  </button>
                </div>
              </div>{" "}
              {/* Row end  */}
            </div>
          </div>
          <div className="col-lg-6 col-sm-7">
            <h6 className="fw-bold mb-0">Showing 45 Applicants</h6>
            <span className="text-muted">Based your preferences</span>
          </div>
          <div className="col-lg-6 col-sm-5 text-md-end">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Newest
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-outline-primary">
                <i className="fa fa-align-left" />
              </button>
              <button type="button" className="btn btn-primary">
                <i className="fa fa-th" />
              </button>
            </div>
          </div>
        </div>{" "}
        {/* .row end */}
        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3 mt-1">
          {clientListData?.data?.map((client, id) => (
            <div className="col lift" key={id}>
              <div className="card">
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <div className="avatar lg rounded no-thumbnail">
                      <i className="fa fa-dashcube fa-2x" />
                    </div>
                  </div>
                  <div className="mt-3 py-2">
                    <h6 className="mb-0">{client?.name}</h6>
                    <span className="text-muted text-uppercase small">
                      {client?.email}
                    </span>
                    <div className="mt-3">
                      {" "}
                      4.0 <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" /> Reviews
                    </div>
                    <ul className="social mb-0 list-inline mt-3">
                      <li className="list-inline-item">
                        <a href="#" className="p-2">
                          <i className="fa fa-globe" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="p-2">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="p-2">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="p-2">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
  );
};

export default ClientListing;
