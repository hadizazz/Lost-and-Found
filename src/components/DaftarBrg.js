import Grid from './Grid';
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import CustomBtn from './CustomBtn'
import '../index.css'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WatchIcon from '@material-ui/icons/Watch';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin:"auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "2rem",
    textAlign:"center",
  },
  littleSpace:{
    marginTop: "2rem",
    textAlign:"center",
  },
  grid:{
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    flexWrap:"wrap",
  },
  CustomBtn:{
      textAlign:"center",
  },
})

export default function DaftarBrg() {
    const classes = styles();

    return (
    <div>
        <div className={classes.wrapper}>
            <Typography variant="h2" className={classes.bigSpace} color="black">Daftar Barang</Typography>
            
              <div className="button1">
                  <a href="#lihat semua" className="textButtonHero"> Lihat Semua</a>
              </div>
  
            {/* <CustomBtn textAlign="center" text="Lihat Semua" color="Black"/> */}
            
            <Typography variant="h4" color="black">Pilih Kategori</Typography>
            <Typography variant="h7" className={classes.littleSpace}>TEMUKAN BARANG ANDA DI BERBAGAI KATEGORI</Typography>
            <br/>
        </div>
        <br/>
        <div className={'${classes.grid} ${classes.bigSpace}'}>
            <Grid icon={<PhoneAndroidIcon style={{fill:"#4360A6",height:"100", width:"100",}}/>} title="Handphone" btnTitle="Show me More"/>
            <Grid icon={<LocalMallOutlinedIcon style={{fill:"#449A76",height:"100", width:"100",}}/>} title="Tas" btnTitle="Show me More" />
            <Grid icon={<AccountBalanceWalletIcon style={{fill:"#D05B2D",height:"100", width:"100",}}/>} title="Dompet" btnTitle="Show me More" />
        </div>

        <div className={'${classes.grid} ${classes.littleSpace}'}>
            <Grid icon={<MenuBookIcon style={{fill:"#51AE3E",height:"100", width:"100"}}/>} title="Buku/Dokumen" btnTitle="Show me More" />
            <Grid icon={<WatchIcon style={{fill:"#0C8CC1",height:"100", width:"100",}}/>} title="Jam Tangan" btnTitle="Show me More" />
            <Grid icon={<MoreHorizIcon style={{fill:"black",height:"100", width:"100",}}/>} title="Lainnya" btnTitle="Show me More" />
        </div>
    </div>
    )
}


