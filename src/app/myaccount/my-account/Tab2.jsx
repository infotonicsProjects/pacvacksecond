"use client";
import styled from "@emotion/styled";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

import { Box, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const Tab2 = () => {
  const [editPassword, setEditPassword] = useState(false);
  const [value, setValue] = useState("yes all");
  const [thirdRadio, setShowThirdRadio] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const handleChange = (e) => {
    if (e.target.value === "yes all") {
      setShowThirdRadio(false);
      setValue(e.target.value);
      setBtnDisable(false);
    } else {
      if (e.target.value === "not") {
        setBtnDisable(true);
      } else {
        setBtnDisable(false);
      }
      setShowThirdRadio(true);
      setValue(e.target.value);
    }
  };
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
  return (
    <Box>
      <Box>
        <Typography className="fs-4 fw-bold mt-4">
          Marketing preferences
        </Typography>
        <Box className="pb-3" style={{ width: "70%" }}>
          {!editPassword ? (
            <Box className="me-5">
              <Box className="mt-3  pb-5 me-5">
                <button
                  className="btn btn-link text-dark px-5 btn-lg rounded-pill float-end me-5"
                  onClick={() => {
                    setEditPassword(true);
                  }}
                >
                  Manage
                </button>
              </Box>
            </Box>
          ) : (
            <React.Fragment>
              <Box>
                <Typography className="fs-5 mt-3">
                  You can update your marketing preferences at any time.
                </Typography>
                <Typography className="fs-5 mt-3">
                  For more information, please read our{" "}
                  <Link
                    href="#"
                    className="text-dark text-decoration-underline"
                  >
                    Privacy and Cookie Policy.
                  </Link>
                </Typography>
              </Box>
              <Box className="p-5 mt-4 mb-0 bg-body-tertiary">
                <h1 className="fs-4 fw-bold">Email</h1>
                <Typography className="fs-5 mt-3">
                  Would you like to sign up for exclusive email offers including
                  a <span className="fw-bold">15% discount</span> in your
                  welcome email?
                </Typography>
                <FormControl>
                  <RadioGroup
                    defaultValue="medium"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    sx={{ my: 1 }}
                  >
                    <Box className="my-4">
                      <Radio
                        label="Yes, I’d like to receive special email offers from PacvackPrint, as well as news about products, services and my designs in progress."
                        color="neutral"
                        size="lg"
                        className="fs-5"
                        value="yes all"
                      />
                      <Radio
                        label="No, thanks"
                        size="lg"
                        className="mt-4 fs-5"
                        color="neutral"
                        value="not"
                      />
                    </Box>
                    {thirdRadio ? (
                      <Box>
                        <h1 className="fs-4 fw-bold">
                          Would you prefer fewer emails?
                        </h1>
                        <Radio
                          label="Yes, I’d like to receive one email a week."
                          color="neutral"
                          size="lg"
                          className="mt-4 fs-5"
                          value="something"
                        />
                      </Box>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </RadioGroup>
                </FormControl>
                <Box className="mb-3">
                  <Stack direction="row" spacing={2} className="my-4">
                    {btnDisable ? (
                      <button
                        className="btn btn-outline-secondary text-grey px-5  rounded-pill"
                        disabled
                      >
                        Save
                      </button>
                    ) : (
                      <button className="btn btn-dark text-grey px-5  rounded-pill">
                        Save
                      </button>
                    )}
                    <button
                      className="btn btn-link text-dark px-5 btn-lg rounded-pill"
                      onClick={() => setEditPassword(false)}
                    >
                      Cancel
                    </button>
                  </Stack>
                </Box>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Tab2;
