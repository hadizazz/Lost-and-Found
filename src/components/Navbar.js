import React from 'react'
import ReactDOM from 'react-dom';
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';


const styles = makeStyles({
    bar:{
        position:'fixed',
        top:'0',
        width: '100%',
        fontWeight: '600',
        overflow:'hidden',
        paddingTop: "1rem",
        height:"30px",
        backgroundColor: 'transparent',
        ['@media (max-width:780px)']: {
            flexDirection: "column",
            display: "inline-block",
            // position: "static",
        }
    },
    logo: {
        width: "7%",
        // backgroundColor: 'black',
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    menuItem:{
        paddingRight: "3px",
        fontSize: "15px",
        // width: "10px",
        cursor: "pointer",
        flexGrow: 1,
        "&hover": {
            color: "#4f25c8"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
        }
    } ,
    CustomBtn:{
        backgroundColor: "#1a73e8",

    }
})

export default function Navbar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" className = {classes.bar}>
            <img src={logo} className = {classes.logo}/>

            <Typography variant="h6" className = {classes.menuItem}> EXPLORE </Typography>
            <Typography variant="h6" className = {classes.menuItem}> </Typography>
            <Typography variant="h6" className = {classes.menuItem}> CONTACT US</Typography>
            <Typography variant="h6" className = {classes.menuItem}> MASUK </Typography>
            <CustomBtn text="DAFTAR" style={{fill: 'black',}}/>

        </Toolbar>
    )
}
