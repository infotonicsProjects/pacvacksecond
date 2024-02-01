import React from "react";

const Card = ({ item }) => {
  return (
    <li className="dd-item card p-xl-3 p-2">
      <div className="dd-handle fs-6 mb-1">Mobile UI {item ?? " "}</div>
      <span className="text-muted">
        It is a long established fact will be distracted.
      </span>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="project-members">
          <a
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Avatar"
          >
            <img
              className="avatar xs rounded-circle"
              src="../assets/img/xs/avatar8.jpg"
              alt="friend"
            />{" "}
          </a>
          <a
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Avatar"
          >
            <img
              className="avatar xs rounded-circle"
              src="../assets/img/xs/avatar3.jpg"
              alt="friend"
            />{" "}
          </a>
        </div>
        <div className="task-action">
          <a
            className="small p-1 text-muted fa fa-comments"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Comments"
          >
            <span className="ps-1">22</span>
          </a>
          <a
            className="small p-1 text-muted fa fa-paperclip"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Attachment"
          >
            <span className="ps-1">7</span>
          </a>
        </div>
      </div>
      <ol className="dd-list list-unstyled">
        <li className="dd-item card p-2 mb-1">
          <div className="dd-handle fs-6 mb-1">Item 2</div>
          <span className="text-muted">
            It is a long established fact that a reader will be distracted.
          </span>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="project-members">
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Avatar"
              >
                <img
                  className="avatar xs rounded-circle"
                  src="../assets/img/xs/avatar6.jpg"
                  alt="friend"
                />{" "}
              </a>
            </div>
            <div className="task-action">
              <a
                className="small p-1 text-muted fa fa-comments"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Comments"
              >
                <span className="ps-1">7</span>
              </a>
              <a
                className="small p-1 text-muted fa fa-paperclip"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Attachment"
              >
                <span className="ps-1">3</span>
              </a>
            </div>
          </div>
        </li>
      </ol>
    </li>
  );
};

export default Card;
