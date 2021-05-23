import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core'

const StyledButton = withStyles({
    root: {
        // fontStyle:'bold',
        display:"inline-block",
        alignItems: "center",
        height:"43px",
        justifyContent:'center',
        // fontSize: "15px",
        padding: "0 25px",
        boxSizing: "border-box",
        border:'1px solid ##e0557c',
        background: "#e0557c",
        color:"white",
        transform: "none",
        // boxShadow: "3px 3px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s, color .3s", "&:hover": {
            border: '1px solid #44c5e1',
            backgroundColor: 'transparent',
            color:'Black'
        },
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
