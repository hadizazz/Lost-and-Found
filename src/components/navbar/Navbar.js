import React from "react";
// import CustomBtn from "../CustomBtn";
import {Link} from "react-router-dom"
import logo from "../.././logo.svg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../landingPage/Container";

const styles = makeStyles({
  bar: {
    display:'flex',
    justifyContent:'space-between',
    position: "fixed",
    top: "0",
    width: "100%",
    // fontWeight: "100",
    overflow: "hidden",
    height: "30px",
    backgroundColor: "transparent",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
      display: "inline-block",
      position:'fixed',
      width: '50%',
    },
  },
  logo: {
    width: "90%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  menuItem: {
    display:'inline-block', 
    paddingRight: "3px",
    fontSize: "15px",
    cursor: "pointer",
    color:'black',
    // fontFamily: "Poppins",
    "&hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
      flexDiraction:'column',
      display:'inline-block',
    },
  },
  Typography:{
    width:'500px'
  },

});

const triggerText = "MASUK";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

export default function Navbar() {
  const classes = styles();
  return (
    <div>
      <Toolbar id="navbar" position="sticky" className={classes.bar}>
        <a href="/"><img src={logo} className={classes.logo}/></a>
        <Link className={classes.menuItem} to="/" style={{textDecoration:'none',paddingTop:'1rem',}}>
            <h5>EXPLORE</h5>
        </Link>
        <Typography className={classes.Typography}/>
        <Link className={classes.menuItem} to="/contact" style={{textDecoration:'none', paddingTop: '1rem',}}>
          <h5>CONTACT</h5>
        </Link>
      
        <Container triggerText={triggerText} onSubmit={onSubmit} text="DAFTAR" />
      </Toolbar>
    </div>
  );
}


