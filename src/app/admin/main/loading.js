import { Box, Skeleton } from "@mui/material";
import React from "react";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const loading = () => {
  return (
    <Box
      display="flex"
      gap="10px"
      flexWrap={"wrap"}
      justifyContent="space-around"
    >
      {arr?.map((item) => (
        <Skeleton
          variant="rounded"
          width={250}
          height={150}
          animation="wave"
          key={item}
        />
      ))}
    </Box>
  );
};

export default loading;
