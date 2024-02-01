import React from "react";

const BottomSection = () => {
  return (
    <div className="col-lg-12">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <div className="mr-3 d-flex align-items-center justify-content-center pr-3">
            <input className="mb-0" type="range" />
            <p className="mb-0">98%</p>
          </div>
          <button className="nav-link align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            View
          </button>
          <button className="nav-link align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            Undo
          </button>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default BottomSection;
