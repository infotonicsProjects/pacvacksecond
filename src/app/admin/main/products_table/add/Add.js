"use client";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import "react-quill/dist/quill.snow.css";
import QuillNoSSRWrapper from "react-quill";
import InputColor from "react-input-color";

import { useRouter } from "next/navigation";
import { PostData } from "../../../../../utlis/ClientApi";

// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from 'draft-js';
// import { convertToHTML } from 'draft-convert'
// import Select from "react-select";

export default function Add() {
  const [products_table, setproducts_table] = useState("");
  const [categ_id, setCateg_id] = useState("");
  const [names, setNames] = useState("");
  const [price, setPrice] = useState("");
  const [invent_qty, setInvent_qty] = useState("");
  const [bag_color, setBag_color] = useState("");
  const [css_style, setCss_style] = useState("");
  const [designid, setDesignid] = useState("");
  const [overview_title, setOverview_title] = useState("");
  const [faq, setFaq] = useState("");
  const [specs, setSpecs] = useState("");
  const [overview_list, setOverview_list] = useState("");

  // const [image_data, setImage_data] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  const [overview_description, setOverview_description] = useState("");
  // const [convertedContent, setConvertedContent] = useState(null);
  const [option, setOption] = useState([]);
  const [loading, setLoading] = useState("false");
  // const [desc, setDesc] = useState(
  //     () => EditorState.createEmpty(),
  // );
  const [desc, setDesc] = useState("");

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
      // name:name,
      categ_id: categ_id,
      names: names,
      desc: desc,
      price: price,
      invent_qty: invent_qty,
      bag_color: bag_color,
      css_style: css_style,
      designid: designid,
      overview_title: overview_title,
      faq: faq,
      specs: specs,
      overview_list: overview_list,
      images: imagePreview,
      overview_description: overview_description,
    };

    const res = await PostData("products_table", setLoading, signal, data);
    if (res) {
      setproducts_table(res);
      navigate.push("/admin/main/products_table/table");
    }
  };

  const options = option.map(({ id: value, value: label, ...rest }) => ({
    value,
    label,
    ...rest,
  }));

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

  // useEffect(() => {
  //     let html = convertToHTML(desc.getCurrentContent());
  //     setConvertedContent(html);
  // }, [desc]);

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
                <li className="breadcrumb-item">Products table</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Products table Account
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- .row end --> */}
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">
                {" "}
                Products table Account Add
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
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Categ id</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setCateg_id(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setCateg_id(e.value) : setCateg_id(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Names</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setNames(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setNames(e.value) : setNames(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <label class="form-label">Description</label>
                      {/* <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setDesc(e.target.value)}
                                            /> */}
                      {/* <Editor
                                                // editorState={editorState}
                                                editorState={desc}
                                                onEditorStateChange={setDesc}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                placeholder="The message goes here..."
                                            // onEditorStateChange={(e)=>setEditorState({e})}
                                            /> */}
                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={desc}
                        onChange={(editor) => setDesc(editor)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Price</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setPrice(e.value) : setPrice(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Invent qty</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setInvent_qty(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setInvent_qty(e.value) : setInvent_qty(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Bag color</label>
                      {/* <input type="color" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setBag_color(e.target.value)}
                                            /> */}
                      <div className="form-control form-control-lg">
                        <InputColor
                          initialValue="#5e72e4"
                          onChange={setBag_color}
                          placement="left"
                          placeholder="Enter here"
                        />
                        <p>{bag_color?.hex}</p>
                        <p>{bag_color?.rgba}</p>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Css style</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setCss_style(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setCss_style(e.value) : setCss_style(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Designid</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setDesignid(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setDesignid(e.value) : setDesignid(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Overview title</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setOverview_title(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setOverview_title(e.value) : setOverview_title(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Faq</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setFaq(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setFaq(e.value) : setFaq(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Specs</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setSpecs(e.target.value)}
                      />
                      {/* <Select
                                                options={options}
                                                onChange={(e) => {
                                                    e ? setSpecs(e.value) : setSpecs(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <label class="form-label">Overview list</label>
                      {/* <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setOverview_list(e.target.value)}
                                            /> */}
                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={overview_list}
                        onChange={(editor) => setOverview_list(editor)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Images</label>

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
                    <div class="col-lg-12 col-md-12">
                      <label class="form-label">Overview description</label>
                      {/* <input type="text" class="form-control form-control-lg" placeholder="Enter here"
                                                onChange={e => setOverview_description(e.target.value)}
                                            /> */}
                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={overview_description}
                        onChange={(editor) => setOverview_description(editor)}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
