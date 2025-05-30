import React, { useRef, useState } from 'react'
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
    <header className='text-primary-color px-28 pt-5 font-IMBPlex text-base'>
      <div className='flex items-center justify-between h-14'>
        <div>
          <h1 className='text-lg'>Logo</h1>
        </div>
        <ul className='inline-flex absolute left-1/2 transform -translate-x-1/2 space-x-6'>
          <a href="#" class="relative text-lg font-IMBPlex inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
            HOME
          </a>
          <a href="#" class="relative text-lg font-IMBPlex inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
            STUDIO
          </a>
          <a href="#" class="relative text-lg font-IMBPlex inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
            GAMES
          </a>
          <a href="#" class="relative text-lg font-IMBPlex inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-secondery-color before:translate-y-[-50%] before:transition-all before:duration-300 hover:before:w-full">
            CONTACT
          </a>
        </ul>
        <div className='flex items-center space-x-4'>
          <button className='flex items-center justify-center text-lg gap-2' onClick={() => playSoundHandler()}>
            <span>
              <span className='transition-colors group-hover:animate-wiggle'>S</span>
              <span className='transition-colors group-hover:animate-wiggle'>O</span>
              <span className='transition-colors'>U</span>
              <span className='transition-colors group-hover:animate-wiggle2'>N</span>
              <span className='transition-colors'>D</span>
            </span>
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
          <h2><span className='text-secondery-color text-lg'>EN</span>/FN</h2>
          <audio ref={audioRef} src={audio}></audio>
        </div>
      </div>
      <hr className='border-[#454545]' />
    </header>
  )
}
