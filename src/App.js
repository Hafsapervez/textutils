import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import TextBody from './components/TextBody';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(37 45 51)';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
       document.title="TextUtils-light Mode"
    }
  }
  return (
    <>
    <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextBody showAlert={showAlert} 
            heading="Enter Text to analyze "mode={mode} toggleMode={toggleMode}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </> 
  );
}
export default App;