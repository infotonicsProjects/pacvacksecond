"use client";
import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";
import Pagination from "../../../../../app/admin/adminComponents/Pagination";
import LoadingComponet from "../../../../../app/admin/adminComponents/LoadingComponent";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { CustomeHookTable } from "../../../../../Environment/CustomeHooksFortable";

export default function Table() {
  const [loading, setLoading] = useState(true);
  const [totalPaidAmount, setTotalPaidAmount] = useState(0);
  const [totalUnpaidAmount, setTotalUnpaidAmount] = useState(0);

  const tableData = CustomeHookTable("payment_transactions_table", setLoading);

  const notPaid = tableData?.filter((item) => item.pay_status === "not paid");
  useEffect(() => {
    const totalUnpaid = notPaid.reduce((acc, item) => acc + item.pay_amount, 0);
    setTotalUnpaidAmount(totalUnpaid);
  }, [notPaid]);

  const paid = tableData?.filter((item) => item.pay_status === "paid");

  useEffect(() => {
    const totalPaid = paid.reduce((acc, item) => acc + item.pay_amount, 0);
    setTotalPaidAmount(totalPaid);
  }, [paid]);

  return (
    <>
      {loading ? (
        <LoadingComponet />
      ) : (
        <>
          <Pagination heading="Payment transactions" page={"Table"} />
          <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3 mb-5">
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12">
                  {/* invoices: recent */}
                  <div className="card fieldset border border-primary">
                    <span className="fieldset-tile text-primary bg-body">
                      Recent Payments:
                    </span>

                    <div
                      className="owl-carousel owl-theme owl-loaded owl-drag"
                      id="recent_invoices"
                    >
                      <div className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: 1155,
                          }}
                        >
                          <div
                            className="owl-item active d-flex flex-wrap"
                            style={{ gap: 10, marginRight: 10 }}
                            // key={i}
                          >
                            <div className="item card ribbon">
                              <div className="option-9 position-absolute text-light">
                                <i className="fa fa-star" />
                              </div>
                              <div className="card-body">
                                <div className="avatar lg rounded-circle no-thumbnail mb-3 fs-5">
                                  {/* {data?.id} */}
                                </div>
                                <small className="text-muted">
                                  Total Paid Amount
                                </small>
                                <h4>Rs. {totalPaidAmount}</h4>
                                <ul className="lh-lg mb-0 text-muted">
                                  {/* <li>{data?.pay_status}</li>
                                                                    <li>{data?.user_id}</li>
                                                                    <li>{data?.tr_date}</li> */}
                                </ul>
                              </div>
                            </div>
                            <div className="item card ribbon">
                              <div className="option-9 position-absolute text-light">
                                <i className="fa fa-star" />
                              </div>
                              <div className="card-body">
                                <div className="avatar lg rounded-circle no-thumbnail mb-3 fs-5">
                                  {/* {data?.id} */}
                                </div>
                                <small className="text-muted">
                                  Total Unpaid Amount
                                </small>
                                <h4>Rs. {totalUnpaidAmount}</h4>
                                <ul className="lh-lg mb-0 text-muted">
                                  {/* <li>{data?.pay_status}</li>
                                                                    <li>{data?.user_id}</li>
                                                                    <li>{data?.tr_date}</li> */}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Plugin Js */}
                  {/* Jquery Page Js */}
                </div>

                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h6 className="card-title mb-0">
                        Payment transactions Account Manager
                      </h6>
                      <div className="dropdown morphing scale-left">
                        <a
                          href="#y"
                          className="card-fullscreen"
                          data-bs-toggle="tooltip"
                          title="Card Full-Screen"
                        >
                          <i className="icon-size-fullscreen"></i>
                        </a>
                        <a
                          href="#y"
                          className="more-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>
                        <ul className="dropdown-menu shadow border-0 p-2">
                          <li>
                            <a className="dropdown-item" href="#y">
                              File Info
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Copy to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Move to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Block
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="myAllAgents"
                          className="table myDataTable align-middle custom-table"
                        >
                          <thead>
                            <tr>
                              <th>S.No.</th>
                              <th>User Id</th>
                              <th>Order Id</th>
                              <th>Transaction date</th>
                              <th>Pay Amount</th>
                              <th>Pay Status</th>
                              <th>GateWay Details</th>
                              {/* <th>Action</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.map((table, index) => (
                              <TableCard key={index} table={table} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .row end --> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
