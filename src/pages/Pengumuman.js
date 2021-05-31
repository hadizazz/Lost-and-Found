import React, { Component } from "react";
import api from "../services/apiClient";

export default class Pengumuman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      judul: "",
      // setJudul: "",
      foto: null,
      // setFoto: null,
      keterangan: "",
      // setKeterangan: "",
      lokasi: "",
      // setLokasi: "",
      kontak: "",
      // setKontak: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileChange = (e) => {
    this.setState({ foto: e.target.files[0] });
  };

  // handlePicInput(event) {
  //   let images = event.target.files;
  //   let fd = new FormData();
  //   fd.append("images", images);
  // }
  // submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   axios
  //     .post("http://127.0.0.1:8000/api/items", this.state)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  upload = (e) => {
    e.preventDefault();
    if (this.state.foto) {
      let data = new FormData();
      data.set("judul", this.state.judul);
      data.append("foto", this.state.foto);
      data.set("keterangan", this.state.keterangan);
      data.set("lokasi", this.state.lokasi);
      data.set("kontak", this.state.kontak);

      api().get("/sanctum/csrf-cookie");
      api()
        .post("/api/items", data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        .then(() => {
          return (window.location.href = "/home");
        });
    }
  };

  // submitForm = () => {
  //   const formData = new FormData();
  //   formData.append("judul", judul);
  //   formData.append("keterangan", this.keterangan);
  //   formData.append("lokasi", lokasi);
  //   formData.append("kontak", kontak);
  //   formData.append("file", selectedFile);

  //   axios
  //     .post("http://127.0.0.1:8000/api/items", formData)
  //     .then((res) => {
  //       alert("File Upload success");
  //     })
  //     .catch((err) => alert("File Upload Error"));
  // };

  render() {
    const {
      judul,
      // setJudul,
      // foto,
      // setFoto,
      keterangan,
      // setKeterangan,
      lokasi,
      // setLokasi,
      kontak,
      // setKontak,
    } = this.state;
    return (
      <div>
        <div className="">
          <div className="registerContainer">
            <form
              className=""
              // method="POST"
              onSubmit="/home"
              // enctype="multipart/form-data"
            >
              <div className="registerRow">
                <p className="titleRegister">Pengumuman</p>
                <div className="lineRegister"></div>
                <input
                  type="text"
                  name="judul"
                  placeholder="Nama Barang Hilang"
                  value={judul}
                  onChange={this.changeHandler}
                  required
                ></input>
                {/* <FileUploaded
                onFileSelectSuccess={(file) => setFoto(file)}
                onFileSelectError={({ error }) => alert(error)}
              /> */}
                <input
                  type="file"
                  name="foto"
                  id="foto"
                  placeholder="Choose File"
                  onChange={this.handleFileChange}
                ></input>
                <input
                  type="text"
                  name="keterangan"
                  placeholder="Keterangan"
                  value={keterangan}
                  onChange={this.changeHandler}
                  required
                ></input>
                <input
                  type="text"
                  name="lokasi"
                  placeholder="Lokasi ditemukan"
                  value={lokasi}
                  onChange={this.changeHandler}
                  required
                ></input>
                <input
                  type="text"
                  name="kontak"
                  placeholder="No HP"
                  value={kontak}
                  onChange={this.changeHandler}
                  required
                ></input>
                <input type="submit" onClick={this.upload}></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
