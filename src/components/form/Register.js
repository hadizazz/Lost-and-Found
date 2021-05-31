import React, { Component } from "react";
import api from "../../services/apiClient";
import Footer from "../footer/Footer";

export class Register extends Component {
  state = {
    name: "",
    // setJudul: "",
    email: "",
    // setFoto: null,
    password: "",
    // setKeterangan: "",
    password_confirmation: "",
    // setLokasi: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  upload = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.set("name", this.state.name);
    data.set("email", this.state.email);
    data.set("password", this.state.password);
    data.set("password_confirmation", this.state.password_confirmation);

    api().get("/sanctum/csrf-cookie");
    api()
      .post("/register", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .then(() => {
        return (window.location.href = "/home");
      });
  };

  render() {
    const { name, email, password, password_confirmation } = this.state;
    return (
      <div>
        <div className="registerDisplay">
          <div className="registerBox">
            <img
              className="registerImg"
              src="https://i.ibb.co/kD3nXcP/Lost-Found-Box.jpg"
              alt="LostFound"
            ></img>
          </div>
          <div className="registerContainer">
            <form>
              <div className="registerRow">
                <p className="titleRegister">Sign Up</p>
                <div className="lineRegister"></div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  onChange={this.changeHandler}
                  value={name}
                  required
                ></input>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.changeHandler}
                  value={email}
                  required
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.changeHandler}
                  value={password}
                  required
                ></input>
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Konfirmasi Password"
                  onChange={this.changeHandler}
                  value={password_confirmation}
                  required
                ></input>
                <input
                  type="submit"
                  value="Register"
                  onClick={this.upload}
                ></input>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
