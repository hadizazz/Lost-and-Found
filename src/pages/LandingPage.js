import React from 'react'
import DaftarBrg from '../components/DaftarBrg'
import Footer from '../components/Footer'
import TotalBrg from '../components/TotalBrg'
import '../index.css'

export default function LandingPage() {
    return (
        <div>
            <div className="body">
                <div className="hero">
                    <div className="boxHeading">
                        <p className="heading"> Dari Menemukan, Buat Perubahan </p>
                    </div>
                    <div className="button">
                        <a href="#about" className="textButtonHero"> Menemukan Barang </a>
                    </div>
                    <div className="button">
                        <a href="#mencariBrg" className="textButtonHero"> Mencari Barang</a>
                    </div>
                </div>
                <DaftarBrg/>
                <div className="aboutHome">
                    <p>Ambil Peran,<br/> Mulai Kebaikan </p>
                    <div className="aboutHomeText">
                        <h5> Anda membantu untuk orang lain,<br/> orang lain membantu untuk anda.</h5>
                    </div>
                    <div className="aboutHomeButton">
                        <div className="aboutHomeButtonText">
                            <p className="textButtonHero">KENAPA LOST&FOUND?</p>
                        </div>
                    </div>
                </div>
                <div className="Tips">
                    <h2>TIPS MENJAGA BARANG</h2>
                    <div className="square">
                        RAHASIA
                    </div>
                    <div className="square">
                        RAHASIA
                    </div>
                    <div className="square">
                        RAHASIA  
                    </div>
                    <div className="square">
                        RAHASIA
                    </div>
                </div>
            </div>
        </div>
    )
}
