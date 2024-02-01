"use client";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { PostData, PostDataUplaod } from "../../../../../utlis/ClientApi";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import QuillNoSSRWrapper from "react-quill";
import Pagination from "../../../adminComponents/Pagination";
import { urlImage } from "../../../../../Environment";
// import CsvUpload from '../components/CsvUpload';

export default function Add() {
  const [uploadFile, setUploadFile] = useState([]);
  // const [base64Image,setBase64Image] = useState('')
  const [alt_text, setAlt_text] = useState("fdf");
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploadFile_manager] = useState({});
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

      Promise.all(promises).then(async (base64Images) => {
        const data = new FormData();
        // console.log(data)
        // data.append('user_id', user?.id)
        base64Images?.map((item, i) => {
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
        }
        setUploadFile((prevImages) => [...prevImages, ...base64Images]);
      });
    }
  };

  const handleImageDelete = (index) => {
    // Create a copy of the arrays and remove the element at the specified index
    const newFile = [...uploadFile];

    newFile.splice(index, 1);
    setUploadFile_manager({});
    setUploadFile(newFile);
  };

  const sumbitForm = async (e) => {
    e.preventDefault();

    // data.append("photos", JSON.stringify(uploadFile));
    // uploadFile.forEach((image, index) => {
    //     data.append(`image_data[${index}]`, image);
    // });

    const data = {
      design: urlImage + uploaded?.path + "/" + uploaded?.file[0],
      font_name: alt_text,

      // position:position
    };

    const res = await PostData("alphabet_design", setLoading, signal, data);

    if (res) {
      navigate.push("/admin/main/alphabet/table");
    }
  };

  return (
    <>
      <Pagination heading={"Alphabet design"} page="Add" />

      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <form
                className="card"
                onSubmit={sumbitForm}
                enctype="multipart/form-data"
              >
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
                      <label class="form-label">Image url</label>
                      {/* <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setImage_data(e.target.value)}
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
                          name="image_data"
                          // value={file}
                          onChange={handleImageChange}
                          accept="image/*"
                          id="fileInput"
                          type="file"
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

                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Design</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        name="alt_text"
                        onChange={(e) => setAlt_text(e.target.value)}
                      />
                    </div>

                    <div className="card-footer">
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
                        onClick={() => navigate.back()}
                      >
                        <i className="fa fa-times-circle"></i> Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>

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
                    {/* <a href={urls + "samplefiles/csv/cmspagestable.csv"}><span>Click here to download sample CSV file for this form</span></a> */}

                    <div id="unhide" style={{ display: "none" }}>
                      {/* <CsvUpload csv_url={urls + "cms_pages_table"} /> */}
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
