import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import Footer from "../components/footer/Footer";
// import { Link } from "react-router-dom";
// import Container from '../components/landingPage/Container';
import Container2 from "../components/landingPage/Container2";

const triggerText = "BARANGKU";
const onSubmit = (event) => {
  event.preventDefault();
};

export default class Detail extends Component {
  state = {
    items: [],
  };

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
        <Navbar />
        <div className="wrapperDet">
          {/* <div className="rowDet"> */}
          {/* <div className="pengumuman"> */}
          <div className="rowDet">
            <img className="imgDet" alt={items.id} src={url + items.foto}></img>
          </div>
          <div className="descBoxDet">
            <p className="titleDet">{items.judul}</p>
            <p className="subtitleDet">Keterangan :</p>
            <p className="descBrgDet">{items.keterangan}</p>
            <p className="subtitleDet">Lokasi :</p>
            <p className="descBrgDet">{items.lokasi}</p>
            {/* <Link
              to="/home/:id"
              className="BtnDet"
              style={{ textDecoration: "none" }}
            >
              EDIT
            </Link> */}

            <Container2
              onClick={onSubmit}
              triggerText={triggerText}
              className="BtnDet"
              style={{ textDecoration: "none" }}
            >
              BARANGKU
            </Container2>
          </div>
        </div>
        <Footer />
      </div>
      // </div>
    );
  }
}
