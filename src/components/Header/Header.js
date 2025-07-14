import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import audio from '../../assets/the-price-abby-holliday-musicbed.mp3'
import YoutubeImg from '../../assets/Images/youtube.png'
import SteamImg from '../../assets/Images/steam.png'
import InstagramImg from '../../assets/Images/instagram.png'
import DiscordImg from '../../assets/Images/discord.png'
import BarbWarn from '../../assets/Images/barb-warn.png'

export default function Navbar() {

  const audioRef = useRef(null)
  const [isSoundPlay, setIsSoundPlay] = useState(false)
  const [isOpenNav, setIsOpenNav] = useState(true)

  const playSoundHandler = () => {
    if (isSoundPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSoundPlay(!isSoundPlay);
  }

  const navHandler = () => {
    setIsOpenNav(prev => !prev)
  }

  return (
    <>
      <header className='container text-primary-color pt-5 font-IMBPlex text-base'>
        <div className='flex items-center justify-between h-14'>
          <div>
            <h1 className='text-lg'>Logo</h1>
          </div>
          <ul className='hidden lg:inline-flex absolute left-1/2 transform -translate-x-1/2 space-x-6'>
            <Link to="#" className="relative text-lg font-IMBPlex inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
              HOME
            </Link>
            <Link to="#" className="relative text-lg font-IMBPlex inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
              STUDIO
            </Link>
            <Link to="#" className="relative text-lg font-IMBPlex inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
              GAMES
            </Link>
            <Link to="#" className="relative text-lg font-IMBPlex inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
              CONTACT
            </Link>
          </ul>
          <div className='flex items-center space-x-5'>
            <button className='flex items-center justify-center text-lg gap-2' onClick={() => playSoundHandler()}>
              <span className='text-base'>SOUND</span>
              <div className='flex items-center justify-center gap-1'>
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className={`bg-white w-[2px] h-1 rounded-3xl ${
                      isSoundPlay ? "animate-soundWave rounded-[1px]" : ""
                    }`}
                    style={{
                      animationDuration: `${0.8 + i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>
            </button>
            <div className='hidden sm:flex gap-4 items-center justify-center'>
              <a href='#' className='relative text-white ml-2'>
                <span className='group hover:transition-all before:text-white after:text-white font-IMBPlex text-base before:content-["["] before:absolute before:-left-1 before:-translate-x-2 after:content-["]"] after:absolute after:-right-1 after:translate-x-2 hover:before:-translate-x-2.5 hover:after:translate-x-2.5'>
                  <span className='transition-colors text-secondery-color group-hover:animate-wiggle'>E</span>
                  <span className='transition-colors text-secondery-color  group-hover:animate-wiggle3'>N</span>
                </span>
              </a>
              <h1 className='text-base'>FN</h1>
            </div>
            <a onClick={() => navHandler()} className='flex items-center justify-center sm:hidden font-TestSohneMono'>
              <Link to="#" className='relative text-white ml-2'>
                  {isOpenNav ? (
                     <span className='group hover:transition-all before:text-white after:text-white font-IMBPlex text-lg before:content-["["] before:absolute before:-left-1 before:-translate-x-2 after:content-["]"] after:absolute after:-right-1 after:translate-x-2 hover:before:-translate-x-2.5 hover:after:translate-x-2.5'>
                      <span className='transition-colors text-secondery-color text-base sm:text-lg group-hover:animate-wiggle'>O</span>
                      <span className='transition-colors text-secondery-color text-base sm:text-lg'>P</span>
                      <span className='transition-colors text-secondery-color text-base sm:text-lg'>E</span>
                      <span className='transition-colors text-secondery-color text-base sm:text-lg group-hover:animate-wiggle3'>N</span>             
                    </span>
                  ) : (
                    <span className='group hover:transition-all before:text-white after:text-white font-IMBPlex text-lg before:content-["["] before:absolute before:-left-1 before:-translate-x-2 after:content-["]"] after:absolute after:-right-1 after:translate-x-2 hover:before:-translate-x-2.5 hover:after:translate-x-2.5'>
                      <span className='transition-colors text-secondery-color text-base sm:text-lg group-hover:animate-wiggle'>C</span>
                      <span className='transition-colors text-secondery-color text-base sm:text-lg'>L</span>
                      <span className='transition-colors text-secondery-color text-base sm:text-lg'>O</span>
                      <span className='transition-colors text-secondery-color text-base sm:text-lg group-hover:animate-wiggle3'>S</span>             
                      <span className='transition-colors text-secondery-color text-base sm:text-lg group-hover:animate-wiggle3'>E</span>             
                    </span>
                  )}
              </Link>
              <Link className='ml-4 text-base'>MENU</Link>
            </a>
            <audio ref={audioRef} src={audio}></audio>
          </div>
        </div>
        {isOpenNav ? (
          <hr className='border-[#454545] px-[20px]' />
        ) : (
          <img src={BarbWarn} className="w-full" alt="Bar warn image" />
        )}
      </header>
      <div className={isOpenNav ? 'hidden' : 'flex flex-col gap-5 container mt-3'}>
        <ul className="flex flex-col transform text-white space-y-2">
          <li>
            <Link to="#" className="relative text-xl font-IMBPlex before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
              HOME
            </Link>
          </li>
          <hr className='w-full border-[#717171]' />
          <li>
            <Link to="#" className="relative text-xl font-IMBPlex before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
              STUDIO
            </Link>
          </li>
          <hr className='w-full border-[#717171]' />
          <li>
            <Link to="#" className="relative text-xl font-IMBPlex before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
              GAMES
            </Link>
          </li>
          <hr className='w-full border-[#717171]' />
          <li>
            <Link to="#" className="relative text-xl font-IMBPlex before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img src={SteamImg} className='w-7 cursor-pointer hover:text-secondery-color transition-colors' alt='steam image' />
            <img src={YoutubeImg} className='w-8 cursor-pointer hover:text-secondery-color transition-colors' alt='youtube image' />
            <img src={InstagramImg} className='w-6 cursor-pointer hover:text-secondery-color transition-colors' alt='instagram image' />
            <img src={DiscordImg} className='w-8 cursor-pointer hover:text-secondery-color transition-colors' alt='discord image' />
          </div>
          <div className='flex gap-4'>
            <a href='#' className='relative text-white ml-2'>
              <span className='group hover:transition-all before:text-white after:text-white font-IMBPlex text-base before:content-["["] before:absolute before:-left-1 before:-translate-x-2 after:content-["]"] after:absolute after:-right-1 after:translate-x-2 hover:before:-translate-x-2.5 hover:after:translate-x-2.5'>
                <span className='transition-colors text-secondery-color group-hover:animate-wiggle'>E</span>
                <span className='transition-colors text-secondery-color  group-hover:animate-wiggle3'>N</span>
              </span>
            </a>
            <h1 className='text-base text-white'>FN</h1>
          </div>
        </div>
      </div>
    </>
  )
}
