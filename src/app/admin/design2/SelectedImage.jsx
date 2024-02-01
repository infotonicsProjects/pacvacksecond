import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { PostDataUplaod } from "../../../utlis/ClientApi";
import { urlImage } from "../../../Environment";
const SelectedImage = ({ setImages, images, setSelectedEdit, colors }) => {
  const [loading, setLoading] = useState(false);
  const [actualColor, setColors] = useState({ r: 0, g: 0, b: 0 });
  const controller = new AbortController();
  const signal = controller.signal;
  const handleImageUplaod = async (e) => {
    const data = new FormData();
    data.append("image", e.target.files[0]);
    const uploadImage = await PostDataUplaod(
      "user_tbl/upload",
      setLoading,
      signal,
      data,
    );
    if (uploadImage !== undefined && uploadImage !== null) {
      setImages((prev) => [
        ...prev,
        {
          width: 100,
          height: 100,
          // urlserver: urlImage + uploadImage.imagepath.pop(),
          url: urlImage + uploadImage.imagepath.pop(),
          // url: URL.createObjectURL(e.target.files[0]),
          id: uuidv4(),
          green: actualColor.g,
          red: actualColor.r,
          blue: actualColor.b,
          alpha: 1,
          x: 357.9999999999996,
          y: 950.0000000000006,
          rotation: 0,
          zIndex: 1,
          draggable: true,
        },
      ]);
    }
  };
  useEffect(() => {
    const hex2rgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      // return {r, g, b}
      return { r, g, b };
    };
    setColors(hex2rgb(colors));
  }, [colors]);
  const handledelete = (item) => {
    setImages(images.filter((a) => a.id !== item.id));
  };
  return (
    <div
      className="shadow ml-3 bg-white rounded-4 mt-n5 overflow-auto responsive-height"
      style={{ height: "700px" }}
    >
      <div className="p-4 ">
        <div className="pb-2">
          <h1 className="fs-5">
            Images{" "}
            <button
              className="btn hide-dekstop position-relative"
              style={{ left: "220px" }}
              onClick={() => setSelectedEdit(null)}
            >
              X
            </button>
          </h1>
        </div>
        <div
          className="tabs mb-4 d-flex justify-content-between w-30"
          style={{ width: "45%" }}
        >
          <p className="fs-6 mobile-display-none">Upload</p>
          <p className="fs-6 mobile-display-none d-none">Discover</p>
        </div>
        <div className="mb-2 border-bottom mobile-display-none">
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
          {loading && (
            <div
              className="border"
              style={{ width: "100", height: "100px" }}
            ></div>
          )}
          {images?.map((image, i) => (
            <React.Fragment>
              <img
                src={image.url}
                key={i}
                height={150}
                width={150}
                className="image-view border m-2 p-2 rounded"
                alt="image design"
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
