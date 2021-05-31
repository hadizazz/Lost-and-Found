import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import api from "../services/apiClient";

export default class Profile extends Component {
  state = {
    question1: "",
    question2: "",
    question3: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  upload = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.set("question1", this.state.question1);
    data.set("question2", this.state.question2);
    data.set("question3", this.state.question3);

    api().get("/sanctum/csrf-cookie");
    api()
      .post("/api/barangku", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const { question1, question2, question3 } = this.state;
    return (
      <div className="loginContainer">
        <form>
          <div className="loginRow">
            <div>
              <label name="">Sebutkan Merk Lengkap Barang</label>
              <input
                type="text"
                name="question1"
                placeholder="Contoh: Sepatu Merk A. Seri B. Spesial Edition"
                value={question1}
                onChange={(event) =>
                  this.setState({ question1: event.target.value })
                }
                required
              ></input>
            </div>
            <div className="borderBoxLogin">
              <label name="">Sebutkan Ciri-Ciri Detail Barang ini!</label>
              <input
                type="text"
                name="question2"
                placeholder="Contoh: Ukuran 43, Lecet Bagian Kanan"
                value={question2}
                onChange={(event) =>
                  this.setState({ question2: event.target.value })
                }
                required
              ></input>
            </div>
            <div>
              <label name="">Sebutkan Tanda/Nomor</label>
              <input
                type="text"
                name="question3"
                placeholder="Contoh: Nomor Seri Pembelian, Tanda Stiker"
                value={question3}
                onChange={(event) =>
                  this.setState({ question3: event.target.value })
                }
                required
              ></input>
            </div>
          </div>
          <div className="loginRow2">
            <div className="login">
              <input
                onClick={this.upload}
                type="submit"
                value="Barangku"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
