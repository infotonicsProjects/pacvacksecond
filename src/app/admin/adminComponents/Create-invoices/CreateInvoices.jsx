import React from "react";

const CreateInvoices = () => {
  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        {/* Create invoice */}
        <div className="row g-3">
          <div className="col-12">
            <div className="card print_invoice">
              <div className="card-header border-bottom fs-4">
                <h5 className="card-title mb-0">INVOICE</h5>
              </div>
              <div className="card-body">
                <div className="card p-3">
                  <div className="border-bottom pb-2">
                    <textarea
                      className="form-control address"
                      defaultValue={
                        "Marshall Nichols,\n774 Andover St.\nSnohomish, WA 98290\n\nPhone: (012) 3456-7890"
                      }
                    />
                    <div id="logo">
                      <div id="logoctr">
                        <a
                          href="javascript:;"
                          id="change-logo"
                          title="Change logo"
                        >
                          Change Logo
                        </a>
                        <a
                          href="javascript:;"
                          id="save-logo"
                          title="Save changes"
                        >
                          Save
                        </a>{" "}
                        |{" "}
                        <a
                          href="javascript:;"
                          id="delete-logo"
                          title="Delete logo"
                        >
                          Delete Logo
                        </a>
                        <a
                          href="javascript:;"
                          id="cancel-logo"
                          title="Cancel changes"
                        >
                          Cancel
                        </a>
                      </div>
                      <div id="logohelp">
                        <input
                          id="imageloc"
                          type="text"
                          size={50}
                          defaultValue=""
                        />
                        <br /> (max width: 540px, max height: 100px)
                      </div>
                      <img
                        id="image"
                        src="../assets/img/logo-icon.svg"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div style={{ clear: "both" }} />
                  <div className="customer mt-4">
                    <textarea
                      className="form-control customer-title"
                      defaultValue={"Widget Card. c/o List Widget"}
                    />
                    <table className="meta">
                      <tbody>
                        <tr>
                          <td className="meta-head">Invoice #</td>
                          <td>
                            <textarea
                              className="form-control"
                              defaultValue={"000123"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="meta-head">Date</td>
                          <td>
                            <textarea
                              className="form-control"
                              id="date"
                              defaultValue={"December 15, 2021"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="meta-head">Amount Due</td>
                          <td>
                            <div className="due">$875.00</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style={{ clear: "both" }} />
                  <table className="items">
                    <tbody>
                      <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th style={{ width: 140 }}>Unit Cost</th>
                        <th style={{ width: 70 }}>Quantity</th>
                        <th style={{ width: 140 }}>Price</th>
                      </tr>
                      <tr className="item-row">
                        <td className="item-name">
                          <div className="delete-wpr">
                            <textarea defaultValue={"Web Updates"} />
                            <a
                              className="delete"
                              href="javascript:;"
                              title="Remove row"
                            >
                              X
                            </a>
                          </div>
                        </td>
                        <td className="description">
                          <textarea
                            defaultValue={
                              "Monthly web updates for TTM (Nov. 1 - Nov. 30, 2021)"
                            }
                          />
                        </td>
                        <td>
                          <textarea className="cost" defaultValue={"$650.00"} />
                        </td>
                        <td>
                          <textarea className="qty" defaultValue={"1"} />
                        </td>
                        <td>
                          <span className="price">$650.00</span>
                        </td>
                      </tr>
                      <tr className="item-row">
                        <td className="item-name">
                          <div className="delete-wpr">
                            <textarea defaultValue={"SSL Renewals"} />
                            <a
                              className="delete"
                              href="javascript:;"
                              title="Remove row"
                            >
                              X
                            </a>
                          </div>
                        </td>
                        <td className="description">
                          <textarea
                            defaultValue={
                              "Yearly renewals of SSL certificates on main domain and several subdomains"
                            }
                          />
                        </td>
                        <td>
                          <textarea className="cost" defaultValue={"$75.00"} />
                        </td>
                        <td>
                          <textarea className="qty" defaultValue={"3"} />
                        </td>
                        <td>
                          <span className="price">$225.00</span>
                        </td>
                      </tr>
                      <tr id="hiderow">
                        <td colSpan={5}>
                          <a id="addrow" href="javascript:;" title="Add a row">
                            Add a row
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="blank">
                          {" "}
                        </td>
                        <td colSpan={2} className="total-line">
                          Subtotal
                        </td>
                        <td className="total-value">
                          <div id="subtotal">$875.00</div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="blank">
                          {" "}
                        </td>
                        <td colSpan={2} className="total-line">
                          Total
                        </td>
                        <td className="total-value">
                          <div id="total">$875.00</div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="blank">
                          {" "}
                        </td>
                        <td colSpan={2} className="total-line">
                          Amount Paid
                        </td>
                        <td className="total-value">
                          <textarea id="paid" defaultValue={"$0.00"} />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="blank">
                          {" "}
                        </td>
                        <td colSpan={2} className="total-line balance">
                          Balance Due
                        </td>
                        <td className="total-value balance">
                          <div className="due">$875.00</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ clear: "both" }} />
                  <div className="footer-note mt-5">
                    <h5>Terms</h5>
                    <textarea
                      className="form-control bg-light"
                      defaultValue={
                        "NET 30 Days. Finance Charge of 1.5% will be made on unpaid balances after 30 days."
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center text-md-end">
            <button
              type="button"
              className="btn btn-lg btn-primary"
              onclick="window.print();return false"
            >
              <i className="fa fa-print me-2" />
              Print Invoice
            </button>
            <button type="button" className="btn btn-lg btn-secondary">
              <i className="fa fa-envelope me-2" />
              Send PDF
            </button>
          </div>
        </div>{" "}
        {/* .row end */}
        {/* Plugin Js */}
      </div>
    </div>
  );
};

export default CreateInvoices;
