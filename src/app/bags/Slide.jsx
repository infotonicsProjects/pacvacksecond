"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../Home/slide.css";
import Link from "next/link";
import { urlImage } from "../../Environment";
import style from "./slider.module.css";
const Slide = ({ title }) => {
  const [height, setHeight] = useState(600);
  const imgRef = useRef();

  const index = Math.floor(Math.random() * backgroundImage.length);
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
      className={`conatiner-div-img `}
      style={{ height: height, background: backgroundImage[index] }}
      id="contianer"
    >
      <div className="wrapper-content">
        <div className="content-div content-div-bags">
          <h1>{title[0] ? title[0]?.page : "Bags"}</h1>
          <h5 style={{ fontWeight: "500", fontSize: "1.2rem" }}>
            Turn your ideas into unique giveaways, gifts or uniforms.
          </h5>
          <div className="btn-div">
            <Link href="/design2?designid=357">
              <button className="btn-buss btn text-dark bg-white ">
                Plain Bag
              </button>
            </Link>
            <Link href={title[0]?.name}>
              <button className="btn-post btn text-dark bg-white">
                Printed Bag
              </button>
            </Link>
          </div>
        </div>
      </div>

      <img
        src={
          images[parseInt(title[0]?.name?.slice(12))]
            ? urlImage + images[parseInt(title[0]?.name?.slice(12))]
            : "/img/slider.jpeg"
        }
        className={` ${style.maxHeight} img-slide slide-image`}
        ref={imgRef}
      />
    </div>
  );
};

export default Slide;
const images = [
  "/uploads/0/cover4.jpg",
  "/uploads/0/cover1.webp",
  "/uploads/0/cover3.jpeg",
  "/uploads/0/cover2.jpg",
  "/uploads/0/cover1.webp",
  "/uploads/0/cover4.jpeg",
  "/uploads/0/cover4.jpg",
  "/uploads/0/cover4.jpeg",
  "/uploads/0/cover2.jpg",
  "/uploads/0/cover3.jpeg",
];

const backgroundImage = [
  "#417f1d",
  "#c04517",
  "red",
  "orange",
  "green",
  "blue",
];
