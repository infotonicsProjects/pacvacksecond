"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  GetData,
  PutData,
  formDataPut,
} from "../../../../../../utlis/ClientApi";
import Pagination from "../../../../adminComponents/Pagination";

export default function Edit({ params }) {
  const [users_table, setusers_table] = useState("");

  const [username, setUsername] = useState(users_table.username);
  const [email, setEmail] = useState(users_table.email);
  const [shipping, setShipping] = useState(users_table.shipping);
  const [billing, setBilling] = useState(users_table.billing);
  const [other_info, setOther_info] = useState(users_table.other_info);
  const [img, setImg] = useState(users_table.img);
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;

  // useEffect(() => {
  //     fetch(urls + 'users_table/' + params.id, { headers: headersT })
  //         .then(response => response.json())
  //         .then(json => {
  //             if (json) {
  //                 setusers_table(
  //                     json.data
  //                 )

  //                 console.log(json)
  //             }
  //         })
  // }, [])

  const sumbitForm = async () => {
    const data = {
      username: username,
      email: email,
      shipping: shipping,
      billing: billing,
      other_info: other_info,
      img: img,
    };

    const res = await PutData(
      "users_table/" + params?.id,
      setLoading,
      signal,
      data,
    );
    if (res) {
      setusers_table(res);
      navigate.push("/admin/main/users_table/table");
    }
  };
  const getEditData = async () => {
    const res = await GetData("users_table/" + params?.id, setLoading, signal);

    if (res) {
      setusers_table(res);
      setUsername(res.username);
      setEmail(res.email);
      setShipping(res.shipping);
      setBilling(res.billing);
      setOther_info(res.other_info);
      setImg(res.img);
    }
  };

  useEffect(() => {
    getEditData();
  }, []);

  return (
    <>
      <Pagination heading={"Users table"} page="Edit" />

      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <div className="card">
                <div className="card m-0 p-0 border-warning">
                  <div class="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light">
                      Edit Users table Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={users_table.username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={users_table.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Shipping</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={users_table.shipping}
                        onChange={(e) => setShipping(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Billing</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={users_table.billing}
                        onChange={(e) => setBilling(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Other_info</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={users_table.other_info}
                        onChange={(e) => setOther_info(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Img</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={users_table.img}
                        onChange={(e) => setImg(e.target.value)}
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
