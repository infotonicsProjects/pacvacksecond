import React from "react";

const CMSPAge = () => {
  return (
    <div className="page-body blog-app px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title mb-0">New blog post</h6>
            <div className="dropdown morphing scale-left">
              <a
                href="#"
                className="card-fullscreen"
                data-bs-toggle="tooltip"
                title="Card Full-Screen"
              >
                <i className="icon-size-fullscreen" />
              </a>
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
            <div className="row g-3 mb-3">
              <label className="col-xl-3 col-sm-4 col-form-label">
                Blog Title *
              </label>
              <div className="col-xl-9 col-sm-8">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Blog Title"
                />
              </div>
            </div>
            <div className="row g-3 mb-3">
              <label className="col-xl-3 col-sm-4 col-form-label">Type</label>
              <div className="col-xl-9 col-sm-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="typeText"
                    defaultValue="Type1"
                  />
                  <label className="form-check-label" htmlFor="typeText">
                    Text
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="typeImage"
                    defaultValue="Type2"
                  />
                  <label className="form-check-label" htmlFor="typeImage">
                    Image
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="typeAudio"
                    defaultValue="Type3"
                  />
                  <label className="form-check-label" htmlFor="typeAudio">
                    Audio
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="typeVideo"
                    defaultValue="Type4"
                  />
                  <label className="form-check-label" htmlFor="typeVideo">
                    Video
                  </label>
                </div>
              </div>
            </div>
            <div className="row g-3 mb-3">
              <label className="col-xl-3 col-sm-4 col-form-label">
                Select Category *
              </label>
              <div className="col-xl-9 col-sm-8">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                >
                  <option selected="">Open this select menu</option>
                  <option value={1}>Design</option>
                  <option value={2}>Travel</option>
                  <option value={3}>Animals</option>
                  <option value={4}>Sports &amp; Fitness</option>
                  <option value={5}>lifestyle</option>
                  <option value={6}>Food &amp; Drink</option>
                </select>
              </div>
            </div>
            <div className="row g-3 mb-3">
              <label className="col-xl-3 col-sm-4 col-form-label">Tage</label>
              <div className="col-xl-9 col-sm-8">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  data-role="tagsinput"
                  defaultValue="Design,Travel,lifestyle"
                />
              </div>
            </div>
            <div className="row g-3 mb-3">
              <label className="col-xl-3 col-sm-4 col-form-label">
                Content
              </label>
              <div className="col-xl-9 col-sm-8">
                <div className="summernote">
                  {" "}
                  Hello there, <br />
                  <p>
                    The toolbar can be customized and it also supports various
                    callbacks such as <code>oninit</code>, <code>onfocus</code>,{" "}
                    <code>onpaste</code> and many more.
                  </p>
                  <p>
                    Please try <b>paste some texts</b> here
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-3 mb-3">
              <label className="col-xl-3 col-sm-4 col-form-label">
                Attachment
              </label>
              <div className="col-xl-9 col-sm-8">
                <div className="small text-muted">
                  Note:{" "}
                  <small>
                    Image size should be 1024x640 with JPG file format.
                  </small>
                </div>
                <input type="file" className="dropify" />
              </div>
            </div>
            <div className="row g-3 mb-3">
              <label className="col-xl-3 col-sm-4 col-form-label" />
              <div className="col-xl-9 col-sm-8">
                <button type="button" className="btn btn-secondary">
                  Discard
                </button>
                <button type="button" className="btn btn-primary">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSPAge;
