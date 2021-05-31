import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import Pengumuman from "./pages/Pengumuman";
import Detail from "./pages/Detail";
import { Register } from "./components/form/Register";
// import axios from "axios";
// import Contact from "./components/Contact";
// import Login from "./services/auth";

const App = () => {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route path="/register" component={Register}></Route>
            <Route exact path="/home" component={Homepage}></Route>
            <Route path="/home/create" component={Pengumuman}></Route>
            <Route path="/home/:id" component={Detail}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
