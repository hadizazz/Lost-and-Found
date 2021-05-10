import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CustomBtn from './CustomBtn'

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

})

export default function Grid(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant="h5"> {title} </Typography>
            <div className={classes.item}>
                <CustomBtn text={btnTitle}/>
            </div>
        </div>
    )
}
