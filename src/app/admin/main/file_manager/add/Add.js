"use client";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { PostDataUplaod } from "../../../../../utlis/ClientApi";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Pagination from "../../../../../app/admin/adminComponents/Pagination";

export default function Add() {
  const [file_manager, setUploadFile_manager] = useState([]);
  const [uploadFile, setUploadFile] = useState([]);
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

  const handleImageChange = (e) => {
    const uploadImages = e.target.files;
    if (uploadImages.length > 0) {
      const promises = Array.from(uploadImages).map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve(e.target.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(promises).then((base64Images) => {
        setUploadFile((prevImages) => [...prevImages, ...base64Images]);
      });
    }
  };

  const handleImageDelete = (index) => {
    // Create a copy of the arrays and remove the element at the specified index
    const newFile = [...uploadFile];

    newFile.splice(index, 1);

    setUploadFile(newFile);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = new FormData();
    // console.log(data)
    // data.append('user_id', user?.id)
    uploadFile?.map((item, i) => {
      data.append(`photos[${i}]`, item);
    });
    // const data = {
    //     user_id: user?.id,
    //     photos: uploadFile,
    // }

    const res = await PostDataUplaod(
      "upload/file_manager",
      setLoading,
      signal,
      data,
    );
    if (res) {
      setUploadFile_manager(res);
      navigate.push("/admin/main/file_manager/table");
    }
  };

  useEffect(() => {
    return () => controller.abort();
  }, []);

  return (
    <>
      <Pagination heading={"File manager"} page="Add" />
      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <form
                className="card"
                onSubmit={submitForm}
                enctype="multipart/form-data"
              >
                <div className="card m-0 p-0 border-info">
                  <div className="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light"> Add Account</h6>
                    <button
                      type="button"
                      className="btn btn-sm btn-white"
                      onClick={handleClick}
                    >
                      <i className="fa fa-plus"></i> Add Csv{" "}
                    </button>
                  </div>
                </div>

                <div className="card-body" id="hide">
                  <div className="row g-3">
                    <div className="col-lg-12 col-md-12">
                      <label className="form-label">File</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setUploadFile(e.target.value)}
                                            /> */}
                      <div className="form-control form-control-lg col-md-6 g-3 justify-content-between align-items-center">
                        {uploadFile?.length > 0 &&
                          uploadFile?.map((img, index) => (
                            <div key={index} className="d-flex mr-4">
                              <img
                                src={img}
                                alt="Preview"
                                style={{
                                  maxWidth: "80%",
                                  maxHeight: "100px",
                                  marginRight: "4px",
                                }}
                              />
                              <RxCross1
                                className="btn lift btn-sm rounded-4 btn-light-secondary"
                                size={30}
                                onClick={() => handleImageDelete(index)}
                              />
                            </div>
                          ))}

                        <input
                          name="photos"
                          // value={file}
                          onChange={handleImageChange}
                          accept="image/*"
                          id="fileInput"
                          type="file"
                          multiple
                          style={{ display: "none" }}
                        />
                        <label
                          htmlFor="fileInput"
                          className="btn lift btn-sm rounded-4 btn-light-secondary"
                        >
                          Upload image
                        </label>
                      </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Path</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setPath(e.target.value)}
                                            />
                                        </div> */}
                  </div>
                </div>

                <div className="card-footer" id="hide1">
                  <button
                    type="submit"
                    className="btn lift btn-lg rounded-4 btn-light-primary"
                    // disabled={loading}
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
                    {/* <a href={urls + "samplefiles/csv/filemanager.csv"}><span>Click here to download sample CSV file for this form</span></a> */}

                    <div id="unhide" style={{ display: "none" }}>
                      {/* <CsvUpload csv_url={urls + "file_manager"} /> */}
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
