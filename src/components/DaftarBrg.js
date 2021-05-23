import Grid from './Grid';
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
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
    <div className="daftarBrg">
        <div className={classes.wrapper}>
            <Typography variant="h2" className={classes.bigSpace} color="black">Daftar Barang</Typography>
            
              <div className="button1">
                  <a href="/Home" className="textButtonHero"> Lihat Semua</a>
              </div>
  
            {/* <CustomBtn textAlign="center" text="Lihat Semua" color="Black"/> */}
            
            <Typography variant="h4" color="black">Pilih Kategori</Typography>
            <Typography variant="h7" className={classes.littleSpace}>TEMUKAN BARANG ANDA DI BERBAGAI KATEGORI</Typography>
            <br/>
        </div>
        <br/>
        <div className="{}">
            <Grid icon={<PhoneAndroidIcon style={{fill:"black",height:"100", width:"100",}}/>} title="Handphone" btnTitle="Show me More"/>
            <Grid icon={<LocalMallOutlinedIcon style={{fill:"black",height:"100", width:"100",}}/>} title="Tas" btnTitle="Show me More" />
            <Grid icon={<AccountBalanceWalletIcon style={{fill:"black",height:"100", width:"100",}}/>} title="Dompet" btnTitle="Show me More" />
        </div>

        <div className="{}">
            <Grid icon={<MenuBookIcon style={{fill:"black ",height:"100", width:"100"}}/>} title="Buku/Dokumen" btnTitle="Show me More" />
            <Grid icon={<WatchIcon style={{fill:"black",height:"100", width:"100",}}/>} title="Jam Tangan" btnTitle="Show me More" />
            <Grid icon={<MoreHorizIcon style={{fill:"black",height:"100", width:"100",}}/>} title="Lainnya" btnTitle="Show me More" />
        </div>
    </div>
    )
}


