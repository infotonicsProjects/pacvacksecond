import {
  Box,
  Button,
  Drawer,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { CustomeHook } from "../Environment/CustomeHook";
import { useSelector } from "react-redux";
import "./mainmenu.css";
const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [loading, setLoading] = useState(false);
  const category = CustomeHook("category", setLoading);
  const userData = useSelector((state) => state.userData);
  return (
    <Drawer
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "70%" },
      }}
    >
      <Box>
        <Button
          sx={{
            color: "black",
            position: "absolute",
            right: "-2%",
            top: "4px",
            fontWeight: "bold",
          }}
          onClick={() => setMenuOpen(false)}
        >
          X
        </Button>
        <Box
          component={"ul"}
          className="list-item"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "11px",
            padding: "30px",
            color: "black",
          }}
        >
          <Typography component={"li"}>
            <Link href={"#"}>Help is here</Link>
          </Typography>
          <Typography component={"li"}>
            <Link href="/myaccount/project">My Project</Link>
          </Typography>
          <Typography component={"li"}>
            <Link
              href={
                userData?.id !== 0 ? "/myaccount/mydasboard" : "/auth/login"
              }
            >
              {userData?.id !== 0 ? "My Account" : "Sign In"}
            </Link>
          </Typography>
          <Typography component={"li"}>
            <Link href="/myaccount/project">Sign out</Link>
          </Typography>
        </Box>
        <Box
          component={"ul"}
          className="border-top list-item"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "11px",
            padding: "30px",
            color: "black",
          }}
        >
          {category?.map((item) => (
            <Typography component={"li"}>
              <Link
                href={`/picks/${item.id}`}
                scroll={false}
                onClick={() => setMenuOpen(false)}
              >
                {item?.title}
              </Link>
            </Typography>
          ))}
        </Box>
        <Box
          component={"ul"}
          className=" list-item"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "11px",
            padding: "30px",
            color: "black",
            background: "#f8f8f8",
          }}
        >
          <Typography component={"li"}>
            <a className="" href="#">
              PackVack
            </a>
          </Typography>
          <Typography component={"li"}>
            <a className="" href="#">
              Website by Infotonics
            </a>
          </Typography>
          <Typography component={"li"}>
            <a className="" href="#">
              Pricing
            </a>
          </Typography>
          <Typography component={"li"}>
            <a className="" href="#">
              Reseler
            </a>
          </Typography>
          <Typography component={"li"}>
            <a className="" href="#">
              Infotonics Create
            </a>
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
