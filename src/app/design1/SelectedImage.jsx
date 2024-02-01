import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
const SelectedImage = ({ setImages, images }) => {
  const handleImageUplaod = (e) => {
    setImages((prev) => [
      ...prev,
      {
        x: 229,
        y: 374,
        width: 100,
        height: 100,
        url: URL.createObjectURL(e.target.files[0]),
        id: uuidv4(),
        red: 255,
        green: 255,
        blue: 0,
      },
    ]);
  };
  const handledelete = (item) => {
    setImages(images.filter((a) => a.id !== item.id));
  };
  return (
    <div className="shadow ml-3 h-50 rounded-4 mt-n5">
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-4">Images</h1>
        </div>
        <div
          className="tabs mb-4 d-flex justify-content-between w-30"
          style={{ width: "45%" }}
        >
          <p className="fs-5">Upload</p>
          <p className="fs-5">Discover</p>
        </div>
        <div className="mb-2 border-bottom">
          <p className="mb-0 pb-0">Accepted Formats</p>
          <p className="text-black-50">
            .jpg, .jpeg, .jfif, .bmp, .png, .gif, .heic, .pdf, .psd, .ai, .eps,
            .ait, .ppt, .pptx, .tif, .tiff
          </p>
        </div>
        <div className="w-100 mt-3">
          <input
            type={"file"}
            style={{ display: "none" }}
            id="input-file"
            onChange={handleImageUplaod}
          />
          <label
            className="btn btn-dark rounded-pill w-100 py-2"
            htmlFor="input-file"
          >
            Upload Image
          </label>
        </div>
        <div className="d-flex flex-wrap p-2 fs-6">
          {images?.map((image, i) => (
            <React.Fragment>
              <img
                src={image.url}
                key={i}
                className="image-view border m-2 p-2"
              />
              <span
                className="position-delete"
                onClick={() => handledelete(image)}
              >
                <MdDelete />
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedImage;
