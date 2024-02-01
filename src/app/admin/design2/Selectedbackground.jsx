import React from "react";
const SelectedBackground = ({
  setBackgroungImg,
  backgroundImg,
  setSelectedEdit,
  setBackgroundColors,
  backgroundColors,
}) => {
  // const icons = [
  //   {
  //     x: 50,
  //     y: 50,
  //     width: 550,
  //     height: 700,
  //     url: "img/bg-bag.jpeg",
  //     urlback: "img/bg-bag.jpeg",
  //     urlsideleft: "img/bag-white-side.jpeg",
  //     urlsideright: "img/bag-side-3.jpg",
  //     id: 1,
  //     back: 0,
  //   },
  //   {
  //     x: 50,
  //     y: 50,
  //     width: 550,
  //     height: 700,
  //     url: "img/bag/about-1.jpg",
  //     urlback: "img/bag/about-1c.jpg",
  //     urlsideleft: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     urlsideright: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     id: 2,
  //     back: 0,
  //   },
  //   {
  //     x: 50,
  //     y: 50,
  //     width: 550,
  //     height: 700,
  //     url: "img/bag/about-2.jpg",
  //     urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     urlsideleft: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     urlsideright: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     id: 3,
  //     back: 0,
  //   },
  //   {
  //     x: 50,
  //     y: 50,
  //     width: 550,
  //     height: 700,
  //     url: "img/bag-paper-4.png",
  //     urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     urlsideleft: "img/bag-side-2.jpg",
  //     urlsideright: "img/bag-side-2.jpg",
  //     id: 4,
  //     back: 0,
  //   },
  //   {
  //     x: 50,
  //     y: 50,
  //     width: 550,
  //     height: 700,
  //     url: "img/bag-paper-3.jpg",
  //     urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     urlsideleft: "img/bag-side-4.jpg",
  //     urlsideright: "img/bag-side-4.jpg",
  //     id: 4,
  //     back: 0,
  //   },
  //   {
  //     x: 50,
  //     y: 50,
  //     width: 550,
  //     height: 700,
  //     url: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
  //     urlsideleft: "img/bag-side-1.jpg",
  //     urlsideright: "img/bag-side-1.jpg",
  //     id: 3,
  //     back: 0,
  //   },
  //   {
  //     x: 50,
  //     y: 50,
  //     width: 550,
  //     height: 700,
  //     url: "img/bag/blackbag.png",
  //     urlback: "img/bag/blackbag.png",
  //     urlsideleft: "img/bag-side-1.jpg",
  //     urlsideright: "img/bag-side-1.jpg",
  //     id: 3,
  //     back: 0,
  //   },
  // ];
  const handleClick = (id) => {
    setBackgroungImg(backgroundColors[id]);
  };
  return (
    <div className="shadow ml-3 bg-white rounded-4 mt-n5 responsive-height overflow-auto">
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-5">
            Background{" "}
            <button
              className="btn hide-dekstop position-relative"
              style={{ left: "140px" }}
              onClick={() => setSelectedEdit(null)}
            >
              X
            </button>
          </h1>
        </div>
        <div
          className="tabs mb-4 d-flex justify-content-between "
          style={{ width: "60%" }}
        >
          <p className="fs-6">Choose Background</p>
          {/* <p className='fs-5'>Discover</p> */}
        </div>
        <div className="d-flex flex-wrap p-2">
          {backgroundColors?.map((image, i) => (
            <img
              src={image.url}
              key={i}
              className={
                backgroundImg.url === image.url
                  ? "image-view border m-2 p-2 border-success border-2"
                  : "image-view border m-2 p-2"
              }
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedBackground;
