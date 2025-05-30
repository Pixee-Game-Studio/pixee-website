import React from 'react'
import GameImage from '../../assets/Images/gameImage.png'
import BookImage from '../../assets/Images/book.png'
import PianoImage from '../../assets/Images/piano.png'
import Spotify from '../../assets/Images/spotify-img.svg'
import SoundCloud from '../../assets/Images/soundcloud-img.svg'
import Youtube from '../../assets/Images/youtube-img.svg'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function LongAway() {
  const slides = [
    '../../assets/Images/gameImage.png',
    '../../assets/Images/gameImage.png',
    '../../assets/Images/gameImage.png',
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className='flex justify-between px-[200px]'>
        <div>
          <div className='css-typing mt-6'>
            <p className='font-TestSohneMono text-xl text-white'>Long Away is an open-world action-adventure game by</p>
            <p className='font-TestSohneMono text-xl text-white'>Pixee Studio, set in the fading days of the American Wild West.</p> 
            <p className='font-TestSohneMono text-xl text-white'>You play as Arthur Morgan (in RDR2) or John Marston (in RDR1), </p> 
            <p className='font-TestSohneMono text-xl text-white'>navigating a world of loyalty, survival, and tough moral choices.</p>
          </div>
          <p className='mt-3 font-TestSohneMono text-xl text-white inline-block'><span className='text-secondery-color'>Download</span> now and dive into a world you won’t <br/> want to leave!</p>
          <a href="#" className='transition-all mt-4 w-[250px] h-[50px] items-center font-TestSohneMono justify-center flex bg-transparent hover:bg-transparent border-[1px] text-lg text-white'>Purchase to order</a>
        </div>
        <div>
          <div className="relative w-[500px] -mt-[130px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{
                el: '.custom-pagination',
                clickable: true,  
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
                bulletClass: "custom-bullet",
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {slides.map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={GameImage} alt={`Slide ${i + 1}`} className="w-full" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom pagination */}
            <div className="custom-pagination flex justify-center space-x-1.5"></div>
          </div>
        </div>
      </div>
      <div className='h-[100vh] flex justify-between items-center px-[200px] bg-story-page-bg w-full mt-32'>
        <div>
          <div>
            <p className='font-BebasNeueRegular text-secondery-color text-xl'>STOTY BOOK</p>
            <h2 className='font-BebasNeueRegular text-white text-4xl'>THE PIXEE STORY</h2>
          </div>
          <p className='text-white text-xl mt-4 mb-5 font-TestSohneMono'>At The trans-national MURKOFF CORPORATION tirelessly pushes the frontier <br /> of scientific research and development. Partnering with the greatest <br /> minds of tomorrow, Murkoff expands the reach of every branch of <br /> scientific inquiry, including gene therapy, behavioral psychology, <br /> information technology, and medicine. In the event of mistake or <br /> oversight, the MURKOFF INSURANCE MITIGATION DEPARTMENT comes in to <br /> minimize economic fallout. Mitigation Officers are damage control. They <br /> are not here to save lives or help people, they are here to make sure <br /> it doesn’t cost the company any more than it has to...</p>
          <a href='#' className='relative text-white ml-2'>
            <span className='group hover:transition-all before:text-secondery-color after:text-secondery-color font-IMBPlex text-2xl before:content-["["] before:absolute before:-left-1 before:-top-1.5 before:-translate-x-2.5 after:content-["]"] after:absolute after:-right-1 after:-top-1.5 after:translate-x-2.5 hover:before:-translate-x-3 hover:after:translate-x-3'>
              <span className='transition-colors text-xl group-hover:animate-wiggle'>R</span>
              <span className='transition-colors text-xl'>E</span>
              <span className='transition-colors text-xl group-hover:animate-wiggle2'>A</span>
              <span className='transition-colors text-xl'>D</span>
              <span className='transition-colors text-xl group-hover:animate-wiggle3'>  M</span>
              <span className='transition-colors text-xl'>O</span>
              <span className='transition-colors text-xl'>R</span>
              <span className='transition-colors text-xl group-hover:animate-wiggle2'>E</span>
            </span>
          </a>
        </div>
        <div>
          <img src={BookImage} />
        </div>
      </div>
      <div className='h-[100vh] flex items-center relative justify-between px-[200px]'>
        <div>
          <h1 className='font-BebasNeueRegular text-4xl text-white'>PIXEE ORGINAL SOUND TRACK</h1>
          <p className='text-xl mt-4 text-text-color font-IMBPlex'>Music Composed And Produced By Kamyab</p>
          <div className='flex gap-5 mt-5 items-center'>
            <h1 className='text-xl font-IMBPlex text-secondery-color'>LongAway SoundTrack</h1>
            <h1 className='text-xl font-IMBPlex text-text-color'>listen on</h1>
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
    </>
  )
}
