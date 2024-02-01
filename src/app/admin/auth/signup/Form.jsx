"use client";
import React, { useState } from "react";
import { urls } from "../../../../Environment/index";
import { ToastError, ToastSuccess } from "../../../../utlis/Toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Local } from "../../../../Environment/Token";
const Form = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const local = Local;
  if (local !== undefined) {
    router.push("/");
    ToastError("You are already login");
  }
  const handleSumbit1 = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      c_password: e.target[3].value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(`${urls}register`, requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        ToastError(errorData.data);
      }
      let actualData = await response.json();
      document.cookie = `packM=${
        actualData.data.token.split("|")[1]
      }; path=/; max-age=2592000; secure; samesite=strict;`;
      ToastSuccess("Successfully Signup");
      router.push("/");
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
    // const check = e.target[5].checked;

    // end
  };
  return (
    <div className="card shadow-sm w-100 p-4 " style={{ maxWidth: "32rem" }}>
      {/* <!-- Form --> */}
      <form
        id="formid"
        onSubmit={handleSumbit1}
        className="validation row g-3"
        acceptCharset="utf-8"
      >
        <div className="col-12 text-center mb-1">
          <h1>Create account</h1>
          <div id="alertz" style={{ textAlign: "left" }}></div>
        </div>

        <div className="col-12">
          <label className="form-label">Full Name</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            className="form-control form-control-lg"
            placeholder="Full Name"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Email</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            className="form-control form-control-lg"
            placeholder="Your email address"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Password </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control form-control-lg"
            placeholder="password "
          />
        </div>

        <div className="col-12">
          <label className="form-label">Confirm Password</label>
          <input
            name="password"
            type="password"
            id="input1"
            className="form-control form-control-lg"
            placeholder="Confirm password"
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              required
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {" "}
              I accept the <a href="#">Terms and Conditions</a>
            </label>
          </div>
        </div>
        <div className="col-12 text-center mt-4">
          {loading ? (
            <button
              type="submit"
              className="btn btn-lg btn-block btn-dark lift text-uppercase"
              disabled
            >
              <i className="fa fa-spinner fa-spin"></i> Sign Up...
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-lg btn-block btn-dark lift text-uppercase"
            >
              SIGN UP
            </button>
          )}
        </div>
        <div className="col-12 text-center mt-4">
          <span className="text-muted">
            Already have an account? <br />
            <Link href="/auth/login">Sign in here</Link>
          </span>
        </div>
      </form>
      {/* <!-- End Form --> */}
    </div>
  );
};

export default Form;
