"use client";
import { Box, FormHelperText, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { url } from "../../../Environment/index";

import { ToastError, ToastSuccess } from "../../../utlis/Toast";
const SignUp = () => {
  const [cookies, setCookie] = useCookies([]);
  const [minium8, set8Minimun] = useState(true);
  const [minimumsmall, setMinimumSmall] = useState(true);
  const [minimumCapital, setMinimumCapital] = useState(true);
  const [minimumnumber, setMinimumNumber] = useState(true);
  const [btnDisable, setBtnDisable] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const outerTheme = useTheme();
  const router = useRouter();
  useEffect(() => {
    if (!minimumCapital && !minimumnumber && !minimumsmall && !minium8) {
      if (email !== "" && firstName !== "" && lastName !== "") {
        setBtnDisable(false);
      } else {
        setBtnDisable(true);
      }
    } else {
      setBtnDisable(true);
    }
  }, [
    minimumCapital,
    minimumnumber,
    minimumsmall,
    minium8,
    email,
    firstName,
    lastName,
  ]);

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
  const handleSubmit = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const data = {
      name: e.target[0].value + " " + e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      c_password: e.target[3].value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(`${url}register`, requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        ToastError(errorData.data.error);
      }
      let actualData = await response.json();
      setCookie("packM", actualData.data.token.split("|")[1], { path: "/" });
      setCookie("sg2", "1", { path: "/" });
      ToastSuccess("Sign Up SucessFully");
      router.push("/");
    } catch (err) {
      console.log(err.message);
    } finally {
      setBtnLoading(false);
    }
  };
  return (
    <Box className="ms-4 my-5">
      <h1 className="fs-5">Or, create an account with email.</h1>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          {" "}
          <ThemeProvider theme={customTheme(outerTheme)}>
            <Box className="d-flex me-1" style={{ gap: "50px" }}>
              <TextField
                label="First Name"
                variant="standard"
                name="first-name"
                type="text"
                className="w-50 my-2"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <TextField
                label="Last Name"
                variant="standard"
                name="last-name"
                className="w-50 my-2"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </Box>
            <TextField
              label="Email"
              variant="standard"
              name="email"
              className="w-100 my-2"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <TextField
              label="Password"
              variant="standard"
              name="password"
              className="w-100 my-2"
              type="password"
              onChange={(e) => {
                handlePassword(e);
              }}
              required
            />
            <Box style={{ width: "70%" }}>
              <Box className="d-flex flex-wrap justify-content-between">
                <FormHelperText
                  className={
                    minium8
                      ? "text-danger text-helper-before"
                      : " text-success text-helper-before"
                  }
                >
                  {minium8 ? (
                    <Image
                      src={"/img/cross.svg"}
                      alt="right"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={"/img/right.svg"}
                      alt="right"
                      width={20}
                      height={20}
                    />
                  )}
                  8 characters minimum
                </FormHelperText>
                <FormHelperText
                  className={
                    minimumCapital
                      ? "text-danger text-helper-before"
                      : "text-success text-helper-before"
                  }
                >
                  {minimumCapital ? (
                    <Image
                      src={"/img/cross.svg"}
                      alt="right"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={"/img/right.svg"}
                      alt="right"
                      width={20}
                      height={20}
                    />
                  )}
                  1 uppercase letter
                </FormHelperText>
              </Box>
              <Box className="d-flex justify-content-between">
                <FormHelperText
                  className={
                    minimumsmall
                      ? "text-danger text-helper-before"
                      : "text-success text-helper-before"
                  }
                >
                  {minimumsmall ? (
                    <Image
                      src={"/img/cross.svg"}
                      alt="right"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={"/img/right.svg"}
                      alt="right"
                      width={20}
                      height={20}
                    />
                  )}
                  1 lowercase letter
                </FormHelperText>
                <FormHelperText
                  className={
                    minimumnumber
                      ? "text-danger text-helper-before"
                      : "text-success text-helper-before"
                  }
                >
                  {minimumnumber ? (
                    <Image
                      src={"/img/cross.svg"}
                      alt="right"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={"/img/right.svg"}
                      alt="right"
                      width={20}
                      height={20}
                    />
                  )}
                  at least 1 number
                </FormHelperText>
              </Box>
            </Box>
          </ThemeProvider>
          <Typography className="mt-3" style={{ fontSize: "0.9rem" }}>
            Registering your email address with us enables us to send you
            special offers from PacvackPrint, as well as news about products and
            services and your designs in progress. You can change your contact
            preferences and unsubscribe from receiving offers at any time in the
            "My Account" section or by using the unsubscribe link at the bottom
            of our emails.
          </Typography>
          <Typography className="mt-3" style={{ fontSize: "0.9rem" }}>
            By clicking the button below, you agree to, and have read, our
            <Link href={"#"} className="text-dark text-decoration-underline">
              {" "}
              Pacvack General Terms and Conditions.
            </Link>{" "}
            For more details on how we use the information we collect about you,
            please read our
            <Link href="#" className="text-dark text-decoration-underline">
              Pacvack Privacy and Cookie Policy.
            </Link>
          </Typography>
          <div className="me-4 d-flex flex-column justify-content-center align-items-center">
            {btnDisable ? (
              <button
                type="submit"
                className="btn  btn-lg rounded-pill py-2 w-100 mt-4 btn-login-signin"
                disabled
              >
                Create an Account
              </button>
            ) : (
              <React.Fragment>
                {btnLoading ? (
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg rounded-pill py-2 w-100 mt-4 btn-login-signin"
                    disabled
                  >
                    <i className="fa fa-spinner fa-spin p-0"></i>
                    Creating...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg rounded-pill py-2 w-100 mt-4 btn-login-signin"
                  >
                    Create an Account
                  </button>
                )}
              </React.Fragment>
            )}
            <p className="m-auto my-3 fw-light">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-dark text-decoration-underline fw-bold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default SignUp;

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#5C5C5C",
            "--TextField-brandBorderHoverColor": "#eeee",
            "--TextField-brandBorderFocusedColor": "#000",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "1px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "1px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });
