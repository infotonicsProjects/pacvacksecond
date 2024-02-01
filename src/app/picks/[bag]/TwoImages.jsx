import React from "react";
import "../../../Home/twoimage.css";
const TwoImage = ({ page }) => {

  return (
    <div className="d-flex p-4 " style={{ background: "#EDE3CF" }}>

      <div className="ps-4" >
        <h1 className="text-dark fs-1 text-capitalize " style={style.heading}>
          Custom {page?.title} .
        </h1>
        <p className="text-dark fs-6 w-50 fw-light">
          Introducing our new selection of popular products at prices you’ll
          love.
          <p>Design tote bags that get your brand seen well after an event. Personalized tote bags are a go-to favorite for event giveaways and promotional packs. They're a great alternative to plastic bags – ideal for grocery shopping, running errands and more.</p>
        </p>
      </div>

      {/* <div className="bg-first-image"></div> */}

      {/* <div className="" id="two-image">
        <img src="/img/twoimage1.webp" className="w-100" />
      </div> */}
    </div>
  );
};

export default TwoImage;

const style = {
  heading: {
    fontSize: "3rem !important",
  },
};
