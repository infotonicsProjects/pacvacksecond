"use client";
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "./Card";

const ListDropable = ({ items }) => {
  return (
    <>
      {items?.list?.map((item, index) => (
        <Draggable key={item} draggableId={item} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              snapshot={snapshot}
            >
              <Card item={item} />
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default ListDropable;
