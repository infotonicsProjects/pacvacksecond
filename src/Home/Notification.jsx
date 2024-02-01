"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Notification = () => {
  const currentRoute = usePathname();
  return (
    <React.Fragment>
      {currentRoute === "/mydasboard" ? (
        <React.Fragment></React.Fragment>
      ) : (
        <div className="header_top_area border-top" style={{ height: "55px" }}>
          <div className="container h-100" id="header-top">
            <div className="row align-items-center" style={{ height: "100%" }}>
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                renderArrowPrev={(clickHandler, hasPrev) => {
                  return (
                    <div onClick={clickHandler} style={{ cursor: "pointer" }}>
                      <Image
                        src="/img/left-arrow.svg"
                        alt="left-arrow"
                        height={20}
                        width={20}
                        style={{ height: "20px", width: "20px" }}
                        className={`${hasPrev ? "" : "hidden"}`}
                      />
                    </div>
                  );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                  return (
                    <div
                      className={`${hasNext ? "" : "hidden"}`}
                      style={{ cursor: "pointer" }}
                      onClick={clickHandler}
                    >
                      <img
                        src="/img/rigth-arrow.svg"
                        alt="logo"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                  );
                }}
              >
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <h2 className="fs-6 lh-sm mb-1">
                    Prep for the holidays with up to 20% off business cards and
                    more | Ends Aug. 27 Shop now
                  </h2>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <h2 className="fs-6 lh-sm mb-1">
                    2 for the holidays with up to 20% off business cards and
                    more | Ends Aug. 27 Shop now
                  </h2>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <h2 className="fs-6 lh-sm mb-1">
                    3 for the holidays with up to 20% off business cards and
                    more | Ends Aug. 27 Shop now
                  </h2>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Notification;
