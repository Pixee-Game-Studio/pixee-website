import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import GameImage from '../assets/Images/gameImage.webp';
import GameImage1 from '../assets/Images/gameImage1.webp';
import GameImage2 from '../assets/Images/gameImage2.webp';
import GameImage3 from '../assets/Images/gameImage3.webp';
import TypingAnimation from '../components/TypingAnimation/TypingAnimation';
import timerImg from '../assets/Images/timerImg.png';
import Timer from '../components/timer/useTimer';

export default function Games() {
  const [, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const slides = [GameImage, GameImage, GameImage];
  const images = [GameImage1, GameImage2, GameImage3];

  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center gap-8 md::gap-40 lg:mt-20 xl:flex-row xl:gap-24">
      <div className='mx-auto w-full leading-relaxed'>
        <div>
          <p className="font-BebasNeueRegular text-xs text-secondery-color sm:text-xl">GAMES</p>
          <h2 className="font-BebasNeueRegular text-xl text-white sm:text-4xl">
            THE PIXEE'S GAMES
          </h2>
        </div>
        <div className="mt-2 flex gap-2">
          <Link
            to="/"
            className="flex h-[25px] w-[70px] max-w-full items-center justify-center bg-white bg-dust-bg pt-1 font-BebasNeueRegular text-xs text-[#000] transition-all hover:border-[1px] hover:bg-transparent hover:bg-blood-bg hover:text-white hover:transition-all sm:h-[35px] sm:w-[100px] sm:text-xl"
          >
            LONG AWAY
          </Link>
          <div className="relative flex w-[350px]">
            <img src={timerImg} alt="timer" className="absolute -top-4 sm:-top-6 left-20 sm:left-28 xl:right-4 w-6/12 sm:w-3/5" />
            <Timer deadline="2025-08-15T23:59:59" />
          </div>
        </div>
        <TypingAnimation />
        <p className="mt-3 inline-block max-w-[300px] font-TestSohneMono text-xs leading-relaxed text-white sm:max-w-[500px] sm:text-lg lg:text-xl">
          <span className="text-secondery-color">Download</span>
          now and dive into a world you won’t
          want to leave!
        </p>
        <Link
          to="/"
          className="mt-4 flex h-[40px] w-[150px] items-center justify-center border-[1px] bg-transparent font-TestSohneMono text-xs text-white transition-all hover:bg-transparent sm:h-[50px] sm:w-[250px] sm:text-lg lg:text-xl hover:bg-white hover:text-black hover:border-black"
        >
          Purchase to order
        </Link>
      </div>
      <div className="relative block w-full lg:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
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
                alt={`LongAway game slide ${index + 1}`}
                className="h-64 w-full object-cover aspect-auto"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-2 flex flex-wrap items-center justify-start gap-2">
          {images.map((img, index) => (
            <img
              src={img}
              key={index}
              alt={`LongAway game thumbnail ${index + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className="h-16 w-24 cursor-pointer aspect-auto"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="hidden lg:block relative -mt-16 w-[300px] sm:w-[500px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return `<span key={${index}} class="${className} custom-bullet"></span>`;
            },
            bulletClass: 'custom-bullet',
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
              <img
                src={src}
                alt={`LongAway game slide ${i + 1}`}
                className="w-full cursor-pointer"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center space-x-1.5"></div>
      </div>
    </div>
  );
}
