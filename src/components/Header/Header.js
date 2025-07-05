import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import audio from '../../assets/the-price-abby-holliday-musicbed.mp3'

export default function Navbar() {

  const audioRef = useRef(null)
  const [isSoundPlay, setIsSoundPlay] = useState(false)

  const playSoundHandler = () => {
    if (isSoundPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSoundPlay(!isSoundPlay);
  }

  return (
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
          <div className='flex gap-4 items-center justify-center'>
            <a href='#' className='relative text-white ml-2'>
              <span className='group hover:transition-all before:text-white after:text-white font-IMBPlex text-base before:content-["["] before:absolute before:-left-1 before:-translate-x-2 after:content-["]"] after:absolute after:-right-1 after:translate-x-2 hover:before:-translate-x-2.5 hover:after:translate-x-2.5'>
                <span className='transition-colors text-secondery-color group-hover:animate-wiggle'>E</span>
                <span className='transition-colors text-secondery-color  group-hover:animate-wiggle3'>N</span>
              </span>
            </a>
            <h1 className='text-base'>FN</h1>
          </div>
          <audio ref={audioRef} src={audio}></audio>
        </div>
      </div>
      <hr className='border-[#454545]' />
    </header>
  )
}
