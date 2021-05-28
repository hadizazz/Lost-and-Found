import React from 'react'
import '../App.css'
import {makeStyles} from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

const styles = makeStyles ({
    wrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        position: 'relative',
        float:'left',
        top: '150px',
    },
    row:{
        // height:'auto',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        flexWrap:'wrap',
        boxSizing:'border-box',
        
    },
    img:{
        paddingTop: '50px',
        width: '50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',

    },
    descBox:{
        display:'inline-block',
        position: 'relative',
        boxSizing:'border-box',
        padding:'30px',
        left: '-100px',
        top:'25px',
        height: '50vh',
        width: '50vw',
    },
    title:{
        fontSize: '25px',
        color: '#006563',
        justifyContent:'center',
        lineHeight: 'normal',
    },
    descBrg:{
        display:'list-item',
        justifyContent:'start',
        listStyle:'none',
        fontWeight: '100',
        fontSize: '15px',
        position: 'relative',
        textAlign: 'justify',
        lineHeight: '2.5',
        listStyleType:'',
        color: '#000000',
    },
    listBrg:{
        padding: '5px',

    },
    Btn:{
        margin: '0 20px 0 20px',
        textAlign:'center!important',
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: '600',
        padding: '11px 70px',
        color:'#000000',
        background:'#dc3545',
        fontSize:'15px',
        padding: "7px",
        boxSizing:'border-box',
        borderRadius:'5px',
        transition: "background .3s,border-color .3s, color .3s", "&:hover": {
            border: '1px solid #000000',
            backgroundColor: 'transparent',
            color:'Black'
        },

    },
    
})


export default function Contact() {
    const classes = styles();
    return (
        <div className={classes.wrapper}>
                <div className={classes.row}>
                    <img src="https://apollo-singapore.akamaized.net/v1/files/hrysgvtxysm33-ID/image;s=850x0" alt='tas eiger' className={classes.img}/>
                </div>
                <div className={classes.descBox}>
                    <h5 className={classes.title}>SEPATU</h5>
                    <tr className={classes.descBrg}>
                        <th className={classes.listBrg}>Jenis Barang </th>
                        <th> : </th>
                        <th className={classes.listBrg}>Sepatu</th>
                    </tr>
                    <tr className={classes.descBrg}>
                        <th className={classes.listBrg}>Jenis itil </th>
                        <th className={classes.listBrg  }> : </th>
                        <th className={classes.listBrg}>Sepatu</th>
                    </tr>
                    <tr className={classes.descBrg}>
                        <th className={classes.listBrg}>Jenis itil </th>
                        <th className={classes.listBrg  }> : </th>
                        <th className={classes.listBrg}>Sepatu</th>
                    </tr>
                    <tr className={classes.descBrg}>
                        <th className={classes.listBrg}>Jenis itil </th>
                        <th className={classes.listBrg  }> : </th>
                        <th className={classes.listBrg}>Sepatu</th>
                    </tr>

                <div>
                    <hr/>
                    <Link to="/home/:id" className={classes.Btn} style={{textDecoration:'none'}}>BARANGKU</Link>
                    
                    <Link to="/home/:id" className={classes.Btn} style={{textDecoration:'none'}}>BARANGTOT</Link>
                    <hr/>

                </div>
            </div>
        </div>
    )
}
