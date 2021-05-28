import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import Footer from "../components/footer/Footer";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/items/" + this.props.match.params.id)
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
    let url = "http://localhost:8001/";
    return (
      <div>
        <div className="home">
          <Navbar />
          <div className="pengumuman">
            <div>
              <img
                className="barangHilang"
                alt={items.id}
                src={url + items.foto}
              ></img>
              <p className="judulBarang">{items.judul}</p>
              <p className="deskripsi">{items.keterangan}</p>
              <p>{items.lokasi}</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
