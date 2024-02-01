"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomeHook } from "../../../../../../Environment/CustomeHook";
import { PutData } from "../../../../../../utlis/ClientApi";

export default function Edit({ params }) {
  const [user_designs_table, setuser_designs_table] = useState("");

  const [created_at, setCreated_at] = useState(user_designs_table.created_at);
  const [updated_at, setUpdated_at] = useState(user_designs_table.updated_at);
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;
  const getEditData = CustomeHook(
    "user_designs_table/" + params?.id,
    setLoading,
  );

  // useEffect(() => {
  //     fetch(urls + 'user_designs_table/' + params.id, { headers: headersT })
  //         .then(response => response.json())
  //         .then(json => {
  //             if (json) {
  //                 setuser_designs_table(
  //                     json.data
  //                 )

  //                 console.log(json)
  //             }
  //         })
  // }, [])

  const sumbitForm = async () => {
    const data = {
      created_at: created_at,
      updated_at: updated_at,
    };

    const res = await PutData(
      "user_designs_table/" + params?.id,
      setLoading,
      signal,
      data,
    );
  };

  useEffect(() => {
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (getEditData) {
      setCreated_at(user_designs_table.created_at);
      setUpdated_at(user_designs_table.updated_at);
    }
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
                <li className="breadcrumb-item">User designs table</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  User designs table Account
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- .row end --> */}
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">
                {" "}
                Edit User designs table Account{" "}
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
                      Edit User designs table Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Created_at</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={user_designs_table.created_at}
                        onChange={(e) => setCreated_at(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Updated_at</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={user_designs_table.updated_at}
                        onChange={(e) => setUpdated_at(e.target.value)}
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
