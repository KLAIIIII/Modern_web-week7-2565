import React from "react";
import './App.css'
import HelloMessage from "./components/pages/HelloMessage";
import FooterPage from "./components/partials/Footer";
import HeaderPage from "./components/partials/Header";


const App = () => {

  return(
    <>
      <div className="App">
        <HelloMessage name="Mark" />
        <HelloMessage name="Woren" />
        <HelloMessage name="Jeff" />
        <FooterPage />
        <HeaderPage />
      </div>
    </>
    
  )
}

export default App