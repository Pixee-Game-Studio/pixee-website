import React from "react";
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen relative bg-home-bg bg-cover bg-center">
      <div className="absolute inset-0 bg-noise-bg z-10 bg-repeat">
        <Header />
        <div className="">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
