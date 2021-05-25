import React, { Component } from "react";
import Footer from "../footer/Footer";

export class Register extends Component {
  render() {
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
            <form action="">
              <div className="registerRow">
                <p className="titleRegister">Sign Up</p>
                <div className="lineRegister"></div>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Nama Lengkap"
                  required
                ></input>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                ></input>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                ></input>
                <input
                  type="text"
                  name="number"
                  placeholder="No HP"
                  required
                ></input>
                <input type="submit" value="Register"></input>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
