"use client";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

const ContentForLogin = () => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      {pathname === "/auth/signup" ? (
        <React.Fragment></React.Fragment>
      ) : (
        <Typography className="fs-5">
          Sign in to{" "}
          <span className="fw-bold">
            PacVackPrint, PacVackCreate, <span className="fw-light">or</span>{" "}
            99designs by PackVack{" "}
          </span>
          and we&apos;ll sync your accounts. If you have multiple accounts,
          including Packvack, sign in with your Packvack account.
        </Typography>
      )}
    </React.Fragment>
  );
};

export default ContentForLogin;
