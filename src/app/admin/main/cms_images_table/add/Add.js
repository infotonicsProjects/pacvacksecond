"use client";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import QuillNoSSRWrapper from "react-quill";

// import CsvUpload from '../components/CsvUpload';
import { PostData, PostDataUplaod } from "../../../../../utlis/ClientApi";

export default function Add() {
  const [cms_images_table, setcms_images_table] = useState("");

  const [imagePreview, setImagePreview] = useState([]);
  // const [base64Image,setBase64Image] = useState('')
  const [alt_text, setAlt_text] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [seo_data, setSeo_data] = useState("");
  const [loading, setLoading] = useState("false");
  const navigate = useRouter();

  const controller = new AbortController();
  const signal = controller.signal;

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
  // const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //         const reader = new FileReader();
  //         reader.onloadend = () => {
  //             console.log(reader)
  //             setImage_data(file);
  //             setImagePreview(reader.result);
  //         };
  //         reader.readAsDataURL(file);
  //     }
  // };
  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const promises = Array.from(files).map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve(e.target.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(promises).then((base64Images) => {
        setImagePreview((prevImages) => [...prevImages, ...base64Images]);
      });
    }
  };

  const handleImageDelete = (index) => {
    // Create a copy of the arrays and remove the element at the specified index
    const newPreview = [...imagePreview];

    newPreview.splice(index, 1);

    setImagePreview(newPreview);
  };
  const sumbitForm = async () => {
    const data = {
      image_data: imagePreview,
      seo_data: seo_data,
      alt_text: alt_text,
      title: title,
      content: content,
      author: author,
    };

    const res = await PostData("cms_pages_table", setLoading, signal, data);
    if (res) {
      setcms_images_table(res);
      navigate.push("/admin//main/cms_images_table/table");
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  useEffect(() => {
    return () => controller.abort();
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
                <li className="breadcrumb-item">Cms images table</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Cms images table Account
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- .row end --> */}
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">
                {" "}
                Cms images table Account Add
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
                    {/* <div class="col-lg-4 col-md-6">
                                            <label class="form-label">Page id</label>
                                            <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setPage_id(e.target.value)}
                                            />
                                        </div> */}
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Image url</label>
                      {/* <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setImage_data(e.target.value)}
                                            /> */}

                      <div className="form-control form-control-lg col-md-6 g-3 justify-content-between align-items-center">
                        {imagePreview?.length > 0 &&
                          imagePreview?.map((img, index) => (
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
                          name="file"
                          // value={imagePreview}
                          onChange={handleImageChange}
                          accept="image/*"
                          id="image-button"
                          type="file"
                          multiple
                          style={{ display: "none" }}
                        />
                        <label
                          htmlFor="image-button"
                          className="btn lift btn-sm rounded-4 btn-light-secondary"
                        >
                          Upload image
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Alt text</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        name="alt_text"
                        onChange={(e) => setAlt_text(e.target.value)}
                      />
                    </div>

                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Title</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <label class="form-label">Content</label>

                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={content}
                        onChange={(editor) => setContent(editor)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Author</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        name="author"
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Seo Data</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        name="seo_data"
                        onChange={(e) => setSeo_data(e.target.value)}
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
                    {/* <a href={urls + "samplefiles/csv/cmsimagestable.csv"}><span>Click here to download sample CSV file for this form</span></a> */}

                    <div id="unhide" style={{ display: "none" }}>
                      {/* <CsvUpload csv_url={urls + "cms_images_table"} /> */}
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
