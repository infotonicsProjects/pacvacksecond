"use client";
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import Modal from "./Modal";
import { GetData } from "../../../utlis/ClientApi";
import { useSelector } from "react-redux";

const Main = ({ params }) => {
  // console.log(shippingId)
  // setShippingId(params?.id)
  const [swtich, setSwtich] = useState(false);
  const [layout, setLayout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({});

  const controller = new AbortController();
  const signal = controller.signal;

  const user = useSelector((state) => state.userData);

  const getShippingDetails = async () => {
    const res = await GetData("myshipping/" + user?.id, setLoading, signal);

    if (res) {
      setShippingDetails(res);
    }
  };

  useEffect(() => {
    setTimeout(() => getShippingDetails(), 3000);
  }, []);

  useEffect(() => {
    return () => controller.abort();
  }, []);

  return (
    <React.Fragment>
      <Box className="my-5 ms-5 py-3 ps-5 ml-10">
        <Box>
          <Box className="mb-5">
            <h1 className="fs-3">Payment & Shipping</h1>
          </Box>
          {shippingDetails == !{} ? (
            <Box className="pt-3" style={{ width: "400px" }}>
              <h1 className="fs-5">Saved Address</h1>
              <Box className="border p-3">
                <Box className="row">
                  <Box className="col-4 me-4">
                    <p>Name : {shippingDetails?.receipent_name}</p>
                    <p>company Name : {shippingDetails?.cname}</p>
                    <p>GST : {shippingDetails?.gst}</p>
                    <p>Phone No. : {shippingDetails?.number}</p>
                    <p> Email : {shippingDetails?.email}</p>
                  </Box>

                  <Box className="col-6 ms-4">
                    <p>Shipping Address : {shippingDetails?.s_address}</p>
                    <p>Shipping City : {shippingDetails?.s_city}</p>
                    <p>Shipping State : {shippingDetails?.s_state}</p>
                    <p>Billing Address : {shippingDetails?.b_address}</p>
                    <p>Billing City : {shippingDetails?.b_city}</p>
                    <p>Billing State : {shippingDetails?.b_state}</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box className="pt-3" style={{ width: "400px" }}>
              <h1 className="fs-5">Saved Address</h1>
              <Button
                className="w-100 border border-grey px-5 py-3 mt-1 text-grey hover-class"
                style={{ color: "black", opacity: "0.88" }}
                onClick={() => setLayout(true)}
              >
                <AddIcon /> Add a new address
              </Button>
              <Modal setLayout={setLayout} layout={layout} />
            </Box>
          )}
          <Box>
            <Box className="mt-4">
              <h1 className="fs-5 mb-1">Saved Payments</h1>
              <Typography>You haven&apos;t saved any payments yet.</Typography>
            </Box>
          </Box>
          <Box className="mt-4 d-flex" style={{ gap: "30px", width: "80%" }}>
            <Box className="" style={{ flex: "1 0 50%" }}>
              <Box>
                <h1 className="fs-5">Merchandise Credits</h1>
              </Box>
              <Box className="border">
                <Box className="p-3">
                  <h1 className="text-success fs-3 fw-light">$0.00</h1>
                  <Typography className="fs-6 fw-lighter">
                    Available credits
                  </Typography>
                  <Link href="#" className="text-dark">
                    Transaction history
                    <img
                      src="/img/rightarrow.svg"
                      alt="right"
                      style={{ width: "20px" }}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box style={{ flex: "1 0 50%" }}>
              <Box
                className="d-flex justify-content-between align-items-center"
                style={{ height: "32px" }}
              >
                <h1 className="fs-5 d-inline me-3">White-Label Shipping</h1>
                <Box className="">
                  <FormControlLabel
                    label={swtich ? "on" : "off"}
                    control={
                      <IOSSwitch
                        sx={{ m: 1 }}
                        onChange={(e) => setSwtich(e.target.checked)}
                      />
                    }
                  />
                </Box>
              </Box>
              <Box className="border" style={{ height: "79%" }}>
                <Box className="p-3 ">
                  <Typography className="fs-6 fw-lighter">
                    Set all of your orders to be delivered in unbranded
                    packaging with a generic return address label.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 22,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#000",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "4px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#9D9D9D" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 200,
    }),
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 1,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 1,
    },
  },
}));
export default Main;
