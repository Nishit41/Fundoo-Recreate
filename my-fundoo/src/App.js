import logo from './logo.svg';
import './App.css';
import Signin from './pages/Signin/SignIn';
import Signup from './pages/Signup/Signup';
import TextField from "@mui/material/TextField";
import Header from './components/Header/Header';
import TakeNoteOne from './components/TakeNoteOne/TakeNoteOne';
import TakeNoteTwo from './components/TakeNoteTwo/TakeNoteTwo';
import TakeNoteThree from './components/TakeNoteThree/TakeNoteThree';
import Dashboard from './pages/Dashboard/Dashboard';
import Router from './components/Router/Router';
import store from './components/Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      
        {/* <Signin/> */}
       {/* <Signup/> */} 
       {/* <Dashboard/>  */}
       {/* <Header/> */}
            {/* <TakeNoteOne/>  */}
            {/* <TakeNoteTwo/>  */}
               <TakeNoteThree/>      

        {/* <Provider store = {store} >

        <Router />
         
        </Provider> */}

        
    </div>

  );
}


export default App;
