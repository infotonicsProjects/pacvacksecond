"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./aboutsection.css";
import { GetDataUser } from "../utlis/ClientApi";
import { addUserData } from "../redux/slice";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
const Aboutsection = () => {
  const [cookie] = useCookies([]);
  const controller = new AbortController();
  const signal = controller.signal;
  const [loading, setLoading] = useState(false);
  const dispacth = useDispatch();
  const token = cookie.packM;

  useEffect(() => {
    const getData = async () => {
      const resposne = await GetDataUser("user", setLoading, signal, token);

      if (resposne !== undefined && resposne !== null) {
        dispacth(addUserData(resposne));
      }
    };
    getData();
    return () => controller.abort();
  }, []);
  return (
    <div className="about-section">
      <div className="wrapper-about-section">
        <div className="content-about-section">
          <div className="about-section-first" style={{ gap: "10rem" }}>
            <div className="logo-div">
              <img
                src="/img/logos/packVack-logo.jpeg"
                alt="logo"
                className="width-100px"
              />
              <h1>
                Webisite is{" "}
                <a href="#" className="text-white">
                  {" "}
                  Absoulty Graunteed
                </a>
              </h1>
              <p>Every time. Any reason. Or we &apos; ll make it right.</p>
            </div>
            <div className="help-div">
              <input type="checkbox" id="btnControl" />
              <label className="btn p-0" htmlFor="btnControl">
                <p className="text-white"> Lets Us Help</p>
              </label>
              <ul className="text-light p-0 hide-show" id="hide-show">
                <li>
                  <Link href="/myaccount/my-account">My Account</Link>
                </li>
                <li>
                  <Link href="/shipping">Shipping</Link>
                </li>
                <li>
                  <Link href="#">Contact & Support</Link>
                </li>
                <li>
                  <Link href="/bags">All Products</Link>
                </li>
                <li>
                  <Link href="#">Ideas & Advice</Link>
                </li>
                <li>
                  <Link href="#">Reseller Program</Link>
                </li>
                <li>
                  <Link href="#">Accessibility</Link>
                </li>
              </ul>
            </div>
            <div className="company-div">
              <p> Our Company</p>
              <ul className="text-light p-0">
                <li>
                  <Link href="#">My Account</Link>
                </li>
                <li>
                  <Link href="#">Shipping</Link>
                </li>
                <li>
                  <Link href="#">Contact & Support</Link>
                </li>
                <li>
                  <Link href="#">All Products</Link>
                </li>
                <li>
                  <Link href="#">Ideas & Advice</Link>
                </li>
                <li>
                  <Link href="#">Reseller Program</Link>
                </li>
                <li>
                  <Link href="#">Accessibility</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="about-section-second d-flex p-5"
            style={{ gap: "6rem" }}
          >
            <div className="links-second-section">
              <div className="">
                <ul className="d-flex gap-3 footerlinks flex-wrap p-0">
                  <li>
                    <Link href="#">tel +91909883XX88</Link>
                  </li>
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy and Cookie Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Term and Condtions</Link>
                  </li>
                  <li>
                    <Link href="#">Legal Notice</Link>
                  </li>
                </ul>
              </div>
              <div className="pt-3 reserved">
                <p>
                  A Pack Mack Company 2001-2023 website. All right reserved{" "}
                  <br />
                  Unless stated otherwise,price are exclusive of delivery and
                  product options
                </p>
              </div>
            </div>
            <div className="payment mr-5">
              <ul className="d-flex gap-1">
                <li>
                  <img src="/img/em_mastercard_icon.svg" />
                </li>
                <li>
                  <img src="/img/em_paypal_icon.svg" />
                </li>
                <li>
                  <img src="/img/em_visa_icon.svg" />
                </li>
              </ul>
            </div>
            <div className="socail-icon ">
              <ul className="d-flex gap-3">
                <li>
                  <a href="#">
                    <img src="/img/Facebook_Logo.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/Twitter_Logo.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/Instagram_Logo.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/Pinterest_Logo.svg" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="nation"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
