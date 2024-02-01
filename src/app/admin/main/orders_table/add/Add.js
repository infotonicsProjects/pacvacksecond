"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PostData } from "../../../../../utlis/ClientApi";
import { useSelector } from "react-redux";
// import CsvUpload from '../components/CsvUpload';

export default function Add() {
  const [orders_table, setorders_table] = useState("");
  const [order_date, setOrder_date] = useState("");
  const [t_amount, setT_amount] = useState("");
  const [order_status, setOrder_status] = useState("");
  const [shipping_method, setShipping_method] = useState("");
  const [payment_method, setPayment_method] = useState("");
  const [payment_status, setPayment_status] = useState("");

  const [loading, setLoading] = useState("false");
  const controller = new AbortController();
  const signal = controller.signal;

  const navigate = useRouter();

  const user = useSelector((state) => state.userData);

  const handleClick = () => {
    var x = document.getElementById("hide");
    var y = document.getElementById("hide1");
    var csv = document.getElementById("unhide");
    if (x.style.display === "none" || y.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      csv.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      csv.style.display = "block";
    }
  };
  const sumbitForm = async () => {
    const data = {
      // name:name,
      order_date: order_date,
      t_amount: t_amount,
      order_status: order_status,
      shipping_method: shipping_method,
      payment_method: payment_method,
      payment_status: payment_status,
      user_id: user?.id,
    };

    const res = await PostData("orders_table", setLoading, signal, data);
    if (res) {
      setorders_table(res);
      navigate.push("/admin/main/orders_table/table");
    }
  };

  useEffect(() => {
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
        <div className="container-fluid">
          <div className="row g-3 mb-3 align-items-center">
            <div className="col">
              <ol className="breadcrumb bg-transparent mb-0">
                <li className="breadcrumb-item">
                  <a className="text-secondary" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">Orders table</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Orders table Account
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- .row end --> */}
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">
                {" "}
                Orders table Account Add
              </h1>
              <small className="text-muted">
                You have 12 new messages and 7 new notifications.
              </small>
            </div>
            <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
              <div className="p-2 me-md-3">
                <div>
                  <span className="h6 mb-0">8.18K</span>{" "}
                  <small className="text-secondary">
                    <i className="fa fa-angle-up"></i> 1.3%
                  </small>
                </div>
                <small className="text-muted text-uppercase">Income</small>
              </div>
              <div className="p-2 me-md-3">
                <div>
                  <span className="h6 mb-0">1.11K</span>{" "}
                  <small className="text-secondary">
                    <i className="fa fa-angle-up"></i> 4.1%
                  </small>
                </div>
                <small className="text-muted text-uppercase">Expense</small>
              </div>
              <div className="p-2 pe-lg-0">
                <div>
                  <span className="h6 mb-0">3.66K</span>{" "}
                  <small className="text-danger">
                    <i className="fa fa-angle-down"></i> 7.5%
                  </small>
                </div>
                <small className="text-muted text-uppercase">Revenue</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <div className="card">
                <div className="card m-0 p-0 border-info">
                  <div class="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light"> Add Account</h6>
                    <button
                      type="button"
                      class="btn btn-sm btn-white"
                      onClick={handleClick}
                    >
                      <i class="fa fa-plus"></i> Add Csv{" "}
                    </button>
                  </div>
                </div>

                <div className="card-body" id="hide">
                  <div className="row g-3">
                    {/* <div class="col-lg-4 col-md-6">
                                            <label class="form-label">User id</label>
                                            <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setUser_id(e.target.value)}
                                            />
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <label class="form-label">Created at</label>
                                            <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setCreated_at(e.target.value)}
                                            />
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <label class="form-label">Updated at</label>
                                            <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setUpdated_at(e.target.value)}
                                            />
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <label class="form-label">User id</label>
                                            <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setUser_id(e.target.value)}
                                            />
                                        </div> */}
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Order date</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setOrder_date(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">T amount</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setT_amount(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Order status</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setOrder_status(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Shipping method</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setShipping_method(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Payment method</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setPayment_method(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Payment status</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setPayment_status(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="card-footer" id="hide1">
                  <button
                    type="button"
                    className="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={sumbitForm}
                    style={{ margin: "10px" }}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn lift btn-lg rounded-4 btn-light-secondary"
                    onClick={(e) => navigate.back()}
                  >
                    <i className="fa fa-times-circle"></i> Cancel
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card m-0 p-0 border-warning">
                  <div class="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light"> Add Account</h6>
                    <button
                      type="button"
                      class="btn btn-sm btn-white"
                      onClick={handleClick}
                    >
                      <i class="fa fa-plus"></i> Add form{" "}
                    </button>
                  </div>
                </div>

                <div className="card-body" id="hide">
                  <div className="row g-3">
                    {/* <a href={urls + "samplefiles/csv/orderstable.csv"}><span>Click here to download sample CSV file for this form</span></a> */}

                    <div id="unhide" style={{ display: "none" }}>
                      {/* <CsvUpload csv_url={urls+"orders_table"}/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
