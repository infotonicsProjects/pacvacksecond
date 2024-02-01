import React from "react";

const HeaderLanguage = () => {
  return (
    <li className="d-none d-xl-inline-block">
      <div className="dropdown morphing scale-left Language">
        <a
          className="nav-link dropdown-toggle after-none"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <svg
            viewBox="0 0 16 16"
            width="18px"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-secondary"
              d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"
            />
            <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
          </svg>
        </a>
        <div
          className="dropdown-menu rounded-4 shadow border-0 p-0"
          data-bs-popper="none"
        >
          <div className="card">
            <div
              className="list-group list-group-custom"
              style={{ width: 200 }}
            >
              <a href="#" className="list-group-item">
                <span className="flag-icon flag-icon-gb me-2" />
                UK English
              </a>
              <a href="#" className="list-group-item">
                <span className="flag-icon flag-icon-us me-2" />
                US English
              </a>
              <a href="#" className="list-group-item">
                <span className="flag-icon flag-icon-de me-2" />
                Germany
              </a>
              <a href="#" className="list-group-item">
                <span className="flag-icon flag-icon-in me-2" />
                Hindi
              </a>
              <a href="#" className="list-group-item">
                <span className="flag-icon flag-icon-sa me-2" />
                Saudi Arabia
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default HeaderLanguage;
