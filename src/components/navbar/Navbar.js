import React from "react";
// import CustomBtn from "../CustomBtn";
import logo from "../.././logo.svg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../landingPage/Container";
import { Link } from "react-router-dom";
import api from "../../services/apiClient";

const styles = makeStyles({
  bar: {
    display: "flex",
    justifyContent: "space-between",
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
      position: "fixed",
      width: "50%",
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
    display: "inline-block",
    paddingRight: "3px",
    fontSize: "15px",
    cursor: "pointer",
    color: "black",
    // fontFamily: "Poppins",
    "&hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
      flexDiraction: "column",
      display: "inline-block",
    },
  },
  Typography: {
    width: "700px",
  },
});

const triggerText = "MASUK";
const onSubmit = (event) => {
  event.preventDefault();
};

const Navbar = (props) => {
  const authLink = props.loggedIn ? (
    <Link
      className={classes.menuItem}
      onClick={() =>
        api()
          .post("/logout")
          .then((response) => {
            if (response.status === 204) {
              props.setLoggedIn(false);
              sessionStorage.setItem("loggedIn", false);
            }
          })
      }
      style={{ textDecoration: "none", paddingTop: "1rem" }}
    >
      <h5>SIGN OUT</h5>
    </Link>
  ) : (
    <Container triggerText={triggerText} onSubmit={onSubmit} text="DAFTAR" />
  );
  const classes = styles();
  // if (!props.loggedIn) {
  return (
    <div>
      <Toolbar id="navbar" position="sticky" className={classes.bar}>
        <a href="/">
          <img src={logo} className={classes.logo} />
        </a>
        <Link
          className={classes.menuItem}
          to="/home"
          style={{ textDecoration: "none", paddingTop: "1rem" }}
        >
          <h5>EXPLORE</h5>
        </Link>
        <Typography className={classes.Typography} />
        <a
          className={classes.menuItem}
          onClick=""
          style={{ textDecoration: "none", paddingTop: "1rem" }}
        >
          <h5>CONTACT</h5>
        </a>
        {authLink}
      </Toolbar>
    </div>
  );
};
// return (
//   <div>
//     <Toolbar id="navbar" position="sticky" className={classes.bar}>
//       <a href="/">
//         <img src={logo} className={classes.logo} />
//       </a>
//       <Link
//         className={classes.menuItem}
//         to="/home"
//         style={{ textDecoration: "none", paddingTop: "1rem" }}
//       >
//         <h5>EXPLORE</h5>
//       </Link>
//       <Typography className={classes.Typography} />
//       <Link
//         className={classes.menuItem}
//         to="#"
//         style={{ textDecoration: "none", paddingTop: "1rem" }}
//       >
//         <h5>CONTACT</h5>
//       </Link>
//       <Container triggerText={triggerText} onSubmit={onSubmit} text="DAFTAR" />
//     </Toolbar>
//   </div>
// );

export default Navbar;
