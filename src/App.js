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
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Pixee Studios</title>
        <meta
          name="description"
          content="Pixee Studio creates immersive horror games for PC. Dive into our spine-chilling worlds and experience fear like never before."
        />
        <link rel="canonical" href="https://pixeestudio.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Pixee Studio | Horror PC Game Developers" />
        <meta
          property="og:description"
          content="Enter terrifying and immersive horror universes created by Pixee Studio. Available now on PC"
        />
        <meta property="og:image" content="https://pixeestudio.com/assets/og-banner.jpg" />
        <meta property="og:url" content="https://pixeestudio.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pixee Studio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pixee Studio | Horror PC Game Developers" />
        <meta
          name="twitter:description"
          content="Explore dark and atmospheric PC horror games from Pixee Studio. Dare to play?"
        />
        <meta name="twitter:image" content="https://pixeestudio.com/assets/twitter-banner.jpg" />
      </Helmet>

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
    </>
  );
}

export default App;
