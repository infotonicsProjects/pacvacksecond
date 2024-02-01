"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GetData } from "../../../utlis/ClientApi";
import { urlImage } from "../../../Environment";
import Image from "next/image";

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState("");
  const controller = new AbortController();
  const signal = controller.signal;

  // const getParentId = async () => {
  //   const res = await GetData("products_table", setLoading, signal)
  //   if(res){
  //     console.log(res)
  //     setProductId(res[0]?.product_id)
  //   }
  // }

  const getProductsData = async () => {
    const res = await GetData(`allproducts/${1}`, setLoading, signal);

    if (res) {
      setProducts(res);
      setImage(urlImage + res?.img_url?.slice(6));
    }
  };

  useEffect(() => {
    // getParentId()
    getProductsData();
  }, []);

  useEffect(() => {
    return () => controller.abort();
  }, []);

  return (
    <div className="m-4 ps-5 ms-5">
      <div className="m-5">
        <div>
          <h1 className="fs-3">My Product</h1>
        </div>
        {!products ? (
          <div
            className="d-flex justify-content-center align-items-center flex-column m-5 mt-3 ms-5 ps-5 m-auto ml-20rem"
            style={{ marginLeft: "20rem !important" }}
          >
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
                  style={{ width: "200px" }}
                >
                  <switch>
                    <foreignObject
                      requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
                      x={0}
                      y={0}
                      width={8}
                      height={8}
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
              <h1 className="fw-light">You Don't have any projects yet.</h1>
            </div>
            <div>
              <p className="fw-light">
                Ready to create ? So are we. Here Some popular starting points:
              </p>
            </div>
            <div>
              <button className="btn btn-link text-dark">
                <Link href="/des" className="text-dark">
                  Bussiness cards
                </Link>
              </button>
              <button className="btn btn-link text-dark">
                <Link href="/des" className="text-dark">
                  Marketing Materials
                </Link>
              </button>
              <button className="btn btn-link text-dark">
                <Link href="/bags" className="text-dark">
                  Invitation & Stationary
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4 text-left">
            {products?.map((product) => (
              <div
                key={product?.id}
                className="p-4 mt-4 d-flex align-items-center bg-light"
              >
                <Image
                  src={image}
                  alt="product-image"
                  height={100}
                  width={100}
                />

                <div className="mr-4">
                  <h4>{product?.names}</h4>
                  <p className="w-100 text-truncate">{product?.desc}</p>
                  <p>{product?.price}</p>
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
