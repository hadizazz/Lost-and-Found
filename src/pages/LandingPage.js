import React from "react";
import DaftarBrg from "../components/landingPage/DaftarBrg";
import "../index.css";
import Navbar from "../components/navbar/Navbar";
import TotalBrg from "../components/landingPage/TotalBrg";
import Footer from "../components/footer/Footer";


const landingPage = (props) => {
  return (
    <div>
      <Navbar {...props}/>
      <div className="body">
        <div className="hero">
          <div className="boxHeading">
            <p className="heading">
              <span className="typed-words">
                Dari Menemukan, Buat Perubahan
              </span>
            </p>
          </div>
          <div className="button">
            <a href="/home" className="textButtonHero">
              {" "}
              Menemukan Barang{" "}
            </a>
          </div>
          
          <div className="button">
            <a href="/home" className="textButtonHero">
              {" "}
              Mencari Barang
            </a>
          </div>
        </div>
        <DaftarBrg />
        <div className="aboutHome">
          <p>
            Ambil Peran,
            <br /> Mulai Kebaikan{" "}
          </p>
          <div className="aboutHomeText">
            <h5>
              {" "}
              Anda membantu untuk orang lain,
              <br /> orang lain membantu untuk anda.
            </h5>
          </div>
          <div className="aboutHomeButton">
            <div className="aboutHomeButtonText">
              <p className="textButtonHero">KENAPA LOST&FOUND?</p>
            </div>
          </div>
        </div>
        <div className="Tips">
          <h2 style={{color:'black'}}>TIPS MENJAGA BARANG</h2>
          <div className="squareBox">
            <div className="square">Siapkan Tempat Khusus</div>
            <div className="square">Kelompokkan Barang</div>
            <div className="square">Bersihkan Rumah</div>
            <div className="square">Pembiasaan Hidup Rapi</div>
          </div>
        </div>
        <TotalBrg />
        <Footer />
      </div>
    </div>
  );
}

export default landingPage;
