"use client";
import React, { useState, useEffect } from "react";
import { GetData } from "../../../utlis/ClientApi";
import { urlImage } from "../../../Environment";
import Image from "next/image";

const MyProduct = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  // const getUploadFiles = async () => {
  //   const res = await GetData("file_manager", setLoading, signal);

  //   if (res) {
  //     console.log("res", res)
  //     const data = obj(res)
  //     setUploadFile(data.file)
  //     setImage(urlImage + data[0]?.path + data[0]?.file)
  //     console.log(urlImage + data[0]?.path + data[0]?.file[0]?.file[0])
  //   }
  // };

  // const getUploadFiles = async () => {
  //   const res = await GetData("file_manager", setLoading, signal);

  //   if (res) {
  //     console.log("res", res);

  //     const data = Object.values(res);

  //     if (data.length > 0) {
  //       setUploadFile(data);

  //       setImage(urlImage+ data[0]?.path + data[0]?.file);
  //       console.log(urlImage+ data[0]?.path + data[0]?.file);
  //     }
  //   }
  // };

  const getUploadFiles = async () => {
    const res = await GetData("file_manager", setLoading, signal);

    if (res) {
      const data = Object.values(res);

      if (data.length > 0) {
        setUploadFile(data);

        // Assuming 'file' is a JSON array string
        const fileArray = JSON.parse(data[0]?.file || "[]");

        // Assuming you want to display the first image in the array

        const imagePath = data[0]?.path || ""; // You may need to adjust this based on your actual data structure
        const firstFileName = fileArray[0];
        setImage(urlImage + imagePath + firstFileName);
      }
    }
  };

  useEffect(() => {
    getUploadFiles();
  }, []);

  // useEffect(() => {
  //   return () => controller.abort();
  // }, []);

  return (
    <div className="m-5">
      <div className="m-5">
        <div>
          <h1 className="fs-3">My Upload</h1>
        </div>
        {!uploadFile ? (
          <div className="d-flex justify-content-center align-items-center flex-column m-5 mt-3 ml-20rem">
            <div
              className="m-5 d-flex justify-content-center align-items-center flex-column"
              style={{ gap: "20px" }}
            >
              <div className="w-50 h-30">
                <svg
                  version="1.2"
                  baseProfile="tiny"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                >
                  <switch>
                    <foreignObject
                      requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
                      x={0}
                      y={0}
                      width={10}
                      height={10}
                    />
                    <g>
                      <g fill="#E1ECEF">
                        <ellipse cx="45.17" cy="54.03" rx={8} ry="7.9" />
                        <ellipse cx="82.83" cy="54.03" rx={8} ry="7.9" />
                      </g>
                      <path
                        fill="#6FD0F5"
                        d="M64 73.98c-8.58 0-16.16 4.29-20.65 10.81l3.1 2.13c3.81-5.54 10.24-9.18 17.55-9.18 7.31 0 13.74 3.64 17.55 9.18l3.1-2.13C80.16 78.26 72.58 73.98 64 73.98z"
                      />
                      <path
                        fill="#E1ECEF"
                        d="M64 6c23.24 0 42.15 17.36 42.15 38.69v73.9a37.315 37.315 0 0 0-10.67-1.55c-5.14 0-10.32 1.35-15.74 4.11-5.43-2.76-10.6-4.11-15.74-4.11-5.14 0-10.32 1.35-15.74 4.11-5.43-2.76-10.6-4.11-15.74-4.11-3.66 0-7.25.53-10.67 1.55v-73.9C21.85 23.36 40.76 6 64 6m0-6C37.41 0 15.85 20.01 15.85 44.69v83.21c4.73-3.05 10.47-4.85 16.67-4.85 5.8 0 11.2 2.25 15.74 4.96 4.54-2.7 9.94-4.96 15.74-4.96s11.2 2.25 15.74 4.96c4.54-2.7 9.94-4.96 15.74-4.96 6.2 0 11.94 1.8 16.67 4.85V44.69C112.15 20.01 90.59 0 64 0z"
                      />
                    </g>
                  </switch>
                </svg>
              </div>
              <h1>No uploads yet .</h1>
            </div>
            <div>
              <p>
                When you add an image, logo or design, we’ll keep it here for
                easy access.
              </p>
            </div>
          </div>
        ) : (
          <div
            className="mt-4 text-left d-flex flex-wrap justify-content-center "
            style={{ gap: "10px" }}
          >
            {uploadFile?.map((imageFile) => (
              <div key={imageFile?.id}>
                <div className="d-flex flex-column justify-content-center">
                  {Object.entries(JSON.parse(imageFile?.file)).map(
                    ([key, item]) => (
                      <Image
                        src={urlImage + imageFile?.path + "/" + item}
                        className="p-2 border"
                        height={`100`}
                        width={200}
                        alt={key}
                      />
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProduct;
