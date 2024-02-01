"use client";
import React, { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import Columns from "./Columns";
import ModalAddTask from "./ModalAddTask";

const elements = {
  planned: {
    id: "planned",
    list: ["item1", "item2", "item3", "item4"],
  },
  progress: {
    id: "progress",
    list: [],
  },
  done: {
    id: "done",
    list: [],
  },
};

const Kanban = () => {
  const [items, setItems] = useState(elements);

  const onDragEnd = (props) => {
    const source = props?.source;
    const destination = props?.destination;
    const itemId = props?.draggableId;
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = items[source.droppableId];

    const end = items[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setItems((state) => ({
        ...state,
        [newCol.id]: newCol,
      }));

      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      setItems((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };
  const [addTask, setAddTask] = useState(false);
  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-1 g-2 row-deck">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.values(items).map((col, i) => (
              <Columns col={col} key={i} i={i} setAddTask={setAddTask} />
            ))}
          </DragDropContext>
        </div>
        <ModalAddTask addTask={addTask} setAddTask={setAddTask} />
      </div>
    </div>
  );
};

export default Kanban;
