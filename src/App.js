import React from "react";
import BodyContainer from './pages/LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/" component={BodyContainer}></Route>
      <Route path="/about" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </Router>
    </div>
    
  );
}

export default App;
