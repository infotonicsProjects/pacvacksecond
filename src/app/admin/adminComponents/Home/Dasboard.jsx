import Link from "next/link";
import React from "react";

const Dasboard = () => {
  return (
    <>
      <div className="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
        <div className="container-fluid">
          <div className="row g-3 mb-3 align-items-center">
            <div className="col">
              <ol className="breadcrumb bg-transparent mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-secondary" href="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </div>
          </div>{" "}
          {/* .row end */}
          <div className="row align-items-center">
            <div className="col">
              <h1 className="fs-5 color-900 mt-1 mb-0">Welcome back, Allie!</h1>
              <small className="text-muted">
                You have 12 new messages and 7 new notifications.
              </small>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-12 mt-2 mt-md-0">
              {/* daterange picker */}
              <div className="input-group">
                <input className="form-control" type="text" name="daterange" />
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Send Report"
                >
                  <i className="fa fa-envelope" />
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Download Reports"
                >
                  <i className="fa fa-download" />
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Generate PDF"
                >
                  <i className="fa fa-file-pdf-o" />
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Share Dashboard"
                >
                  <i className="fa fa-share-alt" />
                </button>
              </div>
              {/* Plugin Js */}
              {/* Jquery Page Js */}
            </div>
          </div>{" "}
          {/* .row end */}
        </div>
      </div>
      {/* start: page body */}
      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row row-cols-xxl-5 row-cols-xxl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 mb-3 row-deck">
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-address-book fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">New Customers</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">925</span>{" "}
                      <small className="text-success">+34%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-product-hunt fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">New Products</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">18</span>{" "}
                      <small className="text-danger">-17%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-briefcase fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">New Leads</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">89</span>{" "}
                      <small className="text-success">+8%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-dollar fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">Today's Profit</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">$8,925</span>{" "}
                      <small className="text-danger">-3%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-file-text fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">Contracts closed</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">25</span>{" "}
                      <small className="text-danger">-12%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-user-plus fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">Active Client</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">11</span>{" "}
                      <small className="text-danger">-4%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-copy fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">Running Projects</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">23</span>{" "}
                      <small className="text-success">+7%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-user-secret fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">Active Admin</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-money fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">Total Expenses</div>
                    <div>
                      <span className="h6 mb-0 fw-bold">$2,908</span>{" "}
                      <small className="text-danger">-6%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <div className="avatar rounded-circle no-thumbnail bg-light">
                    <i className="fa fa-money fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="small text-uppercase">
                      Avg Contract Value
                    </div>
                    <div>
                      <span className="h6 mb-0 fw-bold">$4,580</span>{" "}
                      <small className="text-danger">-10%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .row end */}
          <div className="row g-3 mb-5 row-deck">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title m-0">Sales Statistics</h6>
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
                  <div className="row">
                    <div className="col-6">
                      <div className="card p-3">
                        <div className="fw-bold">
                          <span className="h4 mb-0">11.54k USD</span>
                        </div>
                        <div className="text-muted small">Revenue</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card p-3">
                        <div className="fw-bold">
                          <span className="h4 mb-0">5.87k USD</span>
                        </div>
                        <div className="text-muted small">Cost</div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="apex-SalesStatistics"
                    className="ac-line-transparent"
                  />
                </div>
              </div>{" "}
              {/* .card end */}
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title m-0">
                    Outbound Calls &amp; Contact Rate per weekday
                  </h6>
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
                  <div
                    id="apex-OutboundCalls"
                    className="ac-line-transparent"
                  />
                </div>
              </div>{" "}
              {/* .card end */}
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title m-0">Top Selling Plans</h6>
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
                <div className="card-body d-flex justify-content-center">
                  <div id="apex-TopSellingPlans" />
                </div>
              </div>{" "}
              {/* .card end */}
            </div>
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title m-0">Running Project</h6>
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
                  <div>
                    <span className="text-muted d-block">Yearly Income</span>
                    <h4>$22,652.35</h4>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-3 mt-3">
                      <div className="d-flex justify-content-between">
                        <span>Database configuration</span>
                        <span>89K</span>
                      </div>
                      <div className="progress" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>Design iOS app</span>
                        <span>76K</span>
                      </div>
                      <div className="progress" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "76%" }}
                          aria-valuenow={76}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>Internet configuration</span>
                        <span>52K</span>
                      </div>
                      <div className="progress" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "52%" }}
                          aria-valuenow={52}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>Angular Admin</span>
                        <span>46K</span>
                      </div>
                      <div className="progress" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "46%" }}
                          aria-valuenow={46}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <span>Web Solution</span>
                        <span>34K</span>
                      </div>
                      <div className="progress" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "34%" }}
                          aria-valuenow={34}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* .card end */}
            </div>
            <div className="col-xxl-5 col-xl-12 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title m-0">Work Deadlines</h6>
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
                  <div className="table-responsive">
                    <table className="table table-striped table-sm table-bordered align-middle mb-0">
                      <tbody>
                        <tr>
                          <td>Design task for App</td>
                          <td>22 May 2021</td>
                        </tr>
                        <tr>
                          <td>Angular login page</td>
                          <td>22 May 2021</td>
                        </tr>
                        <tr>
                          <td>React Video tools</td>
                          <td>11 May 2021</td>
                        </tr>
                        <tr>
                          <td>Figma Design</td>
                          <td>9 June 2021</td>
                        </tr>
                        <tr>
                          <td>Logo vector design</td>
                          <td>13 June 2021</td>
                        </tr>
                        <tr>
                          <td>iOs and Android App</td>
                          <td>18 June 2021</td>
                        </tr>
                        <tr>
                          <td>Login page figma design</td>
                          <td>25 June 2021</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>{" "}
              {/* .card end */}
            </div>
          </div>{" "}
          {/* .row end */}
        </div>
      </div>
    </>
  );
};

export default Dasboard;
