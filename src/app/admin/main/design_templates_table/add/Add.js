"use client";
import React, { useState, useEffect } from "react";
import { PostData } from "../../../../../utlis/ClientApi";
import { useRouter } from "next/navigation";
import Pagination from "../../../../../app/admin/adminComponents/Pagination";

export default function Add() {
  const [design_name, setDesign_name] = useState("");
  const [design_url, setDesign_url] = useState("");
  const [images, setImages] = useState("");
  const [oter_settings, setOter_settings] = useState("");
  const [designData, setDesignData] = useState("");
  const [loading, setLoading] = useState("false");
  const controller = new AbortController();
  const signal = controller.signal;

  const navigate = useRouter();

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
      design_name: design_name,
      design_url: design_url,
      images: images,
      oter_settings: oter_settings,
      designData: designData,
    };
    const res = await PostData(
      "design_templates_table",
      setLoading,
      signal,
      data,
    );
    if (res) {
      navigate.push("/admin/main/design_templates_table/table");
    }
  };

  useEffect(() => {
    return () => controller.abort();
  }, []);
  return (
    <>
      <Pagination heading={"Design "} page="Add" />

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
                                        </div> */}
                    {/* <div class="col-lg-4 col-md-6">
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
                                        </div> */}
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Design name</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setDesign_name(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Design url</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setDesign_url(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Images</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setImages(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Oter settings</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setOter_settings(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">DesignData</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setDesignData(e.target.value)}
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
                    {/* <a href={urls + "samplefiles/csv/designtemplatestable.csv"}><span>Click here to download sample CSV file for this form</span></a> */}

                    <div id="unhide" style={{ display: "none" }}>
                      {/* <CsvUpload csv_url={urls + "design_templates_table"} /> */}
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
