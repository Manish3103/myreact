import "./App.css";
import Nav from "./component/Nav";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";
import About from "./component/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("dark mode enable");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("null");
    }, 1500);
  };
  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("dark mode enable");
      showAlert("dark mode enable", "success");
    } else {
      setMode("light");
      setBtnText("light mode enable");
      showAlert("light mode enable", "success");
    }
  };
  return (
    <>
        <BrowserRouter>
      
        <Nav mode={mode} btnText={btnText} darkMode={darkMode} />
        <Alert alert={alert} />

      
        
        <Routes>
          <Route path="/" element={<TextForm/>} />
          <Route path="/About" element={<About/>} />
          
          
        </Routes>
      
      
    </BrowserRouter>
       
      
    </>
  );
}

export default App;
