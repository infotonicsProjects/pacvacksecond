import React from "react";

export default function Cardsec({ item }) {
  return (
    <div
      className="t-all-product-info"
      style={{
        width: "335px",
        maxHeight: "500px",
        paddingBottom: "20px",
        margin: "3px 15px 50px",
      }}
    >
      <div className="t-product-img">
        <a href="#">
          <img
            style={{ height: "350px !important" }}
            src={
              item % 2 === 0 ? "img/sign-board1.jpeg" : "img/sign-board2.jpeg"
            }
            alt=""
          />
          <img
            style={{ height: "350px !important" }}
            className="second-img"
            src={
              item % 2 === 0 ? "img/sign-board1.jpeg" : "img/sign-board2.jpeg"
            }
            alt=""
          />
        </a>
      </div>
      <div className="tab-p-info">
        <a
          style={{ fontSize: "18px", fontWeight: "500" }}
          href="/Pacvackprint-picks"
          className="swan-link swan-link-skin-cta swan-ml-5 swan-mt-1"
        >
          {item.head}
        </a>
      </div>
      <div className="tab-p-info">
        <a
          style={{ fontSize: "14px", fontWeight: "500" }}
          href="/Pacvackprint-picks"
          className="swan-link swan-link-skin-cta swan-ml-5 swan-mt-1"
        >
          {item.subhead}
        </a>
      </div>
    </div>
  );
}
