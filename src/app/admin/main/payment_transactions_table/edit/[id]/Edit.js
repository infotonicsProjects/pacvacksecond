"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetData, PutData } from "../../../../../../utlis/ClientApi";

export default function Edit({ params }) {
  const [payment_transactions_table, setpayment_transactions_table] =
    useState("");

  const [order_id, setOrder_id] = useState(payment_transactions_table.order_id);
  const [tr_date, setTr_date] = useState(payment_transactions_table.tr_date);
  const [pay_amount, setPay_amount] = useState(
    payment_transactions_table.pay_amount,
  );
  const [pay_status, setPay_status] = useState(
    payment_transactions_table.pay_status,
  );
  const [gateway_details, setGateway_details] = useState(
    payment_transactions_table.gateway_details,
  );
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;

  // useEffect(() => {
  //     fetch(urls + 'payment_transactions_table/' + params.id, { headers: headersT })
  //         .then(response => response.json())
  //         .then(json => {
  //             if (json) {
  //                 setpayment_transactions_table(
  //                     json.data
  //                 )

  //                 console.log(json)
  //             }
  //         })
  // }, [])
  const sumbitForm = async () => {
    const data = {
      order_id: order_id,
      tr_date: tr_date,
      pay_amount: pay_amount,
      pay_status: pay_status,
      gateway_details: gateway_details,
    };

    const res = await PutData(
      "payment_transactions_table/" + params?.id,
      setLoading,
      signal,
      data,
    );

    if (res) {
      setpayment_transactions_table(res);
      navigate.push("/admin/main/payment_transactions_table/table");
    }
  };

  const getEditData = async () => {
    const res = await GetData(
      "payment_transactions_table/" + params?.id,
      setLoading,
      signal,
    );

    if (res) {
      setpayment_transactions_table(res);
      setOrder_id(res.order_id);
      setTr_date(res.tr_date);
      setPay_amount(res.pay_amount);
      setPay_status(res.pay_status);
      setGateway_details(res.gateway_details);
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
                <li className="breadcrumb-item">Payment transactions table</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Payment transactions table Account
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- .row end --> */}
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">
                {" "}
                Edit Payment transactions table Account{" "}
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
                      Edit Payment transactions table Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Created_at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={payment_transactions_table.created_at}
                                                onChange={e => setCreated_at(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Updated_at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={payment_transactions_table.updated_at}
                                                onChange={e => setUpdated_at(e.target.value)}
                                            />
                                        </div> */}
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Order_id</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={payment_transactions_table.order_id}
                        onChange={(e) => setOrder_id(e.target.value)}
                      />
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Tr_date</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={payment_transactions_table.tr_date}
                        onChange={(e) => setTr_date(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Pay_amount</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={payment_transactions_table.pay_amount}
                        onChange={(e) => setPay_amount(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Pay_status</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={payment_transactions_table.pay_status}
                        onChange={(e) => setPay_status(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Gateway_details</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={
                          payment_transactions_table.gateway_details
                        }
                        onChange={(e) => setGateway_details(e.target.value)}
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
