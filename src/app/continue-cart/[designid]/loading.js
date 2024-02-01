import { Skeleton } from "@mui/material";
import React from "react";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default function loading() {
  return (
    <div
      className="d-flex flex-wrap p-5 justify-content-center"
      style={{ gap: "20px" }}
    >
      {arr?.map((item) => (
        <Skeleton
          variant="rectangular"
          width={350}
          height={500}
          key={item}
          animation={"wave"}
        />
      ))}
    </div>
  );
}
