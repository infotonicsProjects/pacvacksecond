"use client";
import React, { useEffect, useRef, useState } from "react";
import "./slide.css";

const Slide = () => {
  const index = Math.floor(Math.random() * imageArr.length);
  const [height, setHeight] = useState(600);
  const imgRef = useRef();

  useEffect(() => {
    const heightResponse = () => {
      setHeight(imgRef.current.height);
    };
    window.addEventListener("load", heightResponse, false);
    window.addEventListener("resize", heightResponse, false);
    setTimeout(() => {
      heightResponse();
    }, 200);
    return () => window.removeEventListener("resize", heightResponse);
  }, []);
  return (
    <div
      className="conatiner-div-img2 img-slide-home"
      style={{ background: bgArr[index], height: height }}
    >
      <div className="wrapper-content">
        <div className="content-div">
          <h1>Here Comes The Crowd</h1>
          <h5 style={{ fontWeight: "400", fontSize: "1rem" }}>
            Our custom collection of business cards, postcards and more grabs
            your customers’ attention – and keeps them coming back.
          </h5>
          <div className="btn-div">
            <button className="btn-buss bg-white text-dark">Plain Bag</button>
            <button className='btn-post bg-transparent btn-outline-light"'>
              Printed Bag
            </button>
            {/* <button className='btn-mar'>
                            Marketing Card
                        </button> */}
          </div>
        </div>
      </div>

      <img
        src={imageArr[index]}
        className="img-slide-home slide-image-home"
        ref={imgRef}
      />
    </div>
  );
};
const imageArr = ["/img/banner.png", "/img/banner2.png", "/img/image.webp"];
const bgArr = ["#31318f", "#BC6B32", "green"];
export default Slide;
