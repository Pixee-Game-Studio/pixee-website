import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import audio from '../../assets/the-price-abby-holliday-musicbed.mp3';
import YoutubeImg from '../../assets/Images/youtube.png';
import SteamImg from '../../assets/Images/steam.png';
import InstagramImg from '../../assets/Images/instagram.png';
import DiscordImg from '../../assets/Images/discord.png';
import BarbWarn from '../../assets/Images/barb-warn.webp';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Header() {
  const audioRef = useRef(null);
  const [isSoundPlay, setIsSoundPlay] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(true);

  const navHandler = () => {
    setIsOpenNav((prev) => !prev);
  };

  const playSoundHandler = () => {
    if (!audioRef.current) return;
    if (isSoundPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSoundPlay((prev) => !prev);
  };

  return (
    <>
      <header className="container pt-5 font-IMBPlex text-base text-primary-color">
        <div className="flex h-14 items-center justify-between">
          <h1 className="text-lg">Logo</h1>
          <ul className="absolute left-1/2 hidden -translate-x-1/2 transform space-x-6 lg:inline-flex">
            <a
              href="#home"
              className="relative inline-block font-IMBPlex text-lg before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:translate-y-[-50%] before:bg-secondery-color before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
            >
              HOME
            </a>
            <a
              href="#studio"
              className="relative inline-block font-IMBPlex text-lg before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:translate-y-[-50%] before:bg-secondery-color before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
            >
              STUDIO
            </a>
            <a
              href="#games"
              className="relative inline-block font-IMBPlex text-lg before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:translate-y-[-50%] before:bg-secondery-color before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
            >
              GAMES
            </a>
            <a
              href="#contact"
              className="relative inline-block font-IMBPlex text-lg before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:translate-y-[-50%] before:bg-secondery-color before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
            >
              CONTACT
            </a>
          </ul>
          <div className="flex items-center space-x-5">
            <button
              className="flex items-center justify-center gap-2 text-lg"
              onClick={() => playSoundHandler()}
            >
              <span className="text-base">SOUND</span>
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-1 w-[2px] rounded-3xl bg-white ${
                      isSoundPlay ? 'animate-soundWave rounded-[1px]' : ''
                    }`}
                    style={{
                      animationDuration: `${0.8 + i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>
            </button>
            <div className="hidden items-center justify-center gap-4 sm:flex">
              <Link
                to="#"
                className='group relative ml-2 font-IMBPlex text-base text-white before:absolute before:-left-1 before:-translate-x-2 before:text-white before:content-["["] after:absolute after:-right-1 after:translate-x-2 after:text-white after:content-["]"] hover:transition-all hover:before:-translate-x-2.5 hover:after:translate-x-2.5'
              >
                <span className="text-secondery-color transition-colors group-hover:animate-wiggle">
                  E
                </span>
                <span className="text-secondery-color transition-colors group-hover:animate-wiggle3">
                  N
                </span>
              </Link>
              <h1 className="text-base">FN</h1>
            </div>
            <Link
              to="/"
              onClick={() => navHandler()}
              className="flex items-center justify-center font-TestSohneMono sm:hidden"
            >
              <div className="relative ml-2 text-white">
                {isOpenNav ? (
                  <span className='group font-IMBPlex text-lg before:absolute before:-left-1 before:-translate-x-2 before:text-white before:content-["["] after:absolute after:-right-1 after:translate-x-2 after:text-white after:content-["]"] hover:transition-all hover:before:-translate-x-2.5 hover:after:translate-x-2.5'>
                    <span className="text-base text-secondery-color transition-colors group-hover:animate-wiggle sm:text-lg">
                      O
                    </span>
                    <span className="text-base text-secondery-color transition-colors sm:text-lg">
                      P
                    </span>
                    <span className="text-base text-secondery-color transition-colors sm:text-lg">
                      E
                    </span>
                    <span className="text-base text-secondery-color transition-colors group-hover:animate-wiggle3 sm:text-lg">
                      N
                    </span>
                  </span>
                ) : (
                  <span className='group font-IMBPlex text-lg before:absolute before:-left-1 before:-translate-x-2 before:text-white before:content-["["] after:absolute after:-right-1 after:translate-x-2 after:text-white after:content-["]"] hover:transition-all hover:before:-translate-x-2.5 hover:after:translate-x-2.5'>
                    <span className="text-base text-secondery-color transition-colors group-hover:animate-wiggle sm:text-lg">
                      C
                    </span>
                    <span className="text-base text-secondery-color transition-colors sm:text-lg">
                      L
                    </span>
                    <span className="text-base text-secondery-color transition-colors sm:text-lg">
                      O
                    </span>
                    <span className="text-base text-secondery-color transition-colors group-hover:animate-wiggle3 sm:text-lg">
                      S
                    </span>
                    <span className="text-base text-secondery-color transition-colors group-hover:animate-wiggle3 sm:text-lg">
                      E
                    </span>
                  </span>
                )}
              </div>
              <div className="ml-4 text-base">MENU</div>
            </Link>
            <audio ref={audioRef} src={audio}></audio>
          </div>
        </div>
        {isOpenNav ? (
          <hr className="border-[#454545] px-[20px]" />
        ) : (
          <img src={BarbWarn} className="w-full" alt="Bar warn" />
        )}
      </header>
      <div className={isOpenNav ? 'hidden' : 'nav container mt-3 flex flex-col gap-5'}>
        <ul className="flex transform flex-col space-y-2 text-white">
          <li>
            <a
              href="#home"
              className="relative font-IMBPlex text-xl before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:translate-y-[-50%] before:bg-secondery-color before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
            >
              HOME
            </a>
          </li>
          <hr className="w-full border-[#717171]" />
          <li>
            <a
              href="#studio"
              className="relative font-IMBPlex text-xl before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:translate-y-[-50%] before:bg-secondery-color before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
            >
              STUDIO
            </a>
          </li>
          <hr className="w-full border-[#717171]" />
          <li>
            <a
              href="#games"
              className="relative font-IMBPlex text-xl before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:translate-y-[-50%] before:bg-secondery-color before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
            >
              GAMES
            </a>
          </li>
          <hr className="w-full border-[#717171]" />
          <li>
            <a
              href="#contact"
              className="relative font-IMBPlex text-xl before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:translate-y-[-50%] before:bg-secondery-color before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={SteamImg}
              className="w-6 cursor-pointer transition-colors hover:text-secondery-color"
              alt="steam icon"
            />
            <img
              src={YoutubeImg}
              className="w-7 cursor-pointer transition-colors hover:text-secondery-color"
              alt="youtube icon"
            />
            <img
              src={InstagramImg}
              className="w-6 cursor-pointer transition-colors hover:text-secondery-color"
              alt="instagram icon"
            />
            <img
              src={DiscordImg}
              className="w-7 cursor-pointer transition-colors hover:text-secondery-color"
              alt="discord icon"
            />
          </div>
          <div className="flex gap-4">
            <Link to="#" className="relative ml-2 text-white">
              <span className='group font-IMBPlex text-base before:absolute before:-left-1 before:-translate-x-2 before:text-white before:content-["["] after:absolute after:-right-1 after:translate-x-2 after:text-white after:content-["]"] hover:transition-all hover:before:-translate-x-2.5 hover:after:translate-x-2.5'>
                <span className="text-secondery-color transition-colors group-hover:animate-wiggle">
                  E
                </span>
                <span className="text-secondery-color transition-colors group-hover:animate-wiggle3">
                  N
                </span>
              </span>
            </Link>
            <h1 className="text-base text-white">FN</h1>
          </div>
        </div>
      </div>
    </>
  );
}
