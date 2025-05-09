import React from "react";
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen bg-home-bg bg-cover bg-center">
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
