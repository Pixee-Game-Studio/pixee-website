import React from "react";
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home";
import Studio from './pages/Studio'
import Games from './pages/Games'
import Contact from './pages/Contact'
import BarbWarn from './assets/Images/barb-warn.png'
import { Routes, Route } from "react-router-dom";
import LongAway from "./pages/Games/LongAway";
import TheLastOfUs from "./pages/Games/TheLastOfUs";
import RedDead from "./pages/Games/RedDead";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <div className="bg-noise-bg bg-repeat">
        <Header />
        <div>
          <Home />
          <Studio />
          <img src={BarbWarn} className="w-full py-10" alt="Bar warn image" />
          <Games />
          <Routes>
            <Route path="/" element={<LongAway />} />
            <Route path="/thelastofus" element={<TheLastOfUs />} />
            <Route path="/reddead" element={<RedDead />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <img src={BarbWarn} alt="Bar warn image" className="w-full pb-10" aria-hidden="true" role="presentation" />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
