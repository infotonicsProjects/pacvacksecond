import { getUserData } from "@/utlis/Home";
import React from "react";

const InvoicesList = async () => {
  const data = await getUserData("");
  // console.log(data)

  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12">
            {/* invoices: recent */}
            <div className="card fieldset border border-primary">
              <span className="fieldset-tile text-primary bg-body">
                Recent Invoices:
              </span>
              <div className="owl-carousel owl-theme" id="recent_invoices">
                <div className="item card ribbon">
                  <div className="option-9 position-absolute text-light">
                    <i className="fa fa-star" />
                  </div>
                  <div className="card-body">
                    <div className="avatar lg rounded-circle no-thumbnail mb-3 fs-5">
                      BB
                    </div>
                    <small className="text-muted">Total</small>
                    <h4>USD 2,500</h4>
                    <ul className="lh-lg mb-0 text-muted">
                      <li>Bucky Barnes</li>
                      <li>#RA0015</li>
                      <li>Jan 01 2022</li>
                    </ul>
                  </div>
                </div>
                <div className="item card">
                  <div className="card-body">
                    <div className="avatar lg rounded-circle no-thumbnail mb-3 fs-5">
                      DO
                    </div>
                    <small className="text-muted">Total</small>
                    <h4>USD 5,520</h4>
                    <ul className="lh-lg mb-0 text-muted">
                      <li>Dean Otto</li>
                      <li>#RA0016</li>
                      <li>Jan 03 2022</li>
                    </ul>
                  </div>
                </div>
                <div className="item card">
                  <div className="card-body">
                    <div className="avatar lg rounded-circle no-thumbnail mb-3 fs-5">
                      OL
                    </div>
                    <small className="text-muted">Total</small>
                    <h4>USD 8,000</h4>
                    <ul className="lh-lg mb-0 text-muted">
                      <li>Orlando Lentz</li>
                      <li>#RA0017</li>
                      <li>Jan 03 2022</li>
                    </ul>
                  </div>
                </div>
                <div className="item card">
                  <div className="card-body">
                    <div className="avatar lg rounded-circle no-thumbnail mb-3 fs-5">
                      AJ
                    </div>
                    <small className="text-muted">Total</small>
                    <h4>USD 12,500</h4>
                    <ul className="lh-lg mb-0 text-muted">
                      <li>Andew Jon</li>
                      <li>#RA0018</li>
                      <li>Jan 05 2022</li>
                    </ul>
                  </div>
                </div>
                <div className="item card">
                  <div className="card-body">
                    <div className="avatar lg rounded-circle no-thumbnail mb-3 fs-5">
                      AJ
                    </div>
                    <small className="text-muted">Total</small>
                    <h4>USD 7,100</h4>
                    <ul className="lh-lg mb-0 text-muted">
                      <li>Andew Jon</li>
                      <li>#RA0018</li>
                      <li>Jan 05 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Plugin Js */}
            {/* Jquery Page Js */}
          </div>
          <div className="col-12">
            {/* invoices: all */}
            <div className="card fieldset border border-muted">
              <span className="fieldset-tile text-muted bg-body">
                All Invoices:
              </span>
              <table
                id="invoice_list"
                className="table card-table align-middle mb-0"
              >
                <thead>
                  <tr>
                    <th>
                      <div className="form-check" style={{ fontSize: 16 }}>
                        <input
                          className="form-check-input select-all"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </th>
                    <th>Invoice</th>
                    <th>Name</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0011 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar1.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Andew Jon</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 12,820</td>
                    <td>Jan 16 2022</td>
                    <td>Jan 20 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0012 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar2.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Orlando Lentz</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 2,000</td>
                    <td>Jan 15 2022</td>
                    <td>Jan 15 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0025 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar3.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Marshall Nichols</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 8,000</td>
                    <td>Jan 10 2022</td>
                    <td>Jan 12 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0023 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar4.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Nellie Maxwell</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 3,500</td>
                    <td>Jan 07 2022</td>
                    <td>Jan 08 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0026 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar5.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Marshall Nichols</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 250</td>
                    <td>Jan 06 2022</td>
                    <td>Jan 06 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0065 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar6.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Issa Bell</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 9,150</td>
                    <td>Jan 03 2022</td>
                    <td>Jan 05 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0015 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar7.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Dean Otto</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 5,000</td>
                    <td>Jan 03 2022</td>
                    <td>Jan 05 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0029 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar8.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Comeren Diaz</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 2,050</td>
                    <td>Jan 03 2022</td>
                    <td>Jan 05 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0028 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar9.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Chris Fox</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 2,000</td>
                    <td>Jan 03 2022</td>
                    <td>Jan 05 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="row-selectable">
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                      </div>
                    </td>
                    <td> #RA0035 </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/img/xs/avatar10.jpg"
                          className="rounded-circle sm avatar"
                          alt=""
                        />
                        <div className="ms-2 mb-0">Bucky Barnes</div>
                      </div>
                    </td>
                    <td className="fw-bold">USD 1,100</td>
                    <td>Feb 03 2022</td>
                    <td>Feb 05 2022</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_send"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_detail"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-sm color-400"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesList;
