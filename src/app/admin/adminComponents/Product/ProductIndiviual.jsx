import { urlImage } from "../../../../Environment";
import { getUserData } from "../../../../utlis/Home";
import React from "react";
import dynamic from "next/dynamic";
const Tabs = dynamic(() => import("./Tabs"));
const ProductIndivual = async ({ params, searchParams }) => {
  const data = await getUserData(`products_table/${params?.productid}`);

  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row row-deck">
                  <div className="col-lg-4 col-md-12">
                    <img
                      src={urlImage + data?.data?.img_url?.slice(6)}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <div>
                      <h4 className="mt-4 mt-lg-0">
                        <strong>{data?.data?.names}</strong>
                      </h4>
                      <div className="my-3">
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <span className="text-muted ms-3">
                          (49 customer review)
                        </span>
                      </div>
                      <p className="mb-0 text-primary fs-4 fw-bold">
                        Rs {data?.data?.price}
                        <span className="fs-6 text-muted fw-light ms-3 me-2">
                          <del>Rs </del>
                        </span>{" "}
                        {/*<span className="fs-6 fw-normal">28% off</span>*/}
                      </p>
                      <p className="my-4">{data?.data?.desc}</p>
                      <div className="d-flex">
                        <div>
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder={1}
                              min={1}
                              max={5}
                            />
                            <span className="input-group-text">
                              <i className="fa fa-sort" />
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-primary mx-2">
                          <i className="fa fa-shopping-cart me-1" /> Add to Cart
                        </button>
                        <button className="btn btn-primary">
                          <i className="fa fa-heart me-1" /> Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs data={data} searchParams={searchParams} params={params} />
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
  );
};

export default ProductIndivual;
