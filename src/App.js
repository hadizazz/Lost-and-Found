import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import { Pengumuman, Register } from "./pages/Pengumuman";
import Detail from "./pages/Detail"

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      <Route exact path="/" component={LandingPage}></Route>
      {/* <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route> */}
      <Route exact path="/home" component={Homepage}></Route>
      <Route exact path="/home/create" component={Pengumuman}></Route>
      <Route exact path="/home/:id" component={Detail}></Route>
    </Router>
      </div>
    );
  }
}

export default App;
