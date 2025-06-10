import React from 'react'
import memberImg from '../assets/Images/member-img.png'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Contact() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <>
      <div className='container flex flex-col lg:flex-row lg:gap-10 justify-center w-full mx-auto'>
        <div className='flex flex-col'>
          <div>
            <div>
              <p className='font-BebasNeueRegular text-secondery-color text-xl'>STOTY BOOK</p>
              <h2 className='font-BebasNeueRegular text-white text-4xl'>THE PIXEE STORY</h2>
            </div>
            <p className='text-white text-base sm:text-lg lg:text-xl leading-relaxed mt-4 mb-5 font-TestSohneMono'>Behind every game, there’s a team of creative, skilled, and passionate individuals. Our studio members bring together diverse talents in design, programming, art, audio, and production to build unforgettable worlds. We believe that every project is the result of close collaboration, shared passion, and collective experience. Get to know the people who bring our games to life.</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={'auto'}
            loop={true}
            className="w-full max-w-[750px]"
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
            allowTouchMove= {false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            >
              <SwiperSlide className=''>
                <div>
                  <img src={memberImg} />
                </div>
              </SwiperSlide>
             <SwiperSlide className=''>
                <div>
                  <img src={memberImg} />
                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div>
                  <img src={memberImg} />
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
        <div className='mt-16'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          className="xl:max-w-[650px]"
          loop={true}
          allowTouchMove= {false}
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
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div>
              <p className='text-white text-base sm:text-lg lg:text-xl leading-relaxed mt-4 mb-5 font-TestSohneMono'>
                Graphic design is a practical art that helps in communication. Visual information is formed in a way that produces a message. This can be done by placing words and pictures in ways that will get the attention of others. In printed media, graphic design includes typography, organizing illustration, book design, page layout.
              </p>
              <p className='text-white text-base sm:text-lg lg:text-xl leading-relaxed mt-4 mb-5 font-TestSohneMono'>
                Graphic design can be done in different media. These include paper, video, labels, and web sites. Their skills include color theory, design principles, understanding of art, etc. Modern graphic design tries to make the message easy to read and understand and also grab attention and be memorable. Almost every marketing campaign uses graphic design
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className='text-white text-base sm:text-lg lg:text-xl leading-relaxed mt-4 mb-5 font-TestSohneMono'>
                Visual information is formed in a way that produces a message. This can be done by placing words and pictures in ways that will get the attention of others. In printed media, graphic design includes typography, organizing illustration, book design, page layout.
              </p>
              <p className='text-white text-xl  mt-4 mb-5 font-TestSohneMono'>
                skills include color theory, design principles, understanding of art, etc. Modern graphic design tries to make the message easy to read and understand and also grab attention and be memorable. Almost every marketing campaign uses graphic design
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className='text-white text-base sm:text-lg lg:text-xl leading-relaxed mt-4 mb-5 font-TestSohneMono'>
                Graphic design is a practical art that helps in communication. Visual information is formed in a way that produces a message. This can be done by placing words and pictures in ways that will get the attention of others. In printed media, graphic design includes typography, organizing illustration, book design, page layout.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex gap-4">
          <button className='bg-white' onClick={() => swiperRef.current.slidePrev()}>Prev</button>
          <button className='bg-white' onClick={() => swiperRef.current.slideNext()}>Next</button>
        </div>
        </div>
      </div>
    </>
  )
}
