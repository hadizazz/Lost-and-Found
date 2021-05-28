import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import Pengumuman from "./pages/Pengumuman";
import Detail from "./pages/Detail";
import Contact from "./components/Contact"
import Navbar from './components/navbar/Navbar'
import { Register } from "./components/form/Register";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Homepage}/>
          <Route exact path="/home/create" component={Pengumuman}/>
          <Route path="/home/:id" component={Detail}/>
          <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
};

export default App;
