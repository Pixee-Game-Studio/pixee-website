import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import './index.css';

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-cover bg-center text-white">
      <div className="pointer-events-none absolute inset-0 z-30 bg-noise-bg bg-repeat opacity-70"></div>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
