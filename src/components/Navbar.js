import React from "react";
import CustomBtn from "./CustomBtn";
import logo from "../logo.svg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  bar: {
    display:'flex',
    justifyContent:'space-between',
    position: "fixed",
    top: "0",
    width: "100%",
    fontWeight: "600",
    overflow: "hidden",
    // paddingTop: "1rem",
    height: "30px",
    backgroundColor: "transparent",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
      display: "inline-block",
      // position: "static",
    },
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  logo: {
    width: "90%",
    // backgroundColor: 'black',
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  menuItem: {
    paddingRight: "3px",
    fontSize: "15px",
    // width: "10px",
    cursor: "pointer",
    // flexGrow: 1,
    fontFamily: "Poppins",
    "&hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
  Typography:{
    width:'700px'
  },
  CustomBtn: {
    backgroundColor: "#1a73e8",
    color: "black",
  },
});

export default function Navbar() {
  const classes = styles();
  return (
    <div>
      <Toolbar id="navbar" position="sticky" className={classes.bar}>
        <a href="/"><img src={logo} className={classes.logo}/></a>
        <Typography className={classes.menuItem}>
          <a style={{ color: "black" }} href="/home">
            {" "}
            EXPLORE{" "}
          </a>
        </Typography>
        <Typography className={classes.Typography}> </Typography>
        <Typography className={classes.menuItem}>
          <a style={{ color: "black" }} href="#">
            {" "}
            CONTACT US{" "}
          </a>
        </Typography>
        <Typography className={classes.menuItem}>
          <a style={{ color: "black" }} href="#">
            {" "}
            MASUK{" "}
          </a>
        </Typography>
        <CustomBtn text="DAFTAR" />
      </Toolbar>
    </div>
  );
}


