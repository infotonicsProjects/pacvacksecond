"use client";
import React, { useState } from "react";

const HeaderInput = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className="header-left flex-grow-1 d-none d-md-block">
      <div className="main-search px-3 flex-fill">
        <input
          className="form-control"
          type="text"
          placeholder="Enter your search key word"
          onChange={(e) =>
            e.target.value.length > 3 ? setSearch(true) : setSearch(false)
          }
        />
        <div
          className={
            search
              ? "card shadow rounded-4 search-result slidedown show"
              : "card shadow rounded-4 search-result slidedown"
          }
        >
          <div className="card-body">
            <small className="text-uppercase text-muted">Recent searches</small>
            <div className="d-flex flex-wrap align-items-start mt-2 mb-4">
              <a
                className="small rounded py-1 px-2 m-1 fw-normal bg-primary text-white"
                href="#"
              >
                HRMS Admin
              </a>
              <a
                className="small rounded py-1 px-2 m-1 fw-normal bg-secondary text-white"
                href="#"
              >
                Hospital Admin
              </a>
              <a
                className="small rounded py-1 px-2 m-1 fw-normal bg-info text-white"
                href="../app-project.html"
              >
                Project
              </a>
              <a
                className="small rounded py-1 px-2 m-1 fw-normal bg-dark text-white"
                href="../app-social.html"
              >
                Social App
              </a>
              <a
                className="small rounded py-1 px-2 m-1 fw-normal bg-danger text-white"
                href="#"
              >
                University Admin
              </a>
            </div>
            <small className="text-uppercase text-muted">Suggestions</small>
            <div className="card list-group list-group-flush list-group-custom mt-2">
              <a
                className="list-group-item list-group-item-action text-truncate"
                href="..//docs/doc-helperclass.html"
              >
                <div className="fw-bold">Helper Class</div>
                <small className="text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </a>
              <a
                className="list-group-item list-group-item-action text-truncate"
                href="..//docs/element-daterange.html"
              >
                <div className="fw-bold">Date Range Picker</div>
                <small className="text-muted">
                  There are many variations of passages of Lorem Ipsum available
                </small>
              </a>
              <a
                className="list-group-item list-group-item-action text-truncate"
                href="..//docs/element-imageinput.html"
              >
                <div className="fw-bold">Image Input</div>
                <small className="text-muted">
                  It is a long established fact that a reader will be distracted
                </small>
              </a>
              <a
                className="list-group-item list-group-item-action text-truncate"
                href="..//docs/plugin-table.html"
              >
                <div className="fw-bold">DataTables for jQuery</div>
                <small className="text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </a>
              <a
                className="list-group-item list-group-item-action text-truncate"
                href="..//docs/doc-setup.html"
              >
                <div className="fw-bold">Development Setup</div>
                <small className="text-muted">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInput;
