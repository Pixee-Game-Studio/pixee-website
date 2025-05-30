import React from "react";
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home";
import Studio from './pages/Studio'
import Games from './pages/Games'
import BarbWarn from './assets/Images/barb-warn.png'
import { Routes, Route } from "react-router-dom";
import LongAway from "./pages/Games/LongAway";
import TheLastOfUs from "./pages/Games/TheLastOfUs";
import RedDead from "./pages/Games/RedDead";

function App() {
  return (
    <div className="h-screen bg-cover bg-center">
      <div className="inset-0 bg-noise-bg bg-repeat">
        <Header />
        <div>
          <Home />
          <Studio />
          <img src={BarbWarn} className="w-full py-10" />
          <Games />
            <Routes>
            <Route path="/" element={<LongAway />} />
            <Route path="/thelastofus" element={<TheLastOfUs />} />
            <Route path="/reddead" element={<RedDead />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
