import React, { Component } from "react";


export default class Login extends Component {
  render() {
    return (
      <div className="loginContainer">
        <form action="/">
          <div className="loginRow">
            <div className="borderBoxLogin">
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              ></input>
            </div>
          </div>
          <div className="loginRow2">
            <div className="checkbox">
              <input type="checkbox"></input>
              <p className="rememberMe">Remember Me</p>
            </div>
            <div className="login">
              <input type="submit" value="Login"></input>
            </div>
            <a href="/forget" className="forgotPassword">
              Forgot Password?
            </a>
          </div>
          <div className="loginRow2">
            OR
            <div className="facebook">
              <a href="/facebook" class="facebookText">Login with Facebook</a> 
            </div>
            <div className="twitter">
              <a href="/twitter" class="twitterText">Login with Twitter</a> 
            </div>
          </div>
        </form>
      </div>
    );
  }
}
