"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetData } from "../../../utlis/ClientApi";
import { useSelector } from "react-redux";
import { urlImage } from "../../../Environment";
import Image from "next/image";

const Main = () => {
  const user = useSelector((state) => state.userData);

  const [orders, setOrders] = useState("");
  const [products, setProducts] = useState("");
  const [productsImages, setProductsImages] = useState("");
  const [ordersImages, setOrdersImages] = useState("");
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  const getOrdersData = async () => {
    const res = await GetData("showByUserId/" + user?.id, setLoading, signal);

    if (res) {
      setOrders(res);
      setOrdersImages(urlImage + res[0]?.images.slice(6));
    }
  };

  useEffect(() => {
    getOrdersData();
  }, []);

  useEffect(() => {
    return () => controller.abort();
  }, []);

  return (
    <React.Fragment>
      <div className="m-4 ps-5 ms-5">
        <div className="m-5 mb-0">
          <h1 className="fs-3"> Dasboard</h1>
        </div>

        {/* <div className="w-100 border m-5 me-3 mt-3 p-2">
            <div className="p-4">
              <h1 className="fs-3">My Product</h1>
            </div>
            {!products ? (
              <div
                className="d-flex justify-content-center align-items-center flex-column m-5 mt-3 ms-5  m-auto bg-body-tertiary mb-4 me-4 p-5"
                style={{ height: "350px" }}
              >
                <div
                  className="p-5 d-flex justify-content-center align-items-center flex-column pb-2"
                  style={{ gap: "20px" }}
                >
                  <h1 className="fs-4">You Don't have any projects yet.</h1>
                </div>
                <div>
                  <p>
                    Ready to create ? So are we. Here Some popular starting
                    points:
                  </p>
                </div>
                <div>
                  <button className="btn btn-link text-dark">
                    <Link href="/bags" className="text-dark">
                      Bussiness cards
                    </Link>
                  </button>
                  <button className="btn btn-link text-dark">
                    <Link href="/bags" className="text-dark">
                      Marketing Materials
                    </Link>
                  </button>
                  <button className="btn btn-link text-dark">
                    <Link href="/des" className="text-dark">
                      Invitation & Stationary
                    </Link>
                  </button>
                </div>
              </div>

            ) : (
              <div className="container p-4 pb-4">
                <div className="row justify-content-start mt-4 text-left">
                  {products?.map((product) => (
                    <div key={product?.id} className="col-2 me-2 d-flex ps-2 py-2 my-2 bg-light">

                      <Image src={productsImages} alt="products-images" height={100} width={100} className="pe-2 rounded" />

                      <div className="d-flex flex-column justify-content-center">
                        <h6>{product?.price}</h6>
                        <p>{product?.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div> */}
        <div className="w-100 border m-5 ms-5 mt-3">
          <div className="p-4">
            <h1 className="fs-3">My Orders</h1>
          </div>

          {!orders ? (
            <div
              className="d-flex justify-content-center align-items-center flex-column m-5 mt-3 ms-5 ps-5 bg-body-tertiary pb-5 mb-5 me-4 p-4 pt-5"
              style={{ height: "350px" }}
            >
              <div
                className="p-5 d-flex justify-content-center align-items-center flex-column pb-2"
                style={{ gap: "10px" }}
              >
                <h1 className="fs-4">You Don't have any orders yet.</h1>
              </div>

              <div>
                <p>
                  When you&apos;ve placed your first order, you&apos;ll see it
                  here.
                </p>
              </div>

              <div>
                <button className="btn btn-link text-dark">
                  <Link href="/des" className="text-dark">
                    Continue Shopping
                  </Link>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 pb-4">
              <div className="mt-4 text-left">
                {orders?.map((order) => (
                  <div
                    key={order?.id}
                    className="d-flex pr-4 px-2 py-2 my-2 bg-light"
                  >
                    <img
                      src={ordersImages}
                      alt="orders-image"
                      height={100}
                      width={100}
                      className="rounded"
                    />

                    <div className="ps-2 d-flex flex-column justify-content-center">
                      <h6>{order?.t_amount}</h6>
                      <p>{order?.order_status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
