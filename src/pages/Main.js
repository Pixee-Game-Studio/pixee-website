import Home from './Home';
import Studio from './Studio';
import Games from './Games';
import Contact from './Contact';
import BarbWarn from '../assets/Images/barb-warn.webp';
import LongAway from './Games/LongAway';

export default function Main() {
  return (
    <main className="flex-grow">
      <Home />
      <Studio />
      <img src={BarbWarn} className="w-full py-10" alt="Bar warn" />
      <Games />
      <LongAway />
      <img src={BarbWarn} alt="Bar warn" className="relative z-30 w-full pb-10" aria-hidden="true" role="presentation" />
      <Contact />
    </main>
  );
}
