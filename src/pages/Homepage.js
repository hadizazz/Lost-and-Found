import React, { Component } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/items")
      .then((res) => {
        console.log(res);
        this.setState({ items: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { items } = this.state;
    console.log(items);
    let url = "http://localhost:8000/";
    return (
      <div>
        <div className="home">
          <Navbar />
          <div className="pengumuman">
            <a href="/home/create" className="buttonPengumuman">
              Buat Pengumuman
            </a>
          </div>
          <div className="pengumuman">
            {items.length
              ? items.map((item) => (
                  <div>
                    <div className="barangContainer">
                      <img
                        className="barangHilang"
                        alt={item.id}
                        src={url + item.foto}
                      ></img>
                      <p className="judulBarang">{item.judul}</p>
                      {/* <p className="deskripsi">{item.keterangan}</p> */}
                      <a href={"/home/"+item.id}
                        className="detailButton"
                      >
                        Detail
                      </a>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
