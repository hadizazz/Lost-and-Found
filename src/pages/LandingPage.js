import React, { Component } from "react";
import { FooterContainer } from "../container/footer";

export default class BodyContainer extends Component {
  render() {
    return (
      //Hero
      <div>
        <div className="body">
          <div className="hero">
            <div className="boxHeading">
              <p className="heading">Dari Menemukan, Buat Perubahan</p>
            </div>
            <div className="buttonHero">
              <div className="button1">
                <div className="vertical-center">
                  <a href="/about" className="textButtonHero">
                    Menemukan Barang
                  </a>
                </div>
              </div>
              <div className="button1">
                <p className="textButtonHero">Mencari Barang</p>
              </div>
            </div>
          </div>
          {/* Hero */}
          <div className="aboutHome">
            <div>
              <p>
                Ambil Peran, <br></br>Memulai Kebaikan
              </p>
            </div>
            <div className="aboutHomeText">
              <p>
                Anda membantu untuk orang lain,<br></br> orang lain membantu
                untuk anda.
              </p>
            </div>
            <div className="aboutHomeButton">
              <div className="aboutHomeButtonText">
                <p className="textButtonHero">KENAPA LOST&FOUND?</p>
              </div>
            </div>
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}
