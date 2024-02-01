import React from "react";

const Mapdata = ({ data }) => {
  return (
    <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3 row-deck">
      {data?.data?.map((admin, i) => (
        <div className="col" key={i}>
          <div className="card">
            <div className="card-body">
              <div className="thumbnail position-relative">
                <img
                  src="../assets/img/gallery/1.jpg"
                  className="img-fluid rounded-2"
                  alt=""
                />
                <ul className="list-unstyled position-absolute top-0 end-0 d-flex mt-2 me-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-white"
                    >
                      <i className="fa fa-bar-chart" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-white ms-3"
                    >
                      <i className="fa fa-heart" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid-content mt-3">
                <div className="d-flex flex-column mt-3">
                  <a href="#" className="fs-5" title="">
                    {admin?.name}
                  </a>
                  <p className="text-muted">{admin?.email}</p>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <p className="mb-0">
                    Date: <strong>23 June 2021</strong>
                  </p>
                  <p className="mb-0">
                    Tickets: <strong>Avilable 26/ 100</strong>
                  </p>
                </div>
                <div className="speaker-members mt-2">
                  <label className="me-3">Speaker:</label>
                  <a
                    href="#"
                    title="Speaker"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img
                      className="avatar sm rounded-circle"
                      src="../assets/img/xs/avatar3.jpg"
                      alt="friend"
                    />{" "}
                  </a>
                  <a
                    href="#"
                    title="Speaker"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img
                      className="avatar sm rounded-circle"
                      src="../assets/img/xs/avatar1.jpg"
                      alt="friend"
                    />{" "}
                  </a>
                  <a
                    href="#"
                    title="Speaker"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img
                      className="avatar sm rounded-circle"
                      src="../assets/img/xs/avatar7.jpg"
                      alt="friend"
                    />{" "}
                  </a>
                  <a
                    href="#"
                    title="Speaker"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img
                      className="avatar sm rounded-circle"
                      src="../assets/img/xs/avatar9.jpg"
                      alt="friend"
                    />{" "}
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                  <div className="d-flex align-items-center">
                    <img
                      className="avatar sm rounded-circle"
                      src="../assets/img/xs/avatar1.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-2">
                      <div className="h6 mb-0">By John Doe</div>
                    </div>
                  </div>
                  <p className="mb-0 small text-muted">8 min ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mapdata;
