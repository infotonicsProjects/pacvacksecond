import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="m-5 ml-10 " style={{ width: "60%" }}>
      <Box>
        <h1 className="fs-3 ms-3">My Digital Marketing </h1>
      </Box>
      <Box className=" ms-3 mt-5 d-flex justify-content-center align-items-center m-4 bg-body-tertiary ">
        <Box>
          <Box className="d-flex justify-content-center align-items-center p-5 flex-column">
            <Image
              src="../img/mydigital.svg"
              alt="img"
              width={150}
              height={150}
            />
            <h1 className="fs-5 mt-3 mb-1">
              You don &asop;t have any digital projects yet
            </h1>
            <Typography className="text-grey">
              Once you start one, it will appear here
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="ms-3">
        <h1 className="fs-5">Looking for your subscriptions?</h1>
        <Link href="#" className="text-dark pe-">
          View My subscriptions
          <Image
            src="../img/rightarrow.svg"
            alt="right"
            width={20}
            height={20}
          />
        </Link>
      </Box>
    </div>
  );
};

export default Main;
