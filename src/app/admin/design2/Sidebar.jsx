import React from "react";

const Sidebar = ({
  setSelectedEdit,
  selectedEdit,
  selectedIdText,
  selectedId,
}) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 text-black position-fixed p-3 ps-2 responsive-siderbar"
      style={{
        width: "4.5rem",
        background: "#eeee",
        height: "100%",
        top: selectedIdText || selectedId ? "119px" : "66px",
        fontSize: "0.7rem",
      }}
    >
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center align-items-center padding-li-x-1 button-flex responsive-mobile-sidebar">
        <li>
          <button
            onClick={() =>
              selectedEdit === "text"
                ? setSelectedEdit(null)
                : setSelectedEdit("text")
            }
            className="nav-link py-3 "
          >
            <div
              className={
                selectedEdit === "text"
                  ? "rounded-circle text-svg text-svg-black"
                  : "rounded-circle text-svg"
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g transform="translate(3,3)">
                  <path
                    d="M1 3.5V2.87667C0.999566 2.3791 1.19333 1.90176 1.53861 1.54976C1.8839 1.19777 2.35239 1 2.84091 1H16.3409C16.8294 1 17.2979 1.19777 17.6432 1.54976C17.9885 1.90176 18.1823 2.3791 18.1818 2.87667V3.50167"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9.59073 1V19.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5.90918 19.75H13.2728"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            Text
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              selectedEdit === "images"
                ? setSelectedEdit(null)
                : setSelectedEdit("images")
            }
            className="nav-link py-3"
          >
            <div
              className={
                selectedEdit === "images"
                  ? "rounded-circle text-svg text-svg-black"
                  : "rounded-circle text-svg"
              }
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M13 3V13H3V3H13ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM9.42667 7.90667L7.42667 10.4867L6 8.76L4 11.3333H12L9.42667 7.90667Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Images
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              selectedEdit === "icon"
                ? setSelectedEdit(null)
                : setSelectedEdit("icon")
            }
            className="nav-link py-3"
          >
            <div
              className={
                selectedEdit === "icon"
                  ? "rounded-circle text-svg text-svg-black"
                  : "rounded-circle text-svg"
              }
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M 6 10.8 H 2.4 C 1.7372 10.8 1.2 10.2628 1.2 9.6 V 2.4 C 1.2 1.7372 1.7372 1.2 2.4 1.2 H 9.6 C 10.2628 1.2 10.8 1.7372 10.8 2.4 V 6 M 6 10.8 A 4.8 4.8 90 1 0 15.6 10.8 A 4.8 4.8 90 1 0 6 10.8"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
            Icons
          </button>
        </li>
        <li className="mobile-display-none">
          <button
            onClick={() =>
              selectedEdit === "qrcode"
                ? setSelectedEdit(null)
                : setSelectedEdit("qrcode")
            }
            className="nav-link py-3 "
          >
            <div
              className={
                selectedEdit === "qrcode"
                  ? "rounded-circle text-svg text-svg-black"
                  : "rounded-circle text-svg"
              }
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 7.33333H7.33333V2H2V7.33333ZM3.33333 3.33333H6V6H3.33333V3.33333Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M2 13.9993H7.33333V8.66602H2V13.9993ZM3.33333 9.99935H6V12.666H3.33333V9.99935Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M8.66699 2V7.33333H14.0003V2H8.66699ZM12.667 6H10.0003V3.33333H12.667V6Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14.0003 12.666H12.667V13.9993H14.0003V12.666Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.0003 8.66602H8.66699V9.99935H10.0003V8.66602Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.3333 10H10V11.3333H11.3333V10Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.0003 11.334H8.66699V12.6673H10.0003V11.334Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.3333 12.666H10V13.9993H11.3333V12.666Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.6663 11.334H11.333V12.6673H12.6663V11.334Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.6663 8.66602H11.333V9.99935H12.6663V8.66602Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14.0003 10H12.667V11.3333H14.0003V10Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Qr Code
          </button>
        </li>

        <li className="position-relative start-0">
          {selectedEdit ? (
            <button
              onClick={() =>
                selectedEdit === "background"
                  ? setSelectedEdit(null)
                  : setSelectedEdit("background")
              }
              className={
                selectedEdit === "background"
                  ? "nav-link py-3 bg-dark-subtle px-0 rounded btn ms-n1 font-size"
                  : "nav-link py-3 ms-n1 btn px-0 btn font-size"
              }
              style={{ color: "white !important" }}
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ width: "20px", height: "20px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.45442 0H2C0.895431 0 0 0.895431 0 2V4.45442L4.45442 0ZM0 7V10C0 10.1412 0.0146347
      10.279 0.0424703 10.4119L10.4119 0.0424702C10.279 0.0146347 10.1412 0 10 0H7L0 7ZM12
      2V4.45442L4.45442 12H2C1.70653 12 1.42782 11.9368 1.17675 11.8232L11.8232 1.17675C11.9368
      1.42782 12 1.70653 12 2ZM10 12H7L12 7V10C12 11.1046 11.1046 12 10 12Z"
                  fill="currentColor"
                />
              </svg>
              Background
            </button>
          ) : (
            <button
              onClick={() =>
                selectedEdit === "background"
                  ? setSelectedEdit(null)
                  : setSelectedEdit("background")
              }
              className={
                selectedEdit === "background"
                  ? "nav-link py-3 bg-dark px-2 rounded btn"
                  : "nav-link py-3 btn px-0 rounded btn ms-n1 font-size"
              }
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ width: "20px", height: "20px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.45442 0H2C0.895431 0 0 0.895431 0 2V4.45442L4.45442 0ZM0 7V10C0 10.1412 0.0146347
      10.279 0.0424703 10.4119L10.4119 0.0424702C10.279 0.0146347 10.1412 0 10 0H7L0 7ZM12
      2V4.45442L4.45442 12H2C1.70653 12 1.42782 11.9368 1.17675 11.8232L11.8232 1.17675C11.9368
      1.42782 12 1.70653 12 2ZM10 12H7L12 7V10C12 11.1046 11.1046 12 10 12Z"
                  fill="currentColor"
                />
              </svg>
              Background
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
