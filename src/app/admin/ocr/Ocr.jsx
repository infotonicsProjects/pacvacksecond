"use client";
import React, { useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import preprocessImage from "./Processed";
import { FaCopy } from "react-icons/fa6";
import { ToastSuccess } from "../../../utlis/Toast";
const Ocr = () => {
  const [textT, setText] = useState("");
  const [progress, setProgess] = useState("");
  const [url, setUrl] = useState("");
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const handleUpload = async (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(imageRef.current, 0, 0);
    ctx.putImageData(preprocessImage(canvas), 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg");

    // useEffect(() => {

    const worker = await createWorker({
      logger: (m) => setProgess(m),
    });

    (async () => {
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text },
      } = await worker.recognize(dataUrl);

      var outString = text.replace(
        /[`~!#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/]/gi,
        " ",
      );
      setText(outString);
      await worker.terminate();
    })();
    // }, [url]);
  };
  function clearCanvasGrid(e) {
    if (!e.target.files[0]) {
      return;
    } else {
      setUrl(URL.createObjectURL(e.target.files[0]));
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      //because we are looping //each location has its own canvas ID

      //context.beginPath();

      // Store the current transformation matrix
      context.save();

      // Use the identity matrix while clearing the canvas
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Restore the transform
      context.restore(); //CLEARS THE SPECIFIC CANVAS COMPLETELY FOR NEW DRAWING

      setText("");
    }
  }
  return (
    <div>
      <div className="mb-4">
        <form
          onSubmit={handleUpload}
          className="p-2 m-1 d-flex justify-content-center"
        >
          <input
            type="file"
            className="form-control me-3 "
            placeholder="Upload design "
            onChange={(e) => clearCanvasGrid(e)}
            style={{ width: "400px" }}
          />
          <button type="submit" className="btn btn-secondary ">
            Read
          </button>
        </form>
      </div>
      <div className="container">
        <div className="row" style={{ gap: "10px" }}>
          <div className="col-xl-4 border">
            <h3 className="text-center">Uploaded Image</h3>
            <img
              ref={imageRef}
              src={url}
              className={url ? "filter " : "filter d-none"}
              alt="img"
            />
          </div>
          <div className="col-xl-4 border">
            <h3 className="text-center"> Reconising Image</h3>
            <canvas
              ref={canvasRef}
              width={2000}
              height={2000}
              style={{ width: "100%" }}
            ></canvas>
          </div>
          <div className="col-xl-3 border">
            <div className="d-flex flex-column align-items-center">
              <h3>Reconised Text</h3>
              <p
                className={
                  progress?.status === "recognizing text"
                    ? "text-success"
                    : "text-danger"
                }
              >
                Status: {progress ? progress.status : " "}
              </p>
              <p className="d-flex">
                Progess: {}
                <p
                  className="border border-dark  ms-2 "
                  style={{ height: 20, width: "102px" }}
                >
                  <p
                    className={
                      progress?.status === "recognizing text"
                        ? "bg-success "
                        : "bg-danger "
                    }
                    style={{
                      width: progress
                        ? Math.floor(progress.progress * 100) + "px"
                        : "0px",
                      height: 18,
                    }}
                  ></p>
                </p>
              </p>
              <button
                className={textT ? "mb-2 btn btn-lg " : "d-none"}
                onClick={() => {
                  navigator.clipboard.writeText(textT ?? " "),
                    ToastSuccess("Copy !");
                }}
              >
                Click to Copy
                <FaCopy className="ms-2" />
              </button>
              <h1 className="fs-6">{textT}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ocr;
