import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { QRCode } from "react-qrcode-logo";
import { v4 as uuidv4 } from "uuid";
import { PostDataUplaod } from "../../../utlis/ClientApi";
import { urlImage } from "../../../Environment";
const SelectedQr = ({ setImages, images, colors }) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const handleQrGenetor = async (e) => {
    e.preventDefault();
    const qrUrl = document.getElementById("qrcode")?.toDataURL();
    const data = new FormData();
    data.append(`photos[${0}]`, qrUrl);
    const uploadImage = await PostDataUplaod(
      "upload/file_manager",
      setLoading,
      signal,
      data,
    );
    if (uploadImage !== undefined && uploadImage !== null) {
      setImages((prev) => [
        ...prev,
        {
          width: 150,
          height: 150,
          // urlserver: urlImage + uploadImage.imagepath.pop(),
          url: urlImage + uploadImage?.path + "/" + uploadImage.file.pop(),
          // url: URL.createObjectURL(e.target.files[0]),
          id: uuidv4(),
          qr: true,
          qrValue: value,
          green: 0,
          red: 0,
          blue: 0,
          alpha: 0,
          x: 357.9999999999996,
          y: 950.0000000000006,
          rotation: 0,
          zIndex: 1,
          draggable: true,
        },
      ]);
    }
  };
  const handledelete = (item) => {
    setImages(images.filter((a) => a.id !== item.id));
  };

  return (
    <div
      className="shadow ml-3 bg-white rounded-4 mt-n5 overflow-auto responsive-height"
      style={{ height: "700px" }}
    >
      <form className="p-4" onSubmit={handleQrGenetor}>
        <div className="pb-2">
          <h1 className="fs-5">Qr Code</h1>
        </div>
        <div className="mb-2 border-bottom">
          <p className="mb-0 pb-0 text-black-50">
            Enter a valid URL and Click the add button.
          </p>
          <QRCodeImage value={value} colors={colors} />
          <div className="input-group input-group-lg mt-3">
            <input
              type="text"
              className="form-control rounded fs-6"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Enter a URL to Generate Qr Code"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="w-100 mt-5">
          <button
            className="btn btn-light border rounded-pill w-100 py-2"
            type="submit"
          >
            Add Qr Code
          </button>
        </div>
      </form>
      <h6 className=" border-top pt-2 text-center rounded">Qr Codes</h6>
      <div className="d-flex flex-wrap p-2 fs-6 mb-4">
        {loading && (
          <div
            className="border"
            style={{ width: "100px", height: "100px" }}
          ></div>
        )}
        {images?.map((image, i) => (
          <React.Fragment>
            {image?.qr && (
              <div
                className="text-center overflow-hidden text-ellipsis"
                style={{ width: "110px" }}
              >
                <img
                  src={image.url}
                  key={i}
                  height={100}
                  width={100}
                  className="image-view border m-2 p-2 rounded"
                  alt="image design"
                />
                <span
                  className="position-delete"
                  onClick={() => handledelete(image)}
                  style={{ top: "-110px", right: "-43px" }}
                >
                  <MdDelete />
                </span>
                <p>{image?.qrValue}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const QRCodeImage = ({ value, colors }) => {
  return (
    <Box
      height={100}
      width={100}
      className="image-view border m-2 p-2 rounded d-flex align-align-items-center justify-content-center visually-hidden mb-5"
    >
      <div className="text-center ">
        <QRCode
          value={value}
          size={150}
          id={"qrcode"}
          ecLevel={"Q"}
          quietZone={5}
          fgColor={colors}
          bgColor={"transparent"}
        />
        <p>Preview</p>
      </div>
    </Box>
  );
};
export default SelectedQr;
