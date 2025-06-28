import React from 'react'
import BookImage from '../../assets/Images/book.png'
import PianoImage from '../../assets/Images/piano.png'
import Spotify from '../../assets/Images/spotify-img.svg'
import SoundCloud from '../../assets/Images/soundcloud-img.svg'
import Youtube from '../../assets/Images/youtube-img.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function LongAway() {
  return (
    <div>
      <div className='bg-story-page-bg'>
        <div className='container sm:h-[100vh] flex justify-between items-center gap-10 mx-auto w-full mt-32 py-14'>
          <div className=''>
            <div>
              <p className='font-BebasNeueRegular text-secondery-color text-sm sm:text-xl'>STOTY BOOK</p>
              <h2 className='font-BebasNeueRegular text-white text-xl sm:text-4xl'>THE PIXEE STORY</h2>
            </div>
            <p className='text-white max-w-[800px] text-xs sm:text-lg lg:text-xl leading-relaxed mt-4 mb-5 font-TestSohneMono'>At The trans-national MURKOFF CORPORATION tirelessly pushes the frontier of scientific research and development. Partnering with the greatest minds of tomorrow, Murkoff expands the reach of every branch of scientific inquiry, including gene therapy, behavioral psychology, information technology, and medicine. In the event of mistake or oversight, the MURKOFF INSURANCE MITIGATION DEPARTMENT comes in to minimize economic fallout. Mitigation Officers are damage control. They are not here to save lives or help people, they are here to make sure it doesn’t cost the company any more than it has to...</p>
            <a href='#' className='relative text-white ml-2'>
              <span className='group hover:transition-all before:text-secondery-color after:text-secondery-color font-IMBPlex text-xl sm:text-2xl before:content-["["] before:absolute before:-left-1 before:-translate-x-2.5 after:content-["]"] after:absolute after:-right-1 after:translate-x-2.5 hover:before:-translate-x-3 hover:after:translate-x-3'>
                <span className='transition-colors text-base sm:text-xl group-hover:animate-wiggle'>R</span>
                <span className='transition-colors text-base sm:text-xl'>E</span>
                <span className='transition-colors text-base sm:text-xl group-hover:animate-wiggle2'>A</span>
                <span className='transition-colors text-base sm:text-xl'>D</span>
                <span className='transition-colors text-base sm:text-xl group-hover:animate-wiggle3'>  M</span>
                <span className='transition-colors text-base sm:text-xl'>O</span>
                <span className='transition-colors text-base sm:text-xl'>R</span>
                <span className='transition-colors text-base sm:text-xl group-hover:animate-wiggle2'>E</span>
              </span>
            </a>
          </div>
          <div>
            <img src={BookImage} className='hidden lg:block lg:w-[400px]' />
          </div>
        </div>
      </div>
      <div className='container text-center xl:text-left flex items-center flex-col relative justify-between xl:flex-row gap-24 w-full mx-auto mt-20'>
        <div>
          <h1 className='font-BebasNeueRegular text-white text-xl sm:text-5xl leading-relaxed'>PIXEE ORGINAL SOUND TRACK</h1>
          <p className='text-sm sm:text-xl mt-4 text-text-color font-IMBPlex'>Music Composed And Produced By Kamyab</p>
          <div className='flex gap-5 mt-5 items-center'>
            <h1 className='text-sm sm:text-xl font-IMBPlex text-secondery-color'>LongAway SoundTrack</h1>
            <h1 className='text-sm sm:text-xl font-BebasNeueRegular text-text-color'>LISTEN ON</h1>
            <div className='flex items-center justify-center gap-2'>
              <img className="w-6 cursor-pointer" src={Spotify} alt="spotify image" />
              <img className="w-8 cursor-pointer" src={Youtube} alt="youtube image" />
              <img className="w-8 cursor-pointer" src={SoundCloud} alt="soundcloud image" />
            </div>
          </div>
        </div>
        <div className='-z-50'>
          <img src={PianoImage} className='' alt="Piano image" />
        </div>
      </div>
    </div>
  )
}
