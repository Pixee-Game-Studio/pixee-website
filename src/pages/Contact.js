import React, { useRef } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import memberImg from '../assets/Images/member-img.webp';
import arrow from '../assets/Images/arrow.png';
import textsMarks1 from '../assets/Images/textsmarks1.png';
import textsMarks2 from '../assets/Images/textsmarks2.png';

export default function Contact() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <>
      <div className="container relative mx-auto flex w-full flex-col justify-center lg:flex-row lg:gap-10 z-40">
        <div className="flex flex-col">
          <div>
            <div>
              <p className="font-BebasNeueRegular text-xs text-secondery-color sm:text-xl">
                STOTY BOOK
              </p>
              <h2 className="font-BebasNeueRegular text-xl text-white sm:text-4xl">
                THE PIXEE STORY
              </h2>
            </div>
            <p className="mb-5 mt-4 font-TestSohneMono text-xs leading-relaxed text-white sm:text-lg lg:text-xl">
              Behind every game, there’s a team of creative, skilled, and passionate individuals.
              Our studio members bring together diverse talents in design, programming, art, audio,
              and production to build unforgettable worlds. We believe that every project is the
              result of close collaboration, shared passion, and collective experience. Get to know
              the people who bring our games to life.
            </p>
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
            allowTouchMove={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div>
                <img src={memberImg} alt="Pixee Studio team member" loading="lazy" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={memberImg} alt="Pixee Studio team member" loading="lazy" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={memberImg} alt="Pixee Studio team member" loading="lazy" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={1}
            className="lg:max-w-[450px] xl:max-w-[650px]"
            loop={true}
            allowTouchMove={false}
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
                <p className="mb-5 mt-4 font-TestSohneMono text-xs leading-relaxed text-white sm:text-lg lg:text-xl">
                  <img
                    src={textsMarks1}
                    className="absolute"
                    alt="Pixee Studio story quote mark"
                    loading="lazy"
                  />
                  Graphic design is a practical art that helps in communication. Visual information
                  is formed in a way that produces a message. This can be done by placing words and
                  pictures in ways that will get the attention of others. In printed media, graphic
                  design includes typography, organizing illustration, book design, page layout.
                </p>
                <p className="relative mb-5 mt-4 flex items-center font-TestSohneMono text-xs leading-relaxed text-white sm:text-lg lg:text-xl">
                  <img
                    src={textsMarks2}
                    className="absolute -left-8 top-7"
                    alt="Pixee Studio story quote mark"
                    loading="lazy"
                  />
                  Graphic design can be done in different media. These include paper, video, labels,
                  and web sites. Their skills include color theory, design principles, understanding
                  of art, etc. Modern graphic design tries to make the message easy to read and
                  understand and also grab attention and be memorable. Almost every marketing
                  campaign uses graphic design
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="mb-5 mt-4 font-TestSohneMono text-xs leading-relaxed text-white sm:text-lg lg:text-xl">
                  <img
                    src={textsMarks1}
                    className="absolute left-2"
                    alt="Pixee Studio story quote mark"
                    loading="lazy"
                  />
                  Visual information is formed in a way that produces a message. This can be done by
                  placing words and pictures in ways that will get the attention of others. In
                  printed media, graphic design includes typography, organizing illustration, book
                  design, page layout.
                </p>
                <p className="mb-5 mt-4 font-TestSohneMono text-xs text-white sm:text-xl">
                  skills include color theory, design principles, understanding of art, etc. Modern
                  graphic design tries to make the message easy to read and understand and also grab
                  attention and be memorable. Almost every marketing campaign uses graphic design
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="mb-5 mt-4 font-TestSohneMono text-xs leading-relaxed text-white sm:text-lg lg:text-xl">
                <img
                  src={textsMarks2}
                  className="absolute -left-10 top-4"
                  alt="Pixee Studio story quote mark"
                  loading="lazy"
                />
                Graphic design is a practical art that helps in communication. Visual information is
                formed in a way that produces a message. This can be done by placing words and
                pictures in ways that will get the attention of others. In printed media, graphic
                design includes typography, organizing illustration, book design, page layout.
              </p>
            </SwiperSlide>
          </Swiper>
          <div className="flex gap-4">
            <button className="bg-white" onClick={() => swiperRef.current.slidePrev()}>
              <img src={arrow} className="rotate-180" alt="Previous slide button" loading="lazy" />
            </button>
            <button className="bg-white" onClick={() => swiperRef.current.slideNext()}>
              <img
                src={arrow}
                className="slideshow button"
                alt="Next slide button"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
