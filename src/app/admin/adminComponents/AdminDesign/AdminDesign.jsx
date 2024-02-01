import { getUserData } from "@/utlis/Home";
import React from "react";
import Mapdata from "./Mapdata";

const AdminDesign = async () => {
  const data = await getUserData("AdminList");
  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row g-3 mb-3">
          <div className="col-12">
            <div className="card p-3 mb-2 border-0">
              <div className="row g-3">
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                  <div className="form-floating">
                    <select className="form-select">
                      <option>Select</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <label>Select Month</label>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <label>Event Search...</label>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-12 text-lg-end">
                  <label className="form-label"> &nbsp; </label>
                  <div>
                    <button type="button" className="btn btn-primary btn-lg">
                      Search
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#CreateEvent"
                    >
                      Create New Event
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Art"
                    />
                    <label className="form-check-label" htmlFor="Art">
                      Art
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Awards"
                    />
                    <label className="form-check-label" htmlFor="Awards">
                      Awards
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Technology"
                    />
                    <label className="form-check-label" htmlFor="Technology">
                      Technology
                    </label>
                  </div>
                </div>
              </div>
              {/* Row end  */}
            </div>
          </div>
          <div className="col-12">
            <h6 className="fw-bold mb-0">Showing 5 Events</h6>
            <span className="text-muted">Based your preferences</span>
          </div>
        </div>
        {/* .row end */}
        <Mapdata data={data} />
        {/* .row end */}
        {/* Modal: Create new event */}
        <button
          className="btn btn-primary px-4 text-uppercase"
          data-bs-toggle="modal"
          data-bs-target="#CreateEvent"
          type="button"
        >
          View in modals
        </button>
        <div
          className="modal fade"
          id="CreateEvent"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content text-start">
              <div className="modal-body custom_scroll p-lg-5">
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 mt-3 me-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <h4 className="modal-title">Create Event</h4>
                <p className="text-muted">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary
                </p>
                <div className="row g-2 mt-3">
                  <div className="col-12">
                    <label className="form-label">Event Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Event Title"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Event description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Date</label>
                    <input className="form-control" type="date" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Time</label>
                    <input className="form-control" type="time" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Duration</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="1h 45m"
                    />
                  </div>
                  <div className="col-12 text-muted">
                    <p className="small">
                      <span className="fa fa-check-circle pe-1" />
                      This event will take place on the july 14, 2022 form 02:30
                      PM untill 05:15 PM
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Add guests</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="col-12 my-4">
                    <label className="me-3">Participate :</label>
                    <a href="#" title="">
                      <img
                        className="avatar sm rounded"
                        src="../assets/img/xs/avatar3.jpg"
                        alt="friend"
                      />{" "}
                    </a>
                    <a href="#" title="">
                      <img
                        className="avatar sm rounded"
                        src="../assets/img/xs/avatar1.jpg"
                        alt="friend"
                      />{" "}
                    </a>
                    <a href="#" title="">
                      <img
                        className="avatar sm rounded"
                        src="../assets/img/xs/avatar7.jpg"
                        alt="friend"
                      />{" "}
                    </a>
                    <a href="#" title="">
                      <img
                        className="avatar sm rounded"
                        src="../assets/img/xs/avatar9.jpg"
                        alt="friend"
                      />{" "}
                    </a>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Set reminder</label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Email"
                            defaultValue="option1"
                          />
                          <label className="form-check-label" htmlFor="Email">
                            Email
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Stack"
                            defaultValue="option2"
                          />
                          <label className="form-check-label" htmlFor="Stack">
                            Stack
                          </label>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="1 hour before event"
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <button
                      className="btn btn-lg btn-secondary text-uppercase"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      className="btn btn-lg btn-primary text-uppercase"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDesign;
