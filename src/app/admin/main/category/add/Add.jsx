"use client";
import { urls } from "../../../../../Environment/index";
import { Local } from "../../../../../Environment/Token";
import Pagination from "../../../../../app/admin/adminComponents/Pagination";
import { ToastError, ToastSuccess } from "../../../../../utlis/Toast";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
export default function Add() {
  const [btnLoading, setBtnLoading] = useState(false);
  const router = useRouter();
  const token = Local;

  const sumbitForm = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    const title = e.target[1].value;
    const sub_categ_id = e.target[2].value;
    const categ_id = e.target[2].value;
    const data = {
      title,
      sub_categ_id,
      categ_id,
    };
    const requestOptions = {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(`${urls}category`, requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        ToastError(errorData.data.error);
      }
      let actualData = await response.json();
      ToastSuccess("Add Successfully ");
      router.push("/admin/main/category/table");
    } catch (err) {
      console.log(err.message);
    } finally {
      setBtnLoading(false);
    }
  };
  const handleClick = () => {
    var x = document.getElementById("hide");
    var y = document.getElementById("hide1");
    var csv = document.getElementById("unhide");
    if (x != null && y !== null && csv !== null) {
      if (x.style.display === "none" || y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        csv.style.display = "none";
      } else {
        x.style.display = "none";
        y.style.display = "none";
        csv.style.display = "block";
      }
    }
  };
  return (
    <>
      <Pagination heading={"Category"} page={"Add"} />

      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <form onSubmit={sumbitForm}>
                <div className="card">
                  <div className="card m-0 p-0 border-info">
                    <div className="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                      <h6 className="card-title mb-0 text-light">
                        Add Account
                      </h6>
                      <button
                        type="button"
                        className="btn btn-sm btn-white"
                        onClick={handleClick}
                      >
                        <i className="fa fa-plus"></i> Add Csv
                      </button>
                    </div>
                  </div>
                  <div className="card-body" id="hide">
                    <div className="row g-3">
                      <div className="col-lg-4 col-md-6">
                        <label className="form-label">Title</label>
                        <input
                          name="title"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter here"
                          required
                        />
                      </div>
                      {/* <div className="col-lg-4 col-md-6">
                        <label className="form-label">Sub categ id</label>
                        <input
                          name="sub-categ"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter here"
                          required
                        />
                      </div> */}
                      <div className="col-lg-4 col-md-6">
                        <label className="form-label">Categ id</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter here"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-footer" id="hide1">
                    {btnLoading ? (
                      <button
                        type="submit"
                        className="btn lift btn-lg rounded-4 btn-light-primary"
                        style={{ margin: "10px" }}
                        disabled
                      >
                        Add...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn lift btn-lg rounded-4 btn-light-primary"
                        style={{ margin: "10px" }}
                      >
                        Add
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn lift btn-lg rounded-4 btn-light-secondary"
                      onClick={() => router.back()}
                    >
                      <i className="fa fa-times-circle"></i> Cancel
                    </button>
                  </div>
                </div>
              </form>
              <div className="card">
                <div className="card m-0 p-0 border-warning">
                  <div className="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light"> Add Account</h6>
                    <button
                      type="button"
                      className="btn btn-sm btn-white"
                      onClick={handleClick}
                    >
                      <i className="fa fa-plus"></i> Add form{" "}
                    </button>
                  </div>
                </div>
                <div className="card-body" id="hide">
                  <div className="row g-3">
                    <a href={urls + "samplefiles/csv/category.csv"}>
                      <span>
                        Click here to download sample CSV file for this form
                      </span>
                    </a>

                    <div id="unhide" style={{ display: "none" }}></div>
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
