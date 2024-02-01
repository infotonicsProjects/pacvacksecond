"use client";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
// import { urls } from '../Environment/index';
import { useRouter } from "next/navigation";
import {
  GetData,
  PostDataUplaod,
  PutData,
  formDataPut,
} from "../../../../../../utlis/ClientApi";
import "react-quill/dist/quill.snow.css";
import QuillNoSSRWrapper, { Quill } from "react-quill";
import Pagination from "../../../../adminComponents/Pagination";

export default function Edit({ params }) {
  const [cms_pages_table, setcms_pages_table] = useState("");
  // console.log(params)
  const [imagePreview, setImagePreview] = useState([]);
  const [position, setPosition] = useState("");
  const [pageId, setPageId] = useState(cms_pages_table?.page_id);
  // const [base64Image,setBase64Image] = useState('')
  const [alt_text, setAlt_text] = useState("sd");
  const [title, setTitle] = useState("df");
  const [content, setContent] = useState("fg");
  const [author, setAuthor] = useState("gh");
  const [seo_data, setSeo_data] = useState("fg");
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();

  const controller = new AbortController();
  const signal = controller.signal;

  // useEffect(() => {
  //     fetch(urls + 'cms_pages_table/' + params.id, { headers: headersT })
  //         .then(response => response.json())
  //         .then(json => {
  //             if (json) {
  //                 setcms_pages_table(
  //                     json.data
  //                 )

  //                 console.log(json)
  //             }
  //         })
  // }, [])

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
    // data.append("photos", JSON.stringify(uploadFile));

    const data = {
      // uploadFile.forEach((image, index) => {
      //     { `image_data[${index}]` } : image
      // }),
      image_data: imagePreview,
      alt_text: alt_text,
      seo_data: seo_data,
      title: title,
      content: content,
      author: author,
      position: "",
      // page_id:pageId,
    };

    const res = await PutData(
      "cms_pages_table/" + params?.id,
      setLoading,
      signal,
      data,
    );

    if (res) {
      setcms_pages_table(res);
      navigate.push("/admin/main/cms_pages_table/table");
    }
  };

  const getEditData = async () => {
    const res = await GetData(
      "cms_pages_table/" + params?.id,
      setLoading,
      signal,
    );
    if (res) {
      setcms_pages_table(res);
      // setImagePreview(res.image_data)
      setPageId(res?.page_id);
      // localStorage.setItem('Page_Id', JSON.stringify(res?.page_id));
      setAlt_text(res.alt_text);
      setTitle(res.title);
      setContent(res.content);
      setAuthor(res.author);
      setSeo_data(res.seo_data);
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
    getEditData();
    // const PageID = JSON.Parse(localStorage.getItem('Page_Id'))
    // if(PageID){
    //     console.log(PageID)
    //     setPageId(PageID)
    // }
  }, []);

  return (
    <>
      <Pagination heading={"Cms pages"} page="Edit" />
      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <div className="card">
                <div className="card m-0 p-0 border-warning">
                  <div class="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light">
                      Edit Cms pages table Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Created_at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={cms_pages_table.created_at}
                                                onChange={e => setCreated_at(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Updated_at</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={cms_pages_table.updated_at}
                                                onChange={e => setUpdated_at(e.target.value)}
                                            />
                                        </div> */}
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        name="title"
                        defaultValue={cms_pages_table.title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Image_url</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                        defaultValue={cms_pages_table?.image_url}
                                                        onChange={e => setImage_url(e.target.value)}
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
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Alt_text</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={cms_pages_table?.alt_text}
                        onChange={(e) => setAlt_text(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <label className="form-label">Content</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={cms_pages_table.content}
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
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Author</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        name="author"
                        defaultValue={cms_pages_table.author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Seo_data</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        name="seo_data"
                        defaultValue={cms_pages_table.seo_data}
                        onChange={(e) => setSeo_data(e.target.value)}
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
