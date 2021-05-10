import './App.css';
import Navbar from './components/Navbar'
import Grid from './components/Grid';
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import CustomBtn from './components/CustomBtn'
import DaftarBrg from './components/DaftarBrg'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
import styled from "styled-components";
import TotalBrg from './components/TotalBrg'


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      {/* <DaftarBrg/> */}
      <TotalBrg/>
      <Footer/>
    </div>
  );
}

export default App;
