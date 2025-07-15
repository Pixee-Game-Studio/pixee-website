import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import GameImage from '../assets/Images/gameImage.png'
import GameImage1 from '../assets/Images/gameImage1.png'
import GameImage2 from '../assets/Images/gameImage2.png'
import GameImage3 from '../assets/Images/gameImage3.png'
import TypingAnimation from '../components/TypingAnimation/TypingAnimation'
import timerImg from '../assets/Images/timerImg.png'
import Timer from '../components/timer/useTimer'

export default function Games() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null); 
  const swiperRef = useRef(null);
  
  const slides = [
    GameImage,
    GameImage,
    GameImage
  ];

  const images = [
    GameImage1,
    GameImage2,
    GameImage3
  ]

  return (
    <div className='container flex flex-col items-center xl:flex-row gap-8 sm:gap-40 xl:gap-24 justify-center w-full mx-auto lg:mt-20'>
      <div>
        <div>
          <p className='font-BebasNeueRegular text-secondery-color text-xs sm:text-xl'>GAMES</p>
          <h2 className='font-BebasNeueRegular text-white text-xl sm:text-4xl'>THE PIXEE'S GAMES</h2>
        </div>
        <div className='flex gap-2 mt-2'>
          <Link to='/' className='transition-all bg-dust-bg w-[70px] sm:w-[100px] h-[25px] sm:h-[35px] pt-1 items-center justify-center flex bg-white font-BebasNeueRegular hover:bg-blood-bg hover:bg-transparent hover:text-white hover:border-[1px] hover:transition-all text-xs sm:text-xl text-[#000]'>LONG AWAY</Link>
          <div className='flex relative w-[350px]'>
            <img src={timerImg} alt='timer image' className='absolute right-4 -top-6' />
            <Timer deadline="2025-08-15T23:59:59" />
          </div>
        </div>
        <TypingAnimation />
        <p className='mt-3 text-white text-xs sm:text-lg lg:text-xl max-w-[300px] sm:max-w-[500px] leading-relaxed font-TestSohneMono inline-block'><span className='text-secondery-color'>Download</span> now and dive into a world you won’t want to leave!</p>
        <Link to="#" className='transition-all mt-4 w-[150px] sm:w-[250px] h-[40px] sm:h-[50px] items-center font-TestSohneMono justify-center flex bg-transparent hover:bg-transparent border-[1px] text-xs sm:text-lg lg:text-xl text-white'>Purchase to order</Link>
      </div>
      <div className="relative w-full lg:hidden block">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{ 
            el: '.custom-pagination',
            clickable: true 
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
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex items-center justify-start gap-2 mt-2 flex-wrap'>
          {images.map((img, index) => (
            <img
              src={img}
              key={index}
              alt={`Slide ${index + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className="w-24 h-16 cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className="relative w-[300px] sm:w-[500px] -mt-16">
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
                <img src={src} alt={`Slide ${i + 1}`} className="w-full cursor-pointer" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center space-x-1.5"></div>
        </div>
      </div>
    </div>
  )
}
