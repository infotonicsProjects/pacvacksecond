"use client";
import Image from "next/image";
import { useState } from "react";
import { urlImage } from "../../../Environment";
import { PostData } from "../../../utlis/ClientApi";
import { ToastColor } from "../../../utlis/Toast";

const Card = ({ item }) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const [loading, setLoading] = useState(false);
  const handleAddtoCart = async (e) => {
    e.preventDefault();
    const qty = e.target[0].value;
    const product_id = item.id;
    const data = {
      qty,
      product_id,
    };
    const response = await PostData(
      "shopping_cart_table",
      setLoading,
      signal,
      data,
    );
    if (response) {
      ToastColor("Successfully Added");
    }
  };
  if (item.images && item?.images[0] === "[") {
    const imagesData = JSON.parse(item?.images);
    var image = imagesData[0];
  } else if (item.images) {
    var image =
      item?.images.slice(0, 4) === "http"
        ? item.images
        : urlImage + "/" + item?.images?.slice(7);
  } else if (item.atributes) {
    var image;
    const attribute = JSON.parse(item.atributes);
    Object.entries(attribute).forEach(([key, value]) => {
      image = value.image[0];
    });
  }
  return (
    <div className="" style={{ width: "350px" }}>
      <div className="">
        <img
          src={image}
          alt=""
          height={500}
          width={350}
          style={{ width: "380px", height: "500px" }}
        />
      </div>
      <form onSubmit={handleAddtoCart}>
        <h4 className="mt-2">{item?.names}</h4>
        <p className="text-gray fs-6 fw-light mb-2">{item?.desc}</p>
        <p className="fs-6">Rs {item?.price}</p>
        <div>
          <p className="text-grey mb-1 fw-light">Quantity</p>
          <select defaultValue={50} className="form-control mb-3">
            <option>50</option>
            <option>100</option>
            <option>300</option>
            <option>400</option>
            <option>500</option>
            <option>1000</option>
            <option>2000</option>
          </select>
          {loading ? (
            <button className="btn btn-lg btn-dark rounded-pill w-100" disabled>
              Adding
            </button>
          ) : (
            <button
              className="btn btn-lg btn-dark rounded-pill w-100"
              type="submit"
            >
              Add to cart
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default Card;
