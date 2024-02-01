"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetData, PutData } from "../../../../../../utlis/ClientApi";

export default function Edit({ params }) {
  const [shipping_information_table, setshipping_information_table] =
    useState("");

  const [order_id, setOrder_id] = useState(shipping_information_table.order_id);
  const [receipent_name, setReceipent_name] = useState(
    shipping_information_table.receipent_name,
  );
  const [shipping, setShipping] = useState(shipping_information_table.shipping);
  const [delivery_date, setDelivery_date] = useState(
    shipping_information_table.delivery_date,
  );
  const [track_information, setTrack_information] = useState(
    shipping_information_table.track_information,
  );

  const [cname, setCname] = useState(shipping_information_table.cname);
  const [gst, setGst] = useState(shipping_information_table.gst);
  const [number, setNumber] = useState(shipping_information_table.number);
  const [email, setEmail] = useState(shipping_information_table.email);
  const [s_address, setS_address] = useState(
    shipping_information_table.s_address,
  );
  const [s_city, setS_city] = useState(shipping_information_table.s_city);
  const [s_state, setS_state] = useState(shipping_information_table.s_state);

  const [b_address, setB_address] = useState(
    shipping_information_table.b_address,
  );
  const [b_city, setB_city] = useState(shipping_information_table.b_city);
  const [b_state, setB_state] = useState(shipping_information_table.b_state);

  const [loading, setLoading] = useState(false);

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;

  const sumbitForm = async () => {
    const data = {
      order_id: order_id,
      receipent_name: receipent_name,
      shipping: shipping,
      delivery_date: delivery_date,
      track_information: track_information,
      cname: cname,
      gst: gst,
      number: number,
      email: email,
      s_address: s_address,
      s_city: s_city,
      s_state: s_state,
      b_address: b_address,
      b_city: b_city,
      b_state: b_state,
    };

    const res = await PutData(
      "shipping_information_table/" + params?.id,
      setLoading,
      signal,
      data,
    );
    if (res) {
      setshipping_information_table(res);
      navigate.push("/admin/main/shipping_information_table/table");
    }
  };

  const getEditData = async () => {
    const res = await GetData(
      "shipping_information_table/" + params?.id,
      setLoading,
      signal,
    );

    if (res) {
      setshipping_information_table(res);
      setOrder_id(res.order_id);
      setReceipent_name(res.receipent_name);
      setShipping(res.shipping);
      setDelivery_date(res.delivery_date);
      setTrack_information(res.track_information);
      setCname(res.cname);
      setGst(res.gst);
      setEmail(res.email);
      setNumber(res.number);
      setS_address(res.s_address);
      setS_city(res.s_city);
      setS_state(res.s_state);

      setB_address(res.b_address);
      setB_city(res.b_city);
      setB_state(res.b_state);
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
                <li className="breadcrumb-item">Shipping information table</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Shipping information table Account
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- .row end --> */}
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">
                {" "}
                Edit Shipping information table Account{" "}
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
                      Edit Shipping information table Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Order_id</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={shipping_information_table.order_id}
                                                onChange={e => setOrder_id(e.target.value)}
                                            />
                                        </div> */}
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Receipent_name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.receipent_name}
                        onChange={(e) => setReceipent_name(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Shipping</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.shipping}
                        onChange={(e) => setShipping(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Delivery_date</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.delivery_date}
                        onChange={(e) => setDelivery_date(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Track_information</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={
                          shipping_information_table.track_information
                        }
                        onChange={(e) => setTrack_information(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.cname}
                        onChange={(e) => setCname(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Gst</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.gst}
                        onChange={(e) => setGst(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Phone No.</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Shipping Address</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.s_address}
                        onChange={(e) => setS_address(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Shipping City</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.s_city}
                        onChange={(e) => setS_city(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Shipping City</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.s_state}
                        onChange={(e) => setS_state(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Billing Address</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.b_address}
                        onChange={(e) => setB_address(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Billing City</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.b_city}
                        onChange={(e) => setB_city(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Billing State</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={shipping_information_table.b_state}
                        onChange={(e) => setB_state(e.target.value)}
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
