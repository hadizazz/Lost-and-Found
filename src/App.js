import './App.css';
import Navbar from './components/Navbar'
import Grid from './components/Grid';
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import CustomBtn from './components/CustomBtn'
import DaftarBrg from './components/DaftarBrg'

// import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
// import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
// import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
// import ImportExportIcon from '@material-ui/icons/ImportExport';
// import ComputerIcon from '@material-ui/icons/Computer';
// import HttpIcon from '@material-ui/icons/Http';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <DaftarBrg/>
    </div>
  );
}

export default App;
