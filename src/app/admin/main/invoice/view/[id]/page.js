"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetData } from "../../../../../../utlis/ClientApi";
import logo from "../../../packVack-logo.png";
import Image from "next/image";

const page = ({ params }) => {
  const [invoiceData, setInvoiceData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [shippingData, setShippingData] = useState({});
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;

  const InvoiceData = async () => {
    const res = await GetData("invoice/" + params?.id, setLoading, signal);
    setInvoiceData(res);
  };

  const getPaymentData = async () => {
    const res = await GetData(
      "payment_transactions_table/" + params?.id,
      setLoading,
      signal,
    );
    setPaymentData(res);
  };

  const getShippingData = async () => {
    const res = await GetData(
      "shipping_information_table/" + params?.id,
      setLoading,
      signal,
    );
    setShippingData(res);
  };

  useEffect(() => {
    InvoiceData();
    getPaymentData();
    getShippingData();
  }, []);

  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        {/* Create invoice */}
        <div className="d-flex justify-content-between text-center text-md-end">
          <button
            type="button"
            className="btn btn-lg btn-primary mb-4"
            onclick={(e) => navigate.back()}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-lg btn-primary mb-4"
            onclick={(e) => GeneratePDF()}
          >
            <i className="fa fa-print me-2" />
            Print Invoice
          </button>
        </div>
        <div className="row g-3">
          <div className="col-12">
            <div className="card print_invoice">
              <div className="card-header border-bottom fs-4">
                <h5 className="card-title mb-0">INVOICE</h5>
              </div>
              <div className="card-body">
                <div className="card p-3">
                  <div className="border-bottom pb-2">
                    <div className="d-flex">
                      <textarea
                        className="form-control address"
                        defaultValue={invoiceData?.shipping_address}
                      />
                      <textarea
                        className="form-control address"
                        defaultValue={invoiceData?.mobile_no}
                      />
                      <textarea
                        className="form-control address"
                        defaultValue={invoiceData?.email}
                      />
                    </div>

                    <div id="logo">
                      <div id="logoctr">
                        <a
                          href="javascript:;"
                          id="change-logo"
                          title="Change logo"
                          contentEditable="false"
                          style={{ cursor: "pointer" }}
                        >
                          Change Logo
                        </a>
                        <a
                          href="javascript:;"
                          id="save-logo"
                          title="Save changes"
                          contentEditable="false"
                          style={{ cursor: "pointer" }}
                        >
                          Save
                        </a>{" "}
                        |{" "}
                        <a
                          href="javascript:;"
                          id="delete-logo"
                          title="Delete logo"
                          contentEditable="false"
                          style={{ cursor: "pointer" }}
                        >
                          Delete Logo
                        </a>
                        <a
                          href="javascript:;"
                          id="cancel-logo"
                          title="Cancel changes"
                          contentEditable="false"
                          style={{ cursor: "pointer" }}
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
                      <Image
                        id="image"
                        src={logo}
                        alt="logo"
                        height={100}
                        width={100}
                      />
                    </div>
                  </div>
                  <div style={{ clear: "both" }} />
                  <div className="customer mt-4">
                    <div
                      className="customer-title"
                      defaultValue={"Widget Card. c/o List Widget"}
                    >
                      {shippingData?.cname}
                    </div>
                    <table className="meta">
                      <tbody>
                        <tr>
                          <td className="meta-head">Invoice</td>
                          <td>
                            <textarea
                              className="form-control"
                              defaultValue={invoiceData?.invoice_no}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="meta-head">Date</td>
                          <td>
                            <div id="date">{paymentData?.tr_date}</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="meta-head">Amount Due</td>
                          <td>
                            <div className="due">Rs. {invoiceData?.amount}</div>
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
                              contentEditable="false"
                              style={{ cursor: "pointer" }}
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
                          <textarea
                            className="cost"
                            defaultValue={invoiceData?.amount}
                          />
                        </td>
                        <td>
                          <textarea className="qty" defaultValue={"1"} />
                        </td>
                        <td>
                          <span className="price">
                            Rs. {invoiceData?.amount}
                          </span>
                        </td>
                      </tr>
                      {/* <tr className="item-row">
                        <td className="item-name">
                          <div className="delete-wpr">
                            <textarea defaultValue={"SSL Renewals"} />
                            <a
                              className="delete"
                              href="javascript:;"
                              title="Remove row"
                              contentEditable="false"
                              style={{ cursor: "pointer" }}
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
                      </tr> */}
                      <tr id="hiderow">
                        <td colSpan={5}>
                          <a
                            id="addrow"
                            href="javascript:;"
                            title="Add a row"
                            contentEditable="false"
                            style={{ cursor: "pointer" }}
                          >
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
                          <div id="subtotal" className="text-end">
                            Rs.{invoiceData?.amount}
                          </div>
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
                          <div id="total" className="text-end">
                            Rs.{invoiceData?.amount}
                          </div>
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
                          <div id="paid" className="text-end">
                            Rs.{" "}
                            {paymentData?.pay_status === "unpaid"
                              ? 0
                              : invoiceData?.amount}
                          </div>
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
                          <div className="due text-end">
                            Rs.{" "}
                            {paymentData?.pay_status === "unpaid"
                              ? invoiceData?.amount
                              : 0}
                          </div>
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
        </div>{" "}
        {/* .row end */}
        {/* Plugin Js */}
      </div>
    </div>
  );
};

export default page;
