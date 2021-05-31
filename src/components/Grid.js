import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from "react-router-dom"

const styles = makeStyles({
    wrapper: {
        display: "inline-block",
        // justifyContent: "start",
        flexDirection: "column",
        alignItems: "center",
        padding : "0 5rem 0 5rem",
        textAlign:"center",
    },
    item: {
        display: "flex",
        paddingTop: "1rem",
    },
    title: {
        alignItems:"center",
    },
    btn:{
        display:'inline-block',
        paddingTop:'1rem',
        backgroundColor:'#e0557c;',
        boxSizing:'border-box',
        color:'#F5f5f5',
        borderRadius:'5px',
        alignItems:'center',
        padding:'0 25px',
        transform:'none',
        transition: "background .3s,border-color .3s, color .3s", "&:hover": {
            // border: "1px solid #FFC0CB;",
            backgroundColor: '#FFC0CB',
        },
    }
})

export default function Grid(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant="h5"> {title} </Typography>
            <Link className={classes.btn} to="/Showmemore" style={{textDecoration:'none', color:'black'}}>
                <h6>Show Me More</h6>
            </Link>
        </div>
    )
}
