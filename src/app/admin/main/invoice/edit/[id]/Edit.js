"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetData, PutData } from "../../../../../../utlis/ClientApi";

export default function Edit({ params }) {
  const [invoice, setinvoice] = useState("");

  const [invoice_no, setInvoice_no] = useState(invoice.invoice_no);
  const [discount, setDiscount] = useState(invoice.discount);
  const [tax, setTax] = useState(invoice.tax);
  const [shipping_address, setShipping_address] = useState(
    invoice.shipping_address,
  );
  const [mobile_no, setMobile_no] = useState(invoice.mobile_no);
  const [email, setEmail] = useState(invoice.email);
  const [amount, setAmount] = useState(invoice.amount);
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;

  // useEffect(() => {
  //     fetch(urls + 'invoice/' + params.id, { headers: headersT })
  //         .then(response => response.json())
  //         .then(json => {
  //             if (json) {
  //                 setinvoice(
  //                     json.data
  //                 )

  //                 console.log(json)
  //             }
  //         })
  // }, [])
  const sumbitForm = async () => {
    const data = {
      invoice_no: invoice_no,
      discount: discount,
      tax: tax,
      shipping_address: shipping_address,
      mobile_no: mobile_no,
      email: email,
      amount: amount,
    };

    const res = await PutData(
      "invoice/" + params?.id,
      setLoading,
      signal,
      data,
    );
    if (res) {
      setinvoice(res);
      navigate.push("/admin/main/invoice/table");
    }
  };
  const getEditData = async () => {
    const res = await GetData("invoice/" + params?.id, setLoading, signal);

    if (res) {
      setinvoice(res);
      setInvoice_no(res.invoice_no);
      setDiscount(res.discount);
      setTax(res.tax);
      setShipping_address(res.shipping_address);
      setMobile_no(res.mobile_no);
      setEmail(res.email);
      setAmount(res.amount);
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
                <li className="breadcrumb-item">Invoice</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Invoice Account
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- .row end --> */}
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">
                {" "}
                Edit Invoice Account{" "}
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
                      Edit Invoice Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Invoice_no</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={invoice.invoice_no}
                        onChange={(e) => setInvoice_no(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Discount</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={invoice.discount}
                        onChange={(e) => setDiscount(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Tax</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={invoice.tax}
                        onChange={(e) => setTax(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Shipping_address</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={invoice.shipping_address}
                        onChange={(e) => setShipping_address(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Mobile_no</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={invoice.mobile_no}
                        onChange={(e) => setMobile_no(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={invoice.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Amount</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={invoice.amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Created_at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={invoice.created_at}
                                                onChange={e => setCreated_at(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Updated_at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={invoice.updated_at}
                                                onChange={e => setUpdated_at(e.target.value)}
                                            />
                                        </div> */}
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
