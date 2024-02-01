import React from "react";
const SelectedBackground = ({ setBackgroungImg, backgroundImg }) => {
  const icons = [
    {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      url: "img/bag-paper.webp",
      urlback: "img/bag-paper.webp",
      urlsideleft: "img/bag-white-side.jpeg",
      urlsideright: "img/bag-side-3.jpg",
      id: 1,
    },
    {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      url: "img/bag-paper-1.jpg",
      urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      urlsideleft: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      urlsideright: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      id: 2,
    },
    {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      url: "img/bag-paper-2.jpg",
      urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      urlsideleft: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      urlsideright: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      id: 3,
    },
    {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      url: "img/bag-paper-4.png",
      urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      urlsideleft: "img/bag-side-2.jpg",
      urlsideright: "img/bag-side-2.jpg",
      id: 4,
    },
    {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      url: "img/bag-paper-3.jpg",
      urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      urlsideleft: "img/bag-side-4.jpg",
      urlsideright: "img/bag-side-4.jpg",
      id: 4,
    },
    {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      url: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      urlback: "img/logo/vertical-shot-paper-bag-isolated-white-room.jpg",
      urlsideleft: "img/bag-side-1.jpg",
      urlsideright: "img/bag-side-1.jpg",
      id: 3,
    },
  ];
  const handleClick = (id) => {
    setBackgroungImg(icons[id]);
  };
  return (
    <div className="shadow ml-3 h-50 rounded-4 mt-n5">
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-4">Background</h1>
        </div>
        <div
          className="tabs mb-4 d-flex justify-content-between w-35"
          style={{ width: "45%" }}
        >
          <p className="fs-5">Choose Background</p>
          {/* <p className='fs-5'>Discover</p> */}
        </div>
        <div className="d-flex flex-wrap p-2">
          {icons?.map((image, i) => (
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
