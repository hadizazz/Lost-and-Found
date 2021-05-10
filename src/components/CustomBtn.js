import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core'

const StyledButton = withStyles({
    root: {
        fontStyle:'bold',
        display:"inline-block",
        alignItems: "center",
        height:"43px",
        justifyContent:'center',
        // fontSize: "15px",
        padding: "0 25px",
        boxSizing: "border-box",
        background: "#1a73e8",
        color:"black",
        transform: "none",
        // boxShadow: "3px 3px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s, color .3s", "&:hover": {
            backgroundColor: 'transparent',
        },
    },
    label : {
        textTransform: "capitalize",
    }, 
})(Button);

export default function CustomBtn(props) {
    return (
        <StyledButton> {props.text} </StyledButton>
    )
}
