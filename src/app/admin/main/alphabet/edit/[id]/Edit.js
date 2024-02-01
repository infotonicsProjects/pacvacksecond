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
import { urlImage } from "../../../../../../Environment";
import LoadingComponet from "../../../../adminComponents/LoadingComponent";

export default function Edit({ params }) {
  const [cms_pages_table, setcms_pages_table] = useState("");
  // console.log(params)
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  const [uploaded, setUploadFile_manager] = useState({});
  // const [base64Image,setBase64Image] = useState('')
  const [alt_text, setAlt_text] = useState("");

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
          setImagePreview(urlImage + res?.path + "/" + res?.file[0]);
        }
      });
    }
  };

  const handleImageDelete = (index) => {
    // Create a copy of the arrays and remove the element at the specified index

    setUploadFile_manager({});
    setImagePreview("");
  };

  const sumbitForm = async () => {
    // data.append("photos", JSON.stringify(uploadFile));

    const data = {
      design: urlImage + uploaded?.path + "/" + uploaded?.file[0],
      font_name: alt_text,

      // position:position
    };

    const res = await PutData(
      "alphabet_design/" + params?.id,
      setLoading,
      signal,
      data,
    );

    if (res) {
      navigate.push("/admin/main/alphabet/table");
    }
  };

  const getEditData = async () => {
    const res = await GetData(
      "alphabet_design/" + params?.id,
      setLoading,
      signal,
    );
    if (res) {
      setImagePreview(res.design);

      // localStorage.setItem('Page_Id', JSON.stringify(res?.page_id));
      setAlt_text(res.font_name);
    }
  };

  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */

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
      {loading ? (
        <LoadingComponet />
      ) : (
        <>
          <Pagination heading={"Alphabet design"} page="Edit" />
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
                          <label className="form-label">Image_url</label>
                          {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                        defaultValue={cms_pages_table?.image_url}
                                                        onChange={e => setImage_url(e.target.value)}
                                                    /> */}
                          <div className="form-control form-control-lg col-md-6 g-3 justify-content-between align-items-center">
                            {imagePreview && (
                              <div className="d-flex mr-4">
                                <img
                                  src={imagePreview}
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
                                  onClick={() => handleImageDelete(1)}
                                />
                              </div>
                            )}
                            <input
                              name="file"
                              // value={imagePreview}
                              onChange={handleImageChange}
                              accept="image/*"
                              id="image-button"
                              type="file"
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
                          <label className="form-label">Design</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter here"
                            value={alt_text}
                            onChange={(e) => setAlt_text(e.target.value)}
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
      )}
    </>
  );
}
