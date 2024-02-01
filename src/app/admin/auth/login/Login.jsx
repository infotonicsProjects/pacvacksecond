"use client";
import { urls } from "../../../../Environment/index";
import { Local } from "../../../../Environment/Token";
import { ToastError, ToastSuccess } from "../../../../utlis/Toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const local = Local;
  // if (local !== undefined) {
  //   router.push("/");
  //   ToastError("You are already logged in");
  // }
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      const response = await fetch(`${urls}login`, requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        ToastError(errorData.data.error);
        setLoading(false);
      }
      let actualData = await response.json();
      document.cookie = `packM=${
        actualData.data.token.split("|")[1]
      }; path=/; max-age=2592000; secure; samesite=strict;`;
      router.push("/admin");
      ToastSuccess("Successfully Login");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="card shadow-sm w-100 p-4 " style={{ maxWidth: "32rem" }}>
      {/* <!-- Form --> */}
      <form className="row g-3" onSubmit={handleLogin}>
        <div className="col-12 text-center mb-5">
          <h1>Sign in</h1>

          <span className="text-muted">Free access to our dashboard.</span>
        </div>
        <div className="col-12">
          <div className="mb-2">
            <label className="form-label">Email </label>
            <input
              required
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="john@gmail.com"
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              required
              type="password"
              name="password"
              className="form-control form-control-lg"
              placeholder="*********"
            />
          </div>
        </div>
        {/* <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault"> Remember me </label>
                    </div>
                </div> */}
        <div className="col-12 text-center mt-4">
          {loading ? (
            <button
              type="submit"
              className="btn btn-lg btn-block btn-dark lift text-uppercase"
              disabled
            >
              <i className="fa fa-spinner fa-spin"></i> Sign In...
            </button>
          ) : (
            <button className="btn btn-lg btn-block btn-dark lift text-uppercase">
              SIGN IN
            </button>
          )}
        </div>
        <div className="col-12 text-center mt-4">
          <span className="text-muted">
            Don&apos;t have an account yet? <br />
            <Link href="/auth/signup">Sign up here</Link>
          </span>
        </div>
      </form>
      {/* <!-- End Form --> */}
    </div>
  );
}
