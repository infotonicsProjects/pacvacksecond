"use client";
import styled from "@emotion/styled";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PutData } from "../../../utlis/ClientApi";
import { useSelector } from "react-redux";
import { ToastError } from "../../../utlis/Toast";
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
const Tab0 = ({ user }) => {
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  const hanldeChangeName = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value + " " + e.target[2].value,
    };
    const response = await PutData(
      `user/${user?.id}`,
      setLoading,
      signal,
      data,
    );
  };
  const hanldeChangeEmail = async (e) => {
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
  useEffect(() => {
    return () => controller.abort();
  }, []);
  return (
    <Box>
      <Box>
        <Typography className="fs-5 fw-bold mt-4">Name</Typography>
        <Box className="border-bottom pb-3" style={{ width: "70%" }}>
          {!editName ? (
            <Box className="me-5">
              <Box className="mt-3  pb-5 me-5">
                <Typography className="d-inline-block">
                  {user.name ? user.name : "FirstName LastName"}
                </Typography>
                <button
                  className="btn btn-link text-dark px-5 btn-lg rounded-pill float-end me-5"
                  onClick={() => {
                    setEditEmail(false);
                    setEditName(true);
                  }}
                >
                  Edit
                </button>
              </Box>
            </Box>
          ) : (
            <React.Fragment>
              <form onSubmit={hanldeChangeName}>
                <Box>
                  <CssTextField
                    id="custom-css-outlined-input"
                    label="First Name"
                    variant="outlined"
                    className="w-100 mb-3 mt-3"
                    defaultValue={user.name ? user.name.split(" ")[0] : ""}
                    required
                  />
                  <CssTextField
                    id="custom-css-outlined-input"
                    label="last Name"
                    variant="outlined"
                    className="w-100 mt-3"
                    defaultValue={user.name ? user.name.split(" ")[1] : ""}
                    required
                  />
                </Box>
                <Stack direction="row" spacing={2} className="mt-4">
                  {loading ? (
                    <button
                      className="btn btn-grey btn-outline-secondary text-grey px-5 btn-lg rounded-pill"
                      disabled
                    >
                      Saving....
                    </button>
                  ) : (
                    <button
                      className="btn btn-dark btn-outline-secondary text-white px-5 btn-lg rounded-pill"
                      type="submit"
                    >
                      Save
                    </button>
                  )}
                  <button
                    className="btn btn-link text-dark px-5 btn-lg rounded-pill"
                    onClick={() => setEditName(false)}
                    type="button"
                  >
                    Cancel
                  </button>
                </Stack>
              </form>
            </React.Fragment>
          )}
        </Box>
      </Box>
      {/* Email section */}
      <Box>
        <Typography className="fs-5 fw-bold mt-4">Email</Typography>
        <form onSubmit={hanldeChangeEmail}>
          <Box className="border-bottom pb-3" style={{ width: "70%" }}>
            {!editEmail ? (
              <Box className="me-5">
                <Box className="mt-3  pb-5 me-5">
                  <Typography className="d-inline-block">
                    {user.email ? user.email : "john@gmail.com"}
                  </Typography>
                  <button
                    className="btn btn-link text-dark px-5 btn-lg rounded-pill float-end me-5"
                    onClick={() => {
                      setEditEmail(true);
                      setEditName(false);
                    }}
                  >
                    Edit
                  </button>
                </Box>
              </Box>
            ) : (
              <React.Fragment>
                <Box>
                  <CssTextField
                    id="custom-css-outlined-input"
                    label="New Email"
                    type="email"
                    variant="outlined"
                    className="w-100 mb-3 mt-3"
                    required
                  />
                  <CssTextField
                    id="custom-css-outlined-input"
                    label="Confirm Your New Email"
                    variant="outlined"
                    className="w-100 mt-3"
                    type="email"
                    required
                  />
                </Box>
                <Stack direction="row" spacing={2} className="mt-4">
                  {loading ? (
                    <button
                      className="btn btn- btn-outline-secondary text-grey px-5 btn-lg rounded-pill"
                      disabled
                    >
                      Saving...
                    </button>
                  ) : (
                    <button
                      className="btn btn- btn-dark text-white px-5 btn-lg rounded-pill"
                      type="submit"
                    >
                      Save
                    </button>
                  )}
                  <button
                    className="btn btn-link text-dark px-5 btn-lg rounded-pill"
                    onClick={() => setEditEmail(false)}
                    type="button"
                  >
                    Cancel
                  </button>
                </Stack>
              </React.Fragment>
            )}
          </Box>
        </form>
      </Box>
      <Box className="mt-3 fs-6">
        <Typography className="text-secondary">
          To update your address, go to{" "}
          <Link
            href="/myaccount/pay-shipping"
            className="text-secondary text-decoration-underline"
          >
            Payment & Shipping
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Tab0;
