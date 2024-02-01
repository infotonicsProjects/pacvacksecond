import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ListDropable from "./Planed";
import ModalAddTask from "./ModalAddTask";
const column = ["Planned", "Progress", "Done"];
const Columns = ({ col, i, key, setAddTask }) => {
  return (
    <Droppable droppableId={col.id} key={key}>
      {(provided) => (
        <div
          className={
            i === 0
              ? "col task-planned"
              : i === 1
                ? "col task-progress"
                : "col task-complete"
          }
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div
            className={
              i === 0
                ? "dd card fieldset border border-primary mb-5"
                : i === 1
                  ? "dd card fieldset border border-secondary mb-5"
                  : "dd card fieldset border border-success mb-5"
            }
          >
            <span className="fieldset-tile text-primary bg-body">
              {column[i]}:
            </span>
            <ol className="dd-list list-unstyled mb-3">
              <ListDropable items={col} key={col?.id} provided={provided} />
              {provided.placeholder}
            </ol>
            <button
              className="btn rounded btn-white w-100 mt-auto"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#new_task"
              onClick={() => setAddTask(true)}
            >
              <i className="fa fa-plus" /> Add task
            </button>
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Columns;
