import React from "react";

const ModalAddTask = ({ addTask, setAddTask }) => {
  return (
    <div
      className={addTask ? "modal fade show" : "modal fade show"}
      id="new_task"
      style={{ display: addTask ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Task</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setAddTask(false)}
            />
          </div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-12">
                <label className="form-label">Task Title</label>
                <input
                  className="form-control"
                  type="text"
                  required=""
                  autoComplete="off"
                />
              </div>
              <div className="col-12">
                <label className="form-label">Task Detail</label>
                <textarea
                  className="form-control"
                  type="text"
                  required=""
                  autoComplete="off"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Select Date/Time</label>
                <div className="input-group">
                  <input type="date" className="form-control" />
                  <input type="time" className="form-control" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Remindon"
                  />
                  <label className="form-check-label" htmlFor="Remindon">
                    Remind on
                  </label>
                </div>
              </div>
              <div className="col-12">
                <label className="form-label">Task tag</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected="">Open this select menu</option>
                  <option value={1}>Design</option>
                  <option value={2}>BugFix</option>
                  <option value={3}>Help</option>
                  <option value={3}>R&amp;D</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTask;
