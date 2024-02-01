import { getUserData } from "@/utlis/Home";
import React from "react";

const VendorList = async () => {
  const vendorsListsData = await getUserData("VandorList");
  // console.log(vendorsListsData)

  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title m-0">Client List</h6>
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
                <table className="table myDataTable table-hover align-middle mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Project</th>
                      <th>Payments</th>
                      <th>Hired</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CL-0215</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="../assets/img/xs/avatar1.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="ms-2">
                            <div className="mb-0">Marshall Nichols</div>
                            <span className="text-muted">
                              vPro Infoweb LLC. (Australia)
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          Completed:<span className="fw-bold ms-1">45</span>
                        </div>
                        <div>
                          In progress:<span className="fw-bold ms-1">17</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          Paid:<span className="fw-bold ms-1">$48,021</span>
                        </div>
                        <div>
                          Unpaid:
                          <span className="fw-bold ms-1 text-danger">
                            $2,500
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="fw-bold">12 (Developers)</div>
                        <small>$20 / hour</small>
                      </td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td className="project-actions">
                        <a
                          href="../client-detail.html"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-eye" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-edit" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>CL-0248</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="../assets/img/xs/avatar2.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="ms-2">
                            <div className="mb-0">Maryam Amiri</div>
                            <span className="text-muted">
                              BT Technology (USA)
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          Completed:<span className="fw-bold ms-1">33</span>
                        </div>
                        <div>
                          In progress:<span className="fw-bold ms-1">7</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          Paid:<span className="fw-bold ms-1">$35,500</span>
                        </div>
                        <div>
                          Unpaid:
                          <span className="fw-bold ms-1 text-danger">
                            $4,800
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="fw-bold">8 (Developers)</div>
                        <small>$22 / hour</small>
                      </td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td className="project-actions">
                        <a
                          href="../client-detail.html"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-eye" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-edit" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>CL-0269</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="../assets/img/xs/avatar3.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="ms-2">
                            <div className="mb-0">Tim Hank</div>
                            <span className="text-muted">
                              AUR Tech LLC. (Germany)
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          Completed:<span className="fw-bold ms-1">19</span>
                        </div>
                        <div>
                          In progress:<span className="fw-bold ms-1">8</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          Paid:<span className="fw-bold ms-1">$26,000</span>
                        </div>
                        <div>
                          Unpaid:
                          <span className="fw-bold ms-1 text-danger">
                            $3,750
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="fw-bold">9 (Developers)</div>
                        <small>$16 / hour</small>
                      </td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td className="project-actions">
                        <a
                          href="../client-detail.html"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-eye" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-edit" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>CL-0258</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="../assets/img/xs/avatar4.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="ms-2">
                            <div className="mb-0">Frank Camly</div>
                            <span className="text-muted">
                              Core Infoweb Pvt. (USA)
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          Completed:<span className="fw-bold ms-1">23</span>
                        </div>
                        <div>
                          In progress:<span className="fw-bold ms-1">5</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          Paid:<span className="fw-bold ms-1">$19,021</span>
                        </div>
                        <div>
                          Unpaid:
                          <span className="fw-bold ms-1 text-danger">
                            $4,500
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="fw-bold">6 (Developers)</div>
                        <small>$18 / hour</small>
                      </td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td className="project-actions">
                        <a
                          href="../client-detail.html"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-eye" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-edit" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>CL-0345</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="../assets/img/xs/avatar5.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="ms-2">
                            <div className="mb-0">Gary Camara</div>
                            <span className="text-muted">
                              Fly2 Infotech (Netherlands)
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          Completed:<span className="fw-bold ms-1">33</span>
                        </div>
                        <div>
                          In progress:<span className="fw-bold ms-1">21</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          Paid:<span className="fw-bold ms-1">$81,000</span>
                        </div>
                        <div>
                          Unpaid:
                          <span className="fw-bold ms-1 text-danger">
                            $10,500
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="fw-bold">18 (Developers)</div>
                        <small>$24 / hour</small>
                      </td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td className="project-actions">
                        <a
                          href="../client-detail.html"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-eye" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-edit" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>CL-0218</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="../assets/img/xs/avatar6.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="ms-2">
                            <div className="mb-0">John Smith</div>
                            <span className="text-muted">
                              Carlson Software (Italy)
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          Completed:<span className="fw-bold ms-1">22</span>
                        </div>
                        <div>
                          In progress:<span className="fw-bold ms-1">8</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          Paid:<span className="fw-bold ms-1">$28,021</span>
                        </div>
                        <div>
                          Unpaid:
                          <span className="fw-bold ms-1 text-danger">
                            $3,000
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="fw-bold">7 (Developers)</div>
                        <small>$16 / hour</small>
                      </td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                      <td className="project-actions">
                        <a
                          href="../client-detail.html"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-eye" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-edit" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
  );
};

export default VendorList;
