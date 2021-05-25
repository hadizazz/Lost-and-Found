import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import Pengumuman from "./pages/Pengumuman";
import Detail from "./pages/Detail";
import { Register } from "./components/form/Register";

const App = () => {
  return (
    <div className="App">
      <div>
        <Router>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/home" component={Homepage}></Route>
          <Route exact path="/home/create" component={Pengumuman}></Route>
          <Route exact path="/home/:id" component={Detail}></Route>
        </Router>
      </div>
    </div>
  );
};

export default App;
