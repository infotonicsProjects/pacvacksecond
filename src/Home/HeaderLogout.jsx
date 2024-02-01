import {
  Box,
  Button,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const HeaderLogout = ({ userData }) => {
  const user = useSelector((state) => state.userData)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter()
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);

    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const handleSignout = () => {
    setAnchorEl(null)
    // router.refresh()
    setTimeout(() => {

      location.href = location.href;
    }, 700)
    document.cookie = `packM=fCYus4ImjRoEJQWaPQQS43k6EG8UnQNHrgOnypJD69fb3896; path=/; max-age=10000; secure; samesite=strict;`;
  };
  const currentRoute = usePathname();
  const open = Boolean(anchorEl);
  return (
    <Link
      onClick={handleClick}
      onMouseOver={handleClick}
      onMouseLeave={handleClose}
      className="mr-5-link header-link "
      href="#"
    // href={userData?.id !== 0 ? "/myaccount/mydasboard" : "/auth/login"}
    >
      <div>
        <svg
          style={{ display: "inline" }}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13.4197"
            cy="10.8738"
            r="4.37382"
            stroke="black"
            strokeWidth="1.5"
          ></circle>
          <path
            d="M5.75586 22.5005C5.75586 21.5482 5.9541 20.6053 6.33925 19.7255C6.7244 18.8457 7.28893 18.0463 8.0006 17.3729C8.71227 16.6996 9.55715 16.1654 10.487 15.801C11.4168 15.4366 12.4134 15.249 13.4199 15.249C14.4263 15.249 15.4229 15.4366 16.3528 15.801C17.2826 16.1654 18.1275 16.6996 18.8392 17.3729C19.5509 18.0463 20.1154 18.8457 20.5005 19.7255C20.8857 20.6053 21.0839 21.5482 21.0839 22.5005"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="hide-mobile">
          {userData?.id !== 0 ? "My Account" : "Sign In"}
        </span>
        <Popover
          id="mouse-over-popover"
          onMouseLeave={handleClose}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handleClose}

        >
          {user?.id === 0 ?
            <Fragment>
              <Box width="300px" className="rounded shadow pb-5  pt-5">
                <Box display="flex" justifyContent={"center"}>
                  <Typography as="p" padding="10" width="75%" className="fs-5">
                    Save your designs, easily track your orders, and get access to exclusive member benefits.
                  </Typography>
                </Box>
                <div className="d-flex align-items-center justify-content-center border-bottom mt-4 pb-4">
                  <Link href={"/auth/login"} className="text-white">
                    <button className="btn btn-dark border fs-6 mt-1 rounded-pill btn-lg px-5 py-3
                    "
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
              </Box>
            </Fragment> :

            <Box width="250px" className="rounded shadow pb-5  pt-3" >
              <div className="bg-white d-block  ">
                <div className="container ">
                  <div className="main-heading ">
                    <div >
                      <p className="pt-2 text-dark fs-6 text-capitalize " pb-0 mb-0 >
                        Hello {user?.name?.split(" ")[0]}
                      </p>
                      <p className="text-dark border-bottom pb-2 pt-0 mt-0">
                        <Link href="/myaccount/my-account" className="text-dark fw-light ">Account </Link>
                      </p>
                    </div>
                    <div
                      className="content-sidesection border-bottom "

                    >
                      <ul
                        className="list-decoration-none font-li-size p-0 d-flex flex-column ul-li-text-dark "
                        style={{ gap: "5px" }}
                      >
                        <li
                          className={
                            currentRoute === "/myaccount/mydasboard"
                              ? " rounded-pill py-1 color-gr active-link"
                              : " rounded-pill py-1 color-gr"
                          }
                        >
                          <Link href="/myaccount/mydasboard">Dashboard</Link>
                        </li>
                        <li
                          className={
                            currentRoute === "/myaccount/project"
                              ? " rounded-pill py-1 color-gr active-link"
                              : " rounded-pill py-1 color-gr"
                          }
                        >
                          <Link href="/myaccount/project">My Project</Link>
                        </li>
                        <li
                          className={
                            currentRoute === "/myaccount/order-history"
                              ? " rounded-pill py-1 color-gr active-link"
                              : " rounded-pill py-1 color-gr"
                          }
                        >
                          <Link href="/myaccount/order-history">
                            Order History & Reorder
                          </Link>
                        </li>

                        <li
                          className={
                            currentRoute === "/myaccount/myupload"
                              ? " rounded-pill py-1 color-gr active-link"
                              : " rounded-pill py-1 color-gr"
                          }
                        >
                          <Link href="/myaccount/myupload">My Uploads</Link>
                        </li>
                        {/* <li
                className={
                  currentRoute === "/myaccount/mydesign"
                    ? " rounded-pill py-1 color-gr active-link"
                    : " rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/mydesign">My Design Service</Link>
              </li> */}
                        {/* <li
                className={
                  currentRoute === "/myaccount/mydigital-market"
                    ? " rounded-pill py-1 color-gr active-link"
                    : " rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/mydigital-market">
                  My Digitial Marketing
                </Link>
              </li> */}
                        <li
                          className={
                            currentRoute === "/myaccount/pay-shiping"
                              ? " rounded-pill py-1 color-gr active-link"
                              : " rounded-pill py-1 color-gr"
                          }
                        >
                          <Link href="/myaccount/pay-shiping">Payment & Shiping</Link>
                        </li>
                        <li
                          className={
                            currentRoute === "/myaccount/my-account"
                              ? " rounded-pill py-1 color-gr active-link"
                              : " rounded-pill py-1 color-gr"
                          }
                        >
                          <Link href="/myaccount/my-account">Account Setting </Link>
                        </li>
                        {/* <li
                className={
                  currentRoute === "/myaccount/"
                    ? " rounded-pill py-1 color-gr active-link"
                    : " rounded-pill py-1 color-gr"
                }
              >
                <Link href="">My Subcription </Link>
              </li>
              <li
                className={
                  currentRoute === "/myaccount/my-fav"
                    ? " rounded-pill py-1 color-gr active-link"
                    : " rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/my-fav">Favroite Templates</Link>
              </li>

              <li
                className={
                  currentRoute === "/myaccount/mailing-list"
                    ? " rounded-pill py-1 color-gr active-link"
                    : " rounded-pill py-1 color-gr"
                }
              >
                <Link href="/myaccount/mailing-list">Mailing Lists</Link>
              </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-light border fs-6 mt-2 rounded-pill btn-lg text-dark"
                  onClick={handleSignout}
                >Sign out</button>
              </div>
            </Box>}
        </Popover>
      </div>
    </Link >
  );
};

export default HeaderLogout;
