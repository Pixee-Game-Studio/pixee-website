import { Link } from 'react-router-dom'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import GameImage from '../assets/Images/gameImage.png'

export default function Games() {
  const slides = [
    '../../assets/Images/gameImage.png',
    '../../assets/Images/gameImage.png',
    '../../assets/Images/gameImage.png',
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='container flex flex-col items-center xl:flex-row gap-24 justify-center w-full mx-auto lg:mt-20'>
      <div>
        <div>
          <p className='font-BebasNeueRegular text-secondery-color text-xs sm:text-xl'>GAMES</p>
          <h2 className='font-BebasNeueRegular text-white text-xl sm:text-4xl'>THE PIXEE'S GAMES</h2>
        </div>
        <div className='flex gap-2 mt-2'>
          <Link to='/' className='transition-all bg-dust-bg w-[70px] sm:w-[100px] h-[25px] sm:h-[35px] pt-1 items-center justify-center flex bg-white font-BebasNeueRegular hover:bg-blood-bg hover:bg-transparent hover:text-white hover:border-[1px] hover:transition-all text-xs sm:text-lg text-[#000]'>LONG AWAY</Link>
          <Link to='/thelastofus' className='transition-all bg-dust-bg w-[70px] sm:w-[100px] h-[25px] sm:h-[35px] pt-1 items-center justify-center flex bg-white font-BebasNeueRegular hover:bg-blood-bg hover:bg-transparent hover:text-white hover:border-[1px] hover:transition-all text-xs sm:text-lg text-[#000]'>THE LAST OF US</Link>
          <Link to='/reddead' className='transition-all bg-dust-bg w-[70px] wsm:-[100px] h h-[25px]-sm:[35px] pt-1 items-center justify-center flex bg-white font-BebasNeueRegular hover:bg-blood-bg hover:bg-transparent hover:text-white hover:border-[1px] hover:transition-all text-xs sm:text-lg text-[#000]'>REDDEAD</Link>
        </div>
        <div class="css-typing mt-6">
          <p>Long Away is an open-world action-adventure game by</p>
          <p>Pixee Studio, set in the fading days of the American Wild West.</p>
          <p>You play as Arthur Morgan (in RDR2) or John Marston (in RDR1),</p>
          <p>navigating a world of loyalty, survival, and tough moral choices.</p>
        </div>
        <p className='mt-3 text-white text-xs sm:text-lg lg:text-xl leading-relaxed font-TestSohneMono inline-block'><span className='text-secondery-color'>Download</span> now and dive into a world you won’t <br/> want to leave!</p>
        <a href="#" className='transition-all mt-4 w-[150px] sm:w-[250px] h-[40px] sm:h-[50px] items-center font-TestSohneMono justify-center flex bg-transparent hover:bg-transparent border-[1px] text-xs sm:text-lg lg:text-xl text-white'>Purchase to order</a>
      </div>
      <div>
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
                <img src={GameImage} alt={`Slide ${i + 1}`} className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom pagination */}
          <div className="custom-pagination flex justify-center space-x-1.5"></div>
        </div>
      </div>
    </div>
  )
}
