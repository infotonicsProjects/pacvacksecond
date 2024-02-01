"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetData, PutData } from "../../../../../../utlis/ClientApi";
// import { CustomeHook } from '@/Environment/CustomeHook';

export default function Edit({ params }) {
  const [orders_table, setorders_table] = useState("");

  const [order_date, setOrder_date] = useState(orders_table.order_date);
  const [t_amount, setT_amount] = useState(orders_table.t_amount);
  const [order_status, setOrder_status] = useState(orders_table.order_status);
  const [shipping_method, setShipping_method] = useState(
    orders_table.shipping_method,
  );
  const [payment_method, setPayment_method] = useState(
    orders_table.payment_method,
  );
  const [payment_status, setPayment_status] = useState(
    orders_table.payment_status,
  );
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;

  // useEffect(() => {
  //     fetch(urls + 'orders_table/' + params.id, { headers: headersT })
  //         .then(response => response.json())
  //         .then(json => {
  //             if (json) {
  //                 setorders_table(
  //                     json.data
  //                 )

  //                 console.log(json)
  //             }
  //         })
  // }, [])
  const sumbitForm = async () => {
    const data = {
      order_date: order_date,
      t_amount: t_amount,
      order_status: order_status,
      shipping_method: shipping_method,
      payment_method: payment_method,
      payment_status: payment_status,
    };
    const res = await PutData(
      "orders_table/" + params?.id,
      setLoading,
      signal,
      data,
    );

    if (res) {
      setorders_table(res);
      navigate.push("/admin/main/orders_table/table");
    }
  };
  const getEditData = async () => {
    const res = await GetData("orders_table/" + params?.id, setLoading, signal);

    if (res) {
      setorders_table(res);
      setOrder_date(res.order_date);
      setT_amount(res.t_amount);
      setOrder_status(res.order_status);
      setShipping_method(res.shipping_method);
      setPayment_method(res.payment_method);
      setPayment_status(res.payment_status);
    }
  };

  useEffect(() => {
    getEditData();
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
                Edit Orders table Account{" "}
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
                <div className="card m-0 p-0 border-warning">
                  <div class="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light">
                      Edit Orders table Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Created_at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={orders_table.created_at}
                                                onChange={e => setCreated_at(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Updated_at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={orders_table.updated_at}
                                                onChange={e => setUpdated_at(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label className="form-label">User_id</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={orders_table.user_id}
                                                onChange={e => setUser_id(e.target.value)}
                                            />
                                        </div> */}
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Order_date</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={orders_table.order_date}
                        onChange={(e) => setOrder_date(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">T_amount</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={orders_table.t_amount}
                        onChange={(e) => setT_amount(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Order_status</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={orders_table.order_status}
                        onChange={(e) => setOrder_status(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Shipping_method</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={orders_table.shipping_method}
                        onChange={(e) => setShipping_method(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Payment_method</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={orders_table.payment_method}
                        onChange={(e) => setPayment_method(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Payment_status</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={orders_table.payment_status}
                        onChange={(e) => setPayment_status(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    type="button"
                    className="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={sumbitForm}
                    style={{ margin: "10px" }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn lift btn-lg rounded-4 btn-light-secondary"
                    onClick={() => navigate.back()}
                  >
                    <i className="fa fa-times-circle"></i> Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
