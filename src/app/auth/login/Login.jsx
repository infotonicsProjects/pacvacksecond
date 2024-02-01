"use client";
import { Box, FormHelperText, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Link from "next/link";
import { url } from "../../../Environment/index";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addUserData } from "../../../redux/slice";
import { ToastError, ToastSuccess } from "../../../utlis/Toast";

const Login = () => {
  const [cookies, setCookie] = useCookies([]);
  const [showtext, setShowtext] = useState("password is required");
  const [btnDisable, setBtnDisable] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [email, setEmail] = useState("");
  const outerTheme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleBtnDisable = (e) => {
    if (e.target.name === "email")
      if (e.target.value === "") {
        setBtnDisable(true);
        setEmail("");
      } else {
        if (showtext === "") {
          setBtnDisable(false);
          setEmail(e.target.value);
        } else {
          setEmail(e.target.value);
          setBtnDisable(true);
        }
      }
    else {
      if (e.target.value === "") {
        setShowtext("password is required");
        if (email === "") {
          setBtnDisable(true);
        } else {
          setBtnDisable(false);
        }
      } else {
        setShowtext("");
        if (email === "") {
          setBtnDisable(true);
        } else {
          setBtnDisable(false);
        }
      }
    }
  };
  const handleSubmit = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(`${url}login`, requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        ToastError(errorData.data.error);
      }
      let actualData = await response.json();
      setCookie("packM", actualData.data.token.split("|")[1], { path: "/" });
      setCookie("sg2", "1", { path: "/" });
      dispatch(addUserData(actualData.data));
      localStorage.setItem(
        "useN",
        JSON.stringify({
          name: actualData.data.name,
          email: e.target[0].value,
        }),
      );
      ToastSuccess("Login Successfully");
      if (localStorage.getItem("redirect")) {
        router.push(`/design2?designid=${localStorage.getItem("redirect")}`);
      } else {
        router.push("/");
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setBtnLoading(false);
    }
  };
  return (
    <Box className="ms-4 my-5">
      <h1 className="fs-5">Or, sign in with email.</h1>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          {" "}
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="Email address"
              variant="standard"
              name="email"
              type="email"
              className="w-100 my-2"
              onChange={(e) => {
                handleBtnDisable(e);
              }}
            />
            <TextField
              label="Password"
              variant="standard"
              name="password"
              className="w-100 my-2"
              type="password"
              onChange={(e) => {
                handleBtnDisable(e);
              }}
            />
            <FormHelperText className="text-danger">{showtext}</FormHelperText>
          </ThemeProvider>
          <button
            className="btn btn-link text-dark p-0 mt-3 fs-6"
            type="button"
          >
            Forget password?
          </button>
          <Typography className="mt-3" style={{ fontSize: "0.8rem" }}>
            By signing in, you have read and agree to our{" "}
            <Link href={"#"} className="text-dark text-decoration-underline">
              {" "}
              Packvack General Terms and Conditions.
            </Link>{" "}
            For more details on how we use the information we collect about you,
            please read our{" "}
            <Link href="#" className="text-dark text-decoration-underline">
              Packvack Privacy and Cookie Policy.
            </Link>
          </Typography>
          <div className="me-4 d-flex flex-column justify-content-center align-items-center">
            {btnDisable ? (
              <button
                type="button"
                className="btn  btn-lg rounded-pill py-2 w-100 mt-4 btn-login-signin"
                disabled
              >
                Sign In
              </button>
            ) : (
              <React.Fragment>
                {btnLoading ? (
                  <button
                    type="submit"
                    className="btn  btn-lg rounded-pill py-2 w-100 mt-4 btn-login-signin text-dark"
                    disabled
                  >
                    <i className="fa fa-spinner fa-spin p-0"></i> Sign In....
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg rounded-pill py-2 w-100 mt-4 btn-login-signin"
                  >
                    Sign In
                  </button>
                )}
              </React.Fragment>
            )}
            <p className="m-auto my-3 fw-bold">or</p>
            <Link
              href="/auth/signup"
              className="text-dark btn btn-lg rounded-pill  w-100  btn-hover-login"
            >
              <button type="button" className="btn btn-lightr">
                Create an Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Login;

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
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
            [`&: hover.${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui - focused.${outlinedInputClasses.notchedOutline}`]: {
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
                "1px solid var(--TextField-brandBorderFocusedColor)",
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
              borderBottom: "1px solid var(--TextField-brandBorderHoverColor)",
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
