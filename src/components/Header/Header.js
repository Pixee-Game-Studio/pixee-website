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
          <h1>Logo</h1>
        </div>
        <ul className='inline-flex gap-6'>
          <a href='#' className='relative'>
            <span className='group hover:transition-all before:text-secondery-color after:text-secondery-color font-IMBPlex text-base before:content-["["] before:absolute before:left-0 before:top-0 before:-translate-x-2.5 after:content-["]"] after:absolute after:right-0 after:top-0 after:translate-x-2.5 hover:before:-translate-x-3 hover:after:translate-x-3'>
              <span data-letter={'H'} className='transition-colors group-hover:animate-wiggle'>H</span>
              <span data-letter={'O'} className='transition-colors'>O</span>
              <span data-letter={'M'} className='transition-colors group-hover:animate-wiggle2'>M</span>
              <span data-letter={'E'} className='transition-colors'>E</span>
            </span>
          </a>
          <a href="#">
          <span className='group font-IMBPlex text-base'>
              <span data-letter={'H'} className='transition-colors group-hover:animate-wiggle3'>S</span>
              <span data-letter={'O'} className='transition-colors'>T</span>
              <span data-letter={'M'} className='transition-colors group-hover:animate-wiggle2'>U</span>
              <span data-letter={'E'} className='transition-colors'>D</span>
              <span data-letter={'E'} className='transition-colors'>I</span>
              <span data-letter={'E'} className='transition-colors group-hover:animate-wiggle'>O</span>
            </span>
          </a>
          <a href="#">
            <span className='group font-IMBPlex text-base'>
              <span data-letter={'G'} className='transition-colors group-hover:animate-wiggle'>G</span>
              <span data-letter={'A'} className='transition-colors group-hover:animate-wiggle'>A</span>
              <span data-letter={'M'} className='transition-colors'>M</span>
              <span data-letter={'E'} className='transition-colors group-hover:animate-wiggle2'>E</span>
              <span data-letter={'E'} className='transition-colors'>S</span>
            </span>
          </a>
          <a href="#">
            <span className='group font-IMBPlex text-base'>
              <span data-letter={'C'} className='transition-colors group-hover:animate-wiggle3'>C</span>
              <span data-letter={'O'} className='transition-colors group-hover:animate-wiggle'>O</span>
              <span data-letter={'N'} className='transition-colors'>N</span>
              <span data-letter={'T'} className='transition-colors group-hover:animate-wiggle2'>T</span>
              <span data-letter={'A'} className='transition-colors group-hover:animate-wiggle2'>A</span>
              <span data-letter={'A'} className='transition-colors group-hover:animate-wiggle1'>C</span>
              <span data-letter={'C'} className='transition-colors'>T</span>
              <span data-letter={'T'} className='transition-colors group-hover:animate-wiggle'>S</span>
            </span>
          </a>
        </ul>
        <div className='flex gap-5'>
          <button className='flex items-center justify-center gap-2' onClick={() => playSoundHandler()}>
            <span>
              <span data-letter={'S'} className='transition-colors group-hover:animate-wiggle'>S</span>
              <span data-letter={'O'} className='transition-colors group-hover:animate-wiggle'>O</span>
              <span data-letter={'U'} className='transition-colors'>U</span>
              <span data-letter={'N'} className='transition-colors group-hover:animate-wiggle2'>N</span>
              <span data-letter={'D'} className='transition-colors'>D</span>
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
          <h2><span className='text-secondery-color'>EN</span>/FN</h2>
          <audio ref={audioRef} src={audio}></audio>
        </div>
      </div>
      <hr className='border-[#454545]' />
    </header>
  )
}
