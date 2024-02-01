import React from "react";
import "./twoimage.css";
import Link from "next/link";
const TwoImage = () => {
  return (
    <div className="d-flex pb-5 main-two-image">
      <div className="first-div" id="two-image">
        <div className="wrapper-content" id="wrapper-content">
          <div className="content-div content-div2 content-div-position">
            <h1 className="text-dark">Get wedding invites you love</h1>
            <p className="text-dark">
              That means they start at under $1. Bring your wedding vision to
              life.
            </p>
            <div className="btn-div text-dark">
              <Link href="/bags">
                <button className="btn-buss bg-black">Designer Bags</button>
              </Link>
            </div>
          </div>
        </div>
        <img src="/img/twoimage.webp" className="two-image-width" />
      </div>
      <div className="" id="two-image">
        <div className="wrapper-content">
          <div className="content-div content-div2 text-dark content-div-position">
            <h1 className="text-dark">Get the logo you always wanted</h1>
            <p className="text-dark">
              Start with our free logo maker or hire one of our professional
              designers.
            </p>
            <div className="btn-div">
              <Link href="/bags">
                <button className="btn-buss bg-black">Designer Bags</button>
              </Link>
            </div>
          </div>
        </div>
        <img src="/img/twoimage1.webp" className="two-image-width" />
      </div>
    </div>
  );
};

export default TwoImage;
