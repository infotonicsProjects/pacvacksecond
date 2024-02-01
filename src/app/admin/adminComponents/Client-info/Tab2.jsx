import React from "react";

const Tab2 = () => {
  return (
    <div className="">
      <h5>Favourites</h5>
      <div className="card overflow-visible mb-1">
        <div className="position-absolute top-0 end-0 mt-2 me-2">
          <div className="dropdown morphing scale-left">
            <a
              href="#"
              className="more-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-h" />
            </a>
            <ul className="dropdown-menu shadow border-0 p-2">
              <li>
                <a className="dropdown-item" href="#">
                  File Info
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Copy to
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Move to
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rename
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Block
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center flex-column flex-md-row">
            <img
              className="w120 rounded"
              src="./assets/img/gallery/2.jpg"
              alt=""
            />
            <div className="media-body ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <h5 className="fw-light mb-1">
                BigBucket - Bootstrap 4x Admin Template
              </h5>
              <a href="#">https://themeforest.net/user/wrraptheme/portfolio</a>
              <p className="text-muted mb-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card overflow-visible mb-1">
        <div className="position-absolute top-0 end-0 mt-2 me-2">
          <div className="dropdown morphing scale-left">
            <a
              href="#"
              className="more-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-h" />
            </a>
            <ul className="dropdown-menu shadow border-0 p-2">
              <li>
                <a className="dropdown-item" href="#">
                  File Info
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Copy to
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Move to
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rename
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Block
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center flex-column flex-md-row">
            <img
              className="w120 rounded"
              src="./assets/img/gallery/3.jpg"
              alt=""
            />
            <div className="media-body ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <h5 className="fw-light mb-1">
                Lucid ASP .NET Core MVC - Responsive Admin Template
              </h5>
              <a href="#">https://themeforest.net/user/wrraptheme/portfolio</a>
              <p className="text-muted mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab2;
