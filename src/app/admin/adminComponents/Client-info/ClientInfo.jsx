import React from "react";
import TAb1 from "./TAb1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import { getUserData } from "../../../../utlis/Home";
import Link from "next/link";

const ClientInfo = async ({ searchParams, params }) => {
  const clientInfoData = await getUserData("ClientList/" + params?.clientId);

  return (
    <div>
      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="card">
            <div className="row g-0">
              <div className="col-xxl-3 col-lg-4 border-end">
                <div className="card-body border-bottom">
                  <img
                    className="avatar xl rounded-circle img-thumbnail"
                    src="/assets/img/profile_av.png"
                    alt=""
                  />
                  <h6 className="mt-3 mb-0">Michelle Green</h6>
                  <p>jason-porter@info.com</p>
                  <Link
                    href={`/admin/main/userinfo/${params?.clientId}`}
                    className="btn btn-light-success btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#CreateBookmarks"
                    scroll={false}
                  >
                    Create Bookmarks
                  </Link>
                </div>
                <div className="card-body border-bottom">
                  <p>Bookmark List</p>
                  <div
                    className="nav flex-column nav-pills"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <Link
                      href={`/admin/main/userinfo/${params?.clientId}`}
                      className={
                        searchParams?.tab === undefined
                          ? "text-start nav-link active"
                          : "text-start nav-link"
                      }
                      type="button"
                      name="tab1"
                    >
                      <i className="fa fa-angle-right me-2" />
                      Client Info
                    </Link>
                    <Link
                      href={`/admin/main/userinfo/${params?.clientId}?tab=` + 2}
                      className={
                        searchParams?.tab === "2"
                          ? "text-start nav-link active"
                          : "text-start nav-link"
                      }
                      type="button"
                      name="tab2"
                    >
                      <i className="fa fa-angle-right me-2" />
                      Vendor Assign
                    </Link>
                    <Link
                      href={`/admin/main/userinfo/${params?.clientId}?tab=` + 3}
                      className={
                        searchParams?.tab === "3"
                          ? "text-start nav-link active"
                          : "text-start nav-link"
                      }
                      name="tab3"
                    >
                      <i className="fa fa-angle-right me-2" />
                      Complete Project
                    </Link>
                    <Link
                      href={`/admin/main/userinfo/${params?.clientId}?tab=` + 4}
                      className={
                        searchParams?.tab === "4"
                          ? "text-start nav-link active"
                          : "text-start nav-link"
                      }
                      name="tab4"
                    >
                      <i className="fa fa-angle-right me-2" />
                      Invoices
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <p>Bookmark Tags</p>
                  <div>
                    <a className="m-link me-2" href="#">
                      <i className="fa fa-hashtag" />
                      <span>bigdata</span>
                    </a>
                    <a className="m-link me-2" href="#">
                      <i className="fa fa-hashtag" />
                      <span>Design</span>
                    </a>
                    <a className="m-link me-2" href="#">
                      <i className="fa fa-hashtag" />
                      <span>ReactJs</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-lg-8">
                <div className="card-body tab-content">
                  {searchParams?.tab === undefined && (
                    <TAb1 clientInfoData={clientInfoData} />
                  )}
                  {searchParams?.tab === "2" && <Tab2 />}
                  {searchParams?.tab === "3" && <Tab3 />}
                  {searchParams?.tab === "4" && <Tab4 />}
                </div>
              </div>
            </div>
            {/* Modal add bookmark */}
            {/* <button class="btn btn-primary px-4 text-uppercase" data-bs-toggle="modal" data-bs-target="#CreateBookmarks" type="button">Create Bookmarks</button> */}
            {/* Modal: Create Bookmarks */}
            <div
              className="modal fade"
              id="CreateBookmarks"
              tabIndex={-1}
              aria-labelledby="CreateBookmarks"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content needs-validation">
                  <div className="modal-header">
                    <h5 className="modal-title">Add new Bookmark</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="row g-2">
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Bookmark Url"
                          />
                          <label>Bookmark Url</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Bookmark Title"
                          />
                          <label>Bookmark Title</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                          />
                          <label>Description</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select className="form-select">
                            <option selected="">Open this select menu</option>
                            <option value={1}>Created by me</option>
                            <option value={2}>Favourites</option>
                            <option value={3}>Admin Template</option>
                          </select>
                          <label>Bookmark List</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select className="form-select">
                            <option selected="">Open this select menu</option>
                            <option value={1}>Thememakker</option>
                            <option value={2}>UI8</option>
                            <option value={3}>Themeforest</option>
                          </select>
                          <label>Bookmark Tags</label>
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
                      Save Bookmark
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

export default ClientInfo;
