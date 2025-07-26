import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BookImage from '../../assets/Images/book.webp';
import PianoImage from '../../assets/Images/piano.webp';
import Spotify from '../../assets/Images/spotify.png';
import SoundCloud from '../../assets/Images/soundcloud.png';
import YouTube from '../../assets/Images/youtube.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function LongAway() {
  return (
    <div>
      <Helmet>
        <title>LongAway | Pixee Studio</title>
        <meta
          name="description"
          content="LongAway - یک بازی ترسناک از Pixee Studio. اطلاعات، داستان و موسیقی بازی را اینجا ببینید."
        />
        <meta property="og:title" content="LongAway | Pixee Studio" />
        <meta
          property="og:description"
          content="LongAway - یک بازی ترسناک از Pixee Studio. اطلاعات، داستان و موسیقی بازی را اینجا ببینید."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-story-page-bg">
        <div className="container mx-auto mt-14 flex w-full items-center justify-between gap-10 py-14 sm:h-[800px] lg:mt-32">
          <div>
            <div>
              <p className="font-BebasNeueRegular text-sm text-secondery-color sm:text-xl">
                STORY BOOK
              </p>
              <h2 className="font-BebasNeueRegular text-xl text-white sm:text-4xl">
                THE PIXEE STORY
              </h2>
            </div>
            <p className="scramble mb-5 mt-4 max-w-[800px] font-TestSohneMono text-xs leading-relaxed text-white sm:text-lg lg:text-xl">
              The trans-national MURKOFF CORPORATION tirelessly pushes the frontier of scientific research and development. Partnering with the greatest minds of tomorrow, Murkoff expands the reach of every branch of scientific inquiry, including gene therapy, behavioral psychology, information technology, and medicine. In the event of mistake or oversight, the MURKOFF INSURANCE MITIGATION DEPARTMENT comes in to minimize economic fallout. Mitigation Officers are damage control. They are not here to save lives or help people, they are here to make sure it doesn’t cost the company any more than it has to...
            </p>
            <Link to="#" className="relative ml-2 text-white">
              <span className='group font-IMBPlex text-xl before:absolute before:-left-1 before:-translate-x-2.5 before:text-secondery-color before:content-["["] after:absolute after:-right-1 after:translate-x-2.5 after:text-secondery-color after:content-["]"] hover:transition-all hover:before:-translate-x-3 hover:after:translate-x-3 sm:text-2xl'>
                <span className="text-base transition-colors group-hover:animate-wiggle sm:text-xl">
                  R
                </span>
                <span className="text-base transition-colors sm:text-xl">E</span>
                <span className="text-base transition-colors group-hover:animate-wiggle2 sm:text-xl">
                  A
                </span>
                <span className="text-base transition-colors sm:text-xl">D</span>
                <span className="text-base transition-colors group-hover:animate-wiggle3 sm:text-xl">
                  {' '}
                  M
                </span>
                <span className="text-base transition-colors sm:text-xl">O</span>
                <span className="text-base transition-colors sm:text-xl">R</span>
                <span className="text-base transition-colors group-hover:animate-wiggle2 sm:text-xl">
                  E
                </span>
              </span>
            </Link>
          </div>
          <div>
            <img
              src={BookImage}
              className="hidden lg:block lg:w-[400px]"
              alt="LongAway game storybook illustration"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container relative mx-auto mt-20 flex w-full flex-col items-center justify-between text-center xl:flex-row xl:gap-24 xl:text-left">
        <div>
          <h1 className="font-BebasNeueRegular text-xl leading-relaxed text-white sm:text-5xl">
            PIXEE ORGINAL SOUND TRACK
          </h1>
          <p className="mt-4 font-IMBPlex text-sm text-text-color sm:text-xl">
            Music Composed And Produced By Kamyab
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
            <h1 className="font-IMBPlex text-sm text-secondery-color sm:text-xl">
              LongAway SoundTrack
            </h1>
            <div className='flex items-center gap-5 justify-center'>
              <h1 className="font-BebasNeueRegular text-sm text-text-color sm:text-xl">LISTEN ON</h1>
              <div className="flex items-center justify-center gap-2">
                <img
                  className="w-5 cursor-pointer"
                  src={Spotify}
                  alt="Listen to LongAway soundtrack on Spotify"
                  loading="lazy"
                />
                <img
                  className="w-7 cursor-pointer"
                  src={YouTube}
                  alt="Listen to LongAway soundtrack on YouTube"
                  loading="lazy"
                />
                <img
                  className="w-7 cursor-pointer"
                  src={SoundCloud}
                  alt="Listen to LongAway soundtrack on SoundCloud"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="-z-50">
          <img
            src={PianoImage}
            alt="Piano related to LongAway game soundtrack"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
