import React from "react";
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home";
import Studio from './pages/Studio'
import Games from './pages/Games'
import BarbWarn from './assets/Images/barb-warn.png'

function App() {
  return (
    <div className="h-screen bg-home-bg bg-cover bg-center">
      <div className="inset-0 bg-noise-bg bg-repeat">
        <Header />
        <div className="">
          <Home />
          <Studio />
          <img src={BarbWarn} className="w-full py-10" />
          <Games />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
