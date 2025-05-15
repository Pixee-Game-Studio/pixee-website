import React from "react";
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home";
import Studio from './pages/Studio'

function App() {
  return (
    <div className="h-screen relative bg-home-bg bg-cover bg-center">
      <div className="absolute inset-0 bg-noise-bg z-10 bg-repeat">
        <Header />
        <div>
          <Home />
          <div className="bg-gradient h-[100vh] relative">  
            <Studio />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
