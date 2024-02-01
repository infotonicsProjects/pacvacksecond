"use client";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { PostData, PostDataUplaod } from "../../../../../utlis/ClientApi";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import QuillNoSSRWrapper from "react-quill";
import Pagination from "../../../adminComponents/Pagination";
// import CsvUpload from '../components/CsvUpload';

export default function Add() {
  const [cms_pages_table, setcms_pages_table] = useState("");
  const [uploadFile, setUploadFile] = useState([]);
  const [position, setPosition] = useState(null);
  // const [base64Image,setBase64Image] = useState('')
  const [alt_text, setAlt_text] = useState("fdf");
  const [title, setTitle] = useState("df");
  const [content, setContent] = useState("df");
  const [author, setAuthor] = useState("df");
  const [seo_data, setSeo_data] = useState("df");
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

  const sumbitForm = async (e) => {
    e.preventDefault();

    // data.append("photos", JSON.stringify(uploadFile));
    // uploadFile.forEach((image, index) => {
    //     data.append(`image_data[${index}]`, image);
    // });

    const data = {
      image_data: uploadFile,
      alt_text: alt_text,
      seo_data: seo_data,
      title: title,
      content: content,
      author: author,
      // position:position
    };

    const res = await PostData("cms_pages_table", setLoading, signal, data);

    if (res) {
      setcms_pages_table(res);

      navigate.push("/admin/main/cms_pages_table/table");
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

  // useEffect(() => {
  //     return () => controller.abort();
  // }, [])

  return (
    <>
      <Pagination heading={"Cms pages"} page="Add" />

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
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">User id</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setUser_id(e.target.value)}
                                            />
                                        </div> */}
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Created at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setCreated_at(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Updated at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setUpdated_at(e.target.value)}
                                            />
                                        </div> */}
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Author</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Seo data</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setSeo_data(e.target.value)}
                      />
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Image url</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
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

                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Alt text</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        name="alt_text"
                        onChange={(e) => setAlt_text(e.target.value)}
                      />
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <label className="form-label">Content</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setContent(e.target.value)}
                                            /> */}
                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={content}
                        onChange={(editor) => setContent(editor)}
                      />
                    </div>
                  </div>
                </div>

                <div className="card-footer" id="hide1">
                  <button
                    type="submit"
                    className="btn lift btn-lg rounded-4 btn-light-primary"
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
