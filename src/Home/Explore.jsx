import React from "react";
import "./explore.css";
import { urlImage } from "../Environment";
import Link from "next/link";
const Explore = ({ data }) => {
  return (
    <div className="main-conatiner-explore pt-2 mx-2 pb-4">
      <div className="explore-heading pb-4">
        <h1 className="fs-5 mb-4">Explore New Products</h1>
      </div>
      <div className="content-explore">
        <ul className="img-list">
          {data?.slice(0, 10).map((item) => (
            <li key={item?.id}>
              <Link href={`/picks/${item?.categ_id}`}>
                <div className="rahul">
                  <img
                    src={`${urlImage}/${item.img_url.slice(7)}`}
                    alt={item.alt_text}
                    id={item.id}
                  />
                </div>
                <p className="text-dark">{item.alt_text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
