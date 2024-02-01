import React from "react";

const PartailPayment = () => {
  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title m-0">Patient invoice list</h6>
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
                <table
                  id="myPatientInvoice"
                  className="table table-hover align-middle mb-0"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Patient</th>
                      <th>Phy. Name</th>
                      <th>Ward no.</th>
                      <th>Admit Date</th>
                      <th>Invoice Date</th>
                      <th>Advance</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DH0015</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar1.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Hossein Shams</span>
                      </td>
                      <td>Dr. Cameron</td>
                      <td>C-02</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$200.00</td>
                      <td>$1475.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0016</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar2.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Frank Camly</span>
                      </td>
                      <td>Dr. Cameron</td>
                      <td>C-10</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$150.00</td>
                      <td>$475.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0017</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar3.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">John Smith</span>
                      </td>
                      <td>Dr. Joseph</td>
                      <td>C-07</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$200.00</td>
                      <td>$450.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0017</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar4.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Maryam Amiri</span>
                      </td>
                      <td>Dr. Murad</td>
                      <td>C-05</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$140.00</td>
                      <td>$250.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0018</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar5.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Hossein Shams</span>
                      </td>
                      <td>Dr. Joseph</td>
                      <td>B-02</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$90.00</td>
                      <td>$400.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0018</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar6.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Tim Hank</span>
                      </td>
                      <td>Dr. Joseph</td>
                      <td>A-06</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$200.00</td>
                      <td>$475.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0018</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar7.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Hossein Shams</span>
                      </td>
                      <td>Dr. Richard</td>
                      <td>C-04</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$120.00</td>
                      <td>$350.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0020</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar8.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Maryam Amiri</span>
                      </td>
                      <td>Dr. Murad</td>
                      <td>D-02</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$200.00</td>
                      <td>$320.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0021</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar9.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Alex Shams</span>
                      </td>
                      <td>Dr. Murad</td>
                      <td>A-11</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$150.00</td>
                      <td>$475.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DH0022</td>
                      <td>
                        <img
                          src="../assets/img/xs/avatar10.jpg"
                          className="avatar sm rounded-circle me-2"
                          alt="profile-image"
                        />
                        <span className="fw-bold">Samuel Lee</span>
                      </td>
                      <td>Dr. Richard</td>
                      <td>C-09</td>
                      <td>Dec 16, 2020</td>
                      <td>Dec 26, 2020</td>
                      <td>$100.00</td>
                      <td>$505.50</td>
                      <td>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-send" /> Send
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-cloud-download" />
                        </a>
                        <a
                          className="btn btn-sm btn-white border lift"
                          href="#"
                        >
                          <i className="fa fa-print" />
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

export default PartailPayment;
