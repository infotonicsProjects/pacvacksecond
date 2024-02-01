import React from "react";

const SelectedQr = () => {
  return (
    <div className="shadow ml-3 h-50 rounded-4 mt-n5">
      <div className="p-4">
        <div className="pb-2">
          <h1 className="fs-4">Qr Code</h1>
        </div>
        <div className="mb-2 border-bottom">
          <p className="mb-0 pb-0 text-black-50 fs-6">
            Enter a valid URL and Click the add button.
          </p>
          <div className="input-group input-group-lg mt-3">
            <input
              type="text"
              className="form-control rounded"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Enter a URL to Generate Qr Code"
            />
          </div>
        </div>
        <div className="w-100 mt-5">
          <button className="btn btn-light border rounded-pill w-100 py-2">
            Add Qr Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedQr;
