import React, { Component } from "react";
import { FooterContainer } from "../container/footer";

export class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <div className="pengumuman">
          <button className="buttonPengumuman">+ Buat Pengumuman</button>
        </div>
        <div className="pengumuman">
          <div className="barangContainer">
            <img alt="barang1" src="https://i.ibb.co/RC9Kfv3/09fb4d2c-e9d4-4949-b26d-969983c4bd54-169-1.png"></img>
            <p className="judulBarang">Laptop Asus Hitam</p>
            <p className="deskripsi">Ditemukan laptop ... </p>
            <button className="detailButton">Detail</button>
          </div>
          <div className="barangContainer">
            <img alt="barang1" src="https://i.ibb.co/RC9Kfv3/09fb4d2c-e9d4-4949-b26d-969983c4bd54-169-1.png"></img>
            <p className="judulBarang">Laptop Asus Hitam</p>
            <p className="deskripsi">Ditemukan laptop ... </p>
            <button className="detailButton">Detail</button>
          </div>
          <div className="barangContainer">
            <img alt="barang1" src="https://i.ibb.co/RC9Kfv3/09fb4d2c-e9d4-4949-b26d-969983c4bd54-169-1.png"></img>
            <p className="judulBarang">Laptop Asus Hitam</p>
            <p className="deskripsi">Ditemukan laptop ... </p>
            <button className="detailButton">Detail</button>
          </div>
          <div className="barangContainer">
            <img alt="barang1" src="https://i.ibb.co/RC9Kfv3/09fb4d2c-e9d4-4949-b26d-969983c4bd54-169-1.png"></img>
            <p className="judulBarang">Laptop Asus Hitam</p>
            <p className="deskripsi">Ditemukan laptop ... </p>
            <button className="detailButton">Detail</button>
          </div>
          <div className="barangContainer">
            <img alt="barang1" src="https://i.ibb.co/RC9Kfv3/09fb4d2c-e9d4-4949-b26d-969983c4bd54-169-1.png"></img>
            <p className="judulBarang">Laptop Asus Hitam</p>
            <p className="deskripsi">Ditemukan laptop ... </p>
            <button className="detailButton">Detail</button>
          </div>
          <div className="barangContainer">
            <img alt="barang1" src="https://i.ibb.co/RC9Kfv3/09fb4d2c-e9d4-4949-b26d-969983c4bd54-169-1.png"></img>
            <p className="judulBarang">Laptop Asus Hitam</p>
            <p className="deskripsi">Ditemukan laptop ... </p>
            <button className="detailButton">Detail</button>
          </div>
        </div>
        <FooterContainer></FooterContainer>
      </div>
    );
  }
}
