import React from "react";
import SelectedLogos from "./SelectedLogos";

const RigthSection = ({
  backgroundImg,
  design,
  imageside,
  setImageSide,
  setBackgroungImg,
  selectShapeText,
  selectShape,
  images,
  setImages,
  setSelectedEdit,
  logo,
  colors,
  setLogo,
  fonts,
}) => {
  const previd = backgroundImg.id;
  const handleChangeBackGround = () => {
    setImageSide({ url: backgroundImg.url, id: previd, back: 0 });
    setBackgroungImg({
      ...backgroundImg,
      id: previd,
      url: backgroundImg.url,
      urlback: backgroundImg.urlback,
      back: 0,
    });
    selectShapeText(null);
    selectShape(null);
  };
  return (
    <React.Fragment>
      <div className="right-section col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-0 mt-3 bg-white mobile-responsive-right-section">
        <div className="position-fixed z-3 top-50"></div>
        <div
          onClick={handleChangeBackGround}
          className={
            imageside.back === 0
              ? "border border-dark position-fixed d-flex justify-content-center align-items-center flex-column  rounded overflow-hidden right-section mobile-border-none bg-white bg-grey-dekstop"
              : "border position-fixed d-flex justify-content-center align-items-center flex-column  rounded overflow-hidden right-section mobile-border-none-select"
          }
          style={{
            width: "100px",
            height: "150px",
            background: "#EFEFEF",
            top: "160px",
            cursor: "pointer",
            right: "15px",
          }}
        >
          <div className="">
            <div className="bg-white p-2 m-3 mx-4 text-center display-none ">
              <img
                src={imageside.back === 0 ? design : backgroundImg.url}
                alt="bag"
                width={40}
                height={40}
                className=""
              />
            </div>
            <div
              className=" mt-2"
              style={{
                width: "118px",
                textAlign: "center",
                padding: "0.8rem 0",
              }}
            >
              Front
            </div>
          </div>
        </div>
        <Back
          backgroundImg={backgroundImg}
          imageside={imageside}
          design={design}
          setImageSide={setImageSide}
          setBackgroungImg={setBackgroungImg}
          selectShapeText={selectShapeText}
          selectShape={selectShape}
        />
      </div>
      <SelectedLogos
        images={images}
        setImages={setImages}
        logo={logo}
        colors={colors}
        setLogo={setLogo}
        fonts={fonts}
      />
    </React.Fragment>
  );
};

export default RigthSection;
const Back = ({
  backgroundImg,
  design,
  imageside,
  setImageSide,
  setBackgroungImg,
  selectShapeText,
  selectShape,
}) => {
  const handleChangeBackGround = () => {
    setImageSide({ url: backgroundImg.urlback, id: "jhbjg10254645", back: 1 });
    setBackgroungImg({
      ...backgroundImg,
      url: backgroundImg.urlback,
      urlback: backgroundImg.urlback,
      back: 1,
    });
    selectShapeText(null);
    selectShape(null);
  };
  return (
    <div
      onClick={handleChangeBackGround}
      className={
        imageside.back === 1
          ? "border border-dark position-fixed d-flex justify-content-center align-items-center flex-column  rounded overflow-hidden right-section-back mobile-border-none bg-grey-dekstop bg-white"
          : "border position-fixed d-flex justify-content-center align-items-center flex-column  rounded overflow-hidden right-section-back mobile-border-none-select"
      }
      style={{
        width: "100px",
        height: "150px",
        background: "#EFEFEF",
        top: "350px",
        right: "15px",
        cursor: "pointer",
      }}
    >
      <div className="">
        <div className="bg-white p-2 m-3 mx-4 text-center display-none p">
          <img
            src={imageside.back === 1 ? design : backgroundImg.urlback}
            alt="bag"
            width={40}
            height={40}
            className=""
          />
        </div>
        <div
          className=" mt-2"
          style={{
            width: "118px",
            textAlign: "center",
            padding: "0.8rem 0",
          }}
        >
          Back
        </div>
      </div>
    </div>
  );
};
