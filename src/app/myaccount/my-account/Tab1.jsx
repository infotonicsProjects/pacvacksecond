"use client";
import styled from "@emotion/styled";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastError } from "../../../utlis/Toast";
import { PutData } from "../../../utlis/ClientApi";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
});
const Tab1 = ({ user }) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const [editPassword, setEditPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [minium8, set8Minimun] = useState(true);
  const [minimumsmall, setMinimumSmall] = useState(true);
  const [minimumCapital, setMinimumCapital] = useState(true);
  const [minimumnumber, setMinimumNumber] = useState(true);

  const hanldePasswordChange = async (e) => {
    e.preventDefault();
    if (e.target[0].value === e.target[2].value) {
      const data = {
        email: e.target[0].value,
      };
      const response = await PutData(
        `user/${user?.id}`,
        setLoading,
        signal,
        data,
      );
    } else {
      ToastError("Enter a same Email id");
    }
  };
  const handlePassword = (e) => {
    if (e.target.value.length >= 8) {
      set8Minimun(false);
    } else {
      set8Minimun(true);
    }
    if (e.target.value.search(/[a-z]/) >= 0) {
      setMinimumSmall(false);
    } else {
      setMinimumSmall(true);
    }
    if (e.target.value.search(/[A-Z]/) >= 0) {
      setMinimumCapital(false);
    } else {
      setMinimumCapital(true);
    }
    if (e.target.value.search(/[0-9]/) >= 0) {
      setMinimumNumber(false);
    } else {
      setMinimumNumber(true);
    }
  };
  useEffect(() => {
    return () => controller.abort();
  }, []);
  const ButtonDisble = () => {
    return (
      <>
        {!minium8 && !minimumsmall && !minimumCapital && !minimumnumber ? (
          <button
            className="btn btn- btn-dark text-grey px-5 btn-lg rounded-pill"
            type="submit"
          >
            Save
          </button>
        ) : (
          <button
            className="btn btn- btn-dark text-grey px-5 btn-lg rounded-pill"
            disabled
          >
            Save
          </button>
        )}
      </>
    );
  };
  return (
    <Box>
      <Box>
        <Typography className="fs-5 fw-bold mt-4">Password</Typography>
        <Box className="border-bottom pb-3" style={{ width: "70%" }}>
          {!editPassword ? (
            <Box className="me-5">
              <Box className="mt-3  pb-5 me-5">
                <Typography className="d-inline-block">Password</Typography>
                <button
                  className="btn btn-link text-dark px-5 btn-lg rounded-pill float-end me-5"
                  onClick={() => {
                    setEditPassword(true);
                  }}
                >
                  Edit
                </button>
              </Box>
            </Box>
          ) : (
            <form onSubmit={hanldePasswordChange}>
              <Box>
                <CssTextField
                  id="custom-css-outlined-input"
                  label="New Password"
                  variant="outlined"
                  className="w-100 mb-3 mt-3"
                  type="password"
                  onChange={handlePassword}
                />
                <Box className="text-secondary ps-3">
                  <Typography className={minium8 ? "" : "text-dark fw-bold"}>
                    8 characters minimum{" "}
                  </Typography>
                  <Typography
                    className={minimumsmall ? "" : "text-dark fw-bold"}
                  >
                    1 lowercase letter
                  </Typography>
                  <Typography
                    className={minimumCapital ? "" : "text-dark fw-bold"}
                  >
                    {" "}
                    1 uppercase letter
                  </Typography>
                  <Typography
                    className={minimumnumber ? "" : "text-dark fw-bold"}
                  >
                    {" "}
                    1 number
                  </Typography>
                </Box>
                <CssTextField
                  id="custom-css-outlined-input"
                  label="Confirm Password"
                  variant="outlined"
                  className="w-100 mt-3"
                  type="password"
                />
              </Box>
              <Stack direction="row" spacing={2} className="mt-4">
                {loading ? (
                  <button
                    className="btn btn-ter btn-outline-secondary text-grey px-5 btn-lg rounded-pill"
                    disabled
                  >
                    Saving..
                  </button>
                ) : (
                  <ButtonDisble />
                )}
                <button
                  className="btn btn-link text-dark px-5 btn-lg rounded-pill"
                  type="button"
                  onClick={() => setEditPassword(false)}
                >
                  Cancel
                </button>
              </Stack>
            </form>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Tab1;
