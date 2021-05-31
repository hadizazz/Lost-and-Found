import React from "react";
import { Component } from "react";
import { Login } from "../../services/auth";
import api from "../.././services/apiClient";

// const Form = (props) => {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     api()
//       .post("/login", {
//         email: email,
//         password: password,
//       })
//       .then((response) => {
//         console.log(response);
//         this.props.Login()
//       });
//   };
//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };
// export default Form;

class Form extends Component {
  state = {
    email: "",
    password: "",
    isChecked: false,
  };

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await api()
      .get("/sanctum/csrf-cookie")
      .then((response) => {
        api()
          .post("/login", {
            email: this.state.email,
            password: this.state.password,
          })
          .then((response) => {
            console.log(response);
            Login();
          });
      });
  }

  render = () => {
    const { email, password, isChecked } = this.state;
    return (
      <div className="loginContainer">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="loginRow">
            <div className="borderBoxLogin">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
                required
              ></input>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
                required
              ></input>
            </div>
          </div>
          <div className="loginRow2">
            <div className="checkbox">
              <input
                checked={isChecked}
                type="checkbox"
                id="remember"
                onChange={() => this.handleChecked()}
              ></input>
              <label
                onClick={() => this.handleChecked()}
                className="rememberMe"
              >
                Remember Me
              </label>
            </div>
            <div className="login">
              <input
                onClick={() => "/home"}
                type="submit"
                value="Login"
              ></input>
            </div>
            <a href="/forget" className="forgotPassword">
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="loginRow2">
          OR
          <div className="/">
            <a href="/register" className="signUp">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  };
}
export default Form;
