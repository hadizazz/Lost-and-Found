import React from 'react'
import Grid from './Grid'
import {makeStyles} from '@material-ui/core/styles'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import StorageIcon from '@material-ui/icons/Storage';
import HowToRegIcon from '@material-ui/icons/HowToReg';

const styles = makeStyles({
    wrapper: {
        display:'flex',
        justifyContent:'center',
        textAlign: "center",
        alignItems:"center",
        backgroundColor: 'whitesmoke',
      },
    grid:{
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        flexWrap:'wrap',
    },
    item:{
        height: '100px',
        width: '100px',
        color:'black',
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        fontSize: '80px',

    }
})
export default function TotalBrg() {
    const classes = styles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                <div style={{display:"inline-block",}}>
                    <HowToRegIcon className={classes.item} style={{margin:"auto"}}></HowToRegIcon>
                    <h3>18</h3>
                    <h5>Barang yang Dikembalikan</h5>
                </div>
                <div style={{padding:"20px 100px"}}>
                    <StorageIcon className={classes.item} style={{margin:"auto"}}>MEMEK</StorageIcon>
                    <h3>76</h3>
                    <h5>Total Barang yang terkumpul</h5>
                </div>
                <div>
                    <SupervisorAccountIcon className={classes.item} style={{margin:"auto"}}>Itil</SupervisorAccountIcon>
                    <h3>103</h3>
                    <h5>Kolega yang bergabung</h5>
                </div>
                {/* <Grid icon={<HowToRegIcon style={{fill:"#000000",height:"80", width:"80",}}/>} title="18" btnTitle="Barang Dikembalikan"/>
                <Grid icon={<StorageIcon style={{fill:"#000000",height:"80", width:"80",}}/>} title="76 Total barang terkumpul    " btnTitle="Show me More"/>
                <Grid icon={<SupervisorAccountIcon style={{fill:"#000000",height:"80", width:"70",}}/>} title="103 Kolega yang bergabung" btnTitle="Show me More"/> */}
            </div>
        </div>
    )
}
