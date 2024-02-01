"use client";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

// import { urls } from '../Environment/index';
import { useRouter } from "next/navigation";
import {
  GetData,
  PostData,
  PutData,
  formDataPut,
} from "../../../../../../utlis/ClientApi";
import { useSelector } from "react-redux";
import { urlImage } from "../../../../../../Environment";
import Pagination from "../../../../../admin/adminComponents/Pagination";

export default function Edit({ params }) {
  const [file_manager, setfile_manager] = useState([]);

  const [uploadFile, setUploadFile] = useState(file_manager?.file);
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  const user = useSelector((state) => state.userData);

  const controller = new AbortController();
  const signal = controller.signal;

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
    const newFile = uploadFile;
    newFile.splice(index, 1);

    setUploadFile([...newFile]);
  };

  const sumbitForm = async (e) => {
    e.preventDefault();

    const data = {
      // user_id: user?.id.toString(),
      photos: uploadFile,
    };

    const res = await PutData(
      "file_manager/" + params?.id,
      setLoading,
      signal,
      data,
    );
    if (res) {
      setfile_manager(res);
      setUploadFile(res?.file);
      navigate.push("/admin/main/file_manager/table");
    }
  };

  const getEditData = async () => {
    const res = await GetData("file_manager/" + params?.id, setLoading, signal);

    if (res) {
      setfile_manager(res);
      const image = [];
      Object.entries(JSON.parse(res.file)).forEach(([key, item]) => {
        image.push(item);
      });
      setUploadFile(image);
    }
  };

  useEffect(() => {
    getEditData();
  }, []);

  return (
    <>
      <Pagination heading="File Manager" page={"Edit"} />

      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <form
                className="card"
                onSubmit={sumbitForm}
                enctype="multipart/form-data"
              >
                <div className="card m-0 p-0 border-warning">
                  <div className="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light">
                      Edit File manager Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-12 col-md-12">
                      <label className="form-label">File</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={file_manager.file}
                                                onChange={e => setFile(e.target.value)}
                                            /> */}
                      <div className="form-control form-control-lg col-md-6 g-3 justify-content-between align-items-center">
                        {uploadFile?.map((image, index) => (
                          <div key={image?.id} className="d-flex mr-4">
                            <img
                              src={
                                image?.slice(0, 5) === "data:"
                                  ? image
                                  : urlImage + file_manager?.path + "/" + image
                              }
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
                            {/* {console.log("image",urlImage + img.path + JSON.parse(img.file))} */}
                          </div>
                        ))}
                        {/* {console.log(Array.from(uploadFile))} */}
                        <input
                          name="photos"
                          // value={uploadFile?.file}
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
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    type="submit"
                    className="btn lift btn-lg rounded-4 btn-light-primary"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
