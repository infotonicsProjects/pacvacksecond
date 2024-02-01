import { urlImage } from "@/Environment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductMap = ({ data }) => {
  return (
    <div className="row g-3">
      {data?.data?.map((product, i) => (
        <div className="col-lg-3 col-md-4 col-sm-12" key={i}>
          <div className="card product-card">
            <div className="card-body" style={{ minHeight: " 405px" }}>
              <div className="product-img text-center">
                <img
                  src={urlImage + product?.images.slice(6)}
                  className="img-fluid"
                  alt={product?.alt_text}
                  width={300}
                  height={250}
                />
                <div className="btn-hover text-center">
                  <button className="btn btn-primary me-1">
                    <i className="fa fa-plus" />
                  </button>
                  <button className="btn btn-primary cart-btn">
                    <i className="fa fa-shopping-cart" />
                  </button>
                </div>
              </div>
              <div className="product-detail text-center pt-3">
                <h6>
                  <Link href={`product/${product?.id}`}>
                    <strong className="text-capitalize">
                      {product?.names}
                    </strong>
                  </Link>
                </h6>
                <h6 className="mb-0">
                  <del className="me-2">$25</del> <mark>$18</mark>
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductMap;
