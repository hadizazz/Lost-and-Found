import React from 'react'
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    Container:{
        backgroundColor: '#e0557c',
        height: '100%',
        width: '100%',
    },
    Wrapper:{
        padding:'49px 140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    Column:{
        display:'flex',
        flexDirection: 'column',
        textAlign:'left',
        gap:'20px',
        gridGap:'20px',
    },
    Row:{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(230, 1fr))',
        gridGap:'20px',
        gap:'20px',
    },
    Row2:{
        display:'gap',
        gridGap:'20px',
        gap:'20px',
        justifyContent:'center',
    },
    Row3:{
        display:'flex',
        gridGap:'20px',
        gap:'20px',
        justifyContent:'left',
    },
    Link:{
        color:'#efefed',
        marginBottom: '20px',
        textDecoration:'none',
        fontWeight: '600',
        fontSize: '15px',
        lineHeight: '22px',
    },
    Title:{
        color:'#ffffff',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight:'36px',
        display:'flex',
        textAlign:'left',
        justifyContent:"flex-start",
    },
    Line:{
        border:'1px solid #d4d0d0',
    },
    Text:{
        textAlign:'center',
        fontWeight: '600',
        fontSize: '15px',
        color:'#ffffff'
    },
    Image:{

    }
})

export default function footer() {
    const classes = styles();
    return (
        <div className={classes.Container}>
            <div className={classes.Wrapper}>
                <div className={classes.Row}>
                    <div className={classes.Column}>
                        <div className={classes.Title}>TENTANG LOST & FOUND</div>
                        <div href="#" className={classes.Link}>Syarat dan Ketentuan</div>
                        <div href="#" className={classes.Link}>Kebijakan Privasi</div>
                        <div href="#" className={classes.Link}>FAQ</div>
                    </div>
                    <div className={classes.Column}>
                        <div className={classes.Title}> IKUTI UPDATE KAMI</div>
                        <div className={classes.Row3}>
                            <div href="#" className={classes.Image}>
                                <img alt="Twitter" src="https://i.ibb.co/3sLSSz0/twitter-1.png"></img>
                            </div>
                            <div href="#" className={classes.Image}>
                                <img alt="Facebook" src="https://i.ibb.co/PF1798t/facebook-1.png"></img>
                            </div>
                            <div href="#" className={classes.Image}>
                                <img alt="Instagram" src="https://i.ibb.co/25mw7Bs/INSTAGRAM.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.Line}></div>
            <div className={classes.Wrapper}>
                <div className={classes.Column}>
                    <div className={classes.Row2}>
                        <div className={classes.Image}>
                            <img alt="LOGO" src="https://i.ibb.co/j4xCkXc/PIC-LOGO.png"></img>
                        </div>
                        <div className={classes.Image}>
                            <img alt="LOST FOUND" src="https://i.ibb.co/h2yzwp9/LOST-FOUND-com.png"></img>
                        </div>
                    </div>
                    <div className={classes.Text}>@ 2021 LOST&FOUND.</div>
                </div>
            </div>
        </div>
    )
}
