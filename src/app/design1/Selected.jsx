import React from "react";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
const Selected = ({ setText, text }) => {
  const UpdateText = (e, i, item) => {
    const prevState = text;
    prevState[i] = {
      ...item,
      text: e.target.value,
    };
    setText([...prevState]);
  };
  const handleDelete = (item) => {
    setText(text.filter((a) => a.id !== item.id));
  };
  return (
    <div
      className="shadow ml-3 h-20 rounded-4 mt-n5 overflow-auto"
      style={{ height: "400px" }}
    >
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-4">Text</h1>
        </div>
        <div className="mb-2">
          <p className="text-black-50">
            Edit your text below&lsquo; or click on the field you&apos;d like to
            edit directly on your design.
          </p>
        </div>
        <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
          <button
            className="btn btn-danger rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 210,
                  y: 230,
                  width: 100,
                  height: 25,
                  text: "Youtube",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img/logos/youtube.png",
                },
              ])
            }
          >
            Youtube
          </button>
          <button
            className="btn btn-primary rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 210,
                  y: 230,
                  width: 100,
                  height: 25,
                  text: "Facebook",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img/logos/facebook.png",
                },
              ])
            }
          >
            FaceBook
          </button>
          <button
            className="btn btn-pink rounded-pill py-2"
            style={{ background: "#E83271" }}
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 210,
                  y: 230,
                  width: 100,
                  height: 25,
                  text: "Instagram",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img/logos/instagram.png",
                },
              ])
            }
          >
            Insta
          </button>
          <button
            className="btn btn-secondary rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 210,
                  y: 230,
                  width: 100,
                  height: 25,
                  text: "Url",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img/logos/url.png",
                },
              ])
            }
          >
            Url
          </button>
          <button
            className="btn btn-light rounded-pill py-2"
            onClick={() =>
              setText((prev) => [
                ...prev,
                {
                  x: 210,
                  y: 230,
                  width: 100,
                  height: 25,
                  text: "Address",
                  id: uuidv4(),
                  red: 255,
                  green: 255,
                  blue: 0,
                  fontSize: 20,
                  icon: "img",
                },
              ])
            }
          >
            Address
          </button>
        </div>
      </div>
      <div className="border pt-4">
        <h1 className="mx-4 fs-4 px-4"> Change the Text Feild</h1>
        <div
          className="input-group d-flex flex-wrap flex-column p-4"
          style={{ gap: "20px" }}
        >
          {text?.map((item, i) => (
            <div className=" px-2 mx-3  d-flex align-items-center justify-content-center fs-3">
              <input
                type="text"
                placeholder="Type Yotube account"
                id="youtube-input"
                className="form-control mr-3"
                value={item.text}
                onChange={(e) => UpdateText(e, i, item)}
              />
              <span
                onClick={() => handleDelete(item)}
                style={{ cursor: "pointer" }}
                className="d-flex align-items-center justify-content-center"
              >
                <MdDelete />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selected;
