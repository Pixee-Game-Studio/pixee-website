import React from 'react'
import GithubImg from '../assets/Images/github.png'
import SteamImg from '../assets/Images/steam.png'
import InstagramImg from '../assets/Images/instagram.png'
import DiscordImg from '../assets/Images/discord.png'

export default function Studio() {
  return (
    <>
      <div className='container flex items-center justify-centerflex flex-col gap-10 justify-center w-full mx-auto xl:px-[50px]'>
        <div className='flex items-center md:text-center justify-center gap-8'>
          <div>
            <div>
              <p className='font-BebasNeueRegular text-secondery-color text-sm sm:text-xl'>THE STUDIO</p>
              <h2 className='font-BebasNeueRegular text-white text-xl sm:text-4xl'>ABOUT PIXEE STUDIO</h2>
            </div>
            <p className='text-white text-xs sm:text-lg max-w-[1200px] lg:text-xl leading-relaxed mt-4 font-TestSohneMono'>At <span className='text-secondery-color'>Pixee Game</span> Studio, we’re a small team of dreamers who love making fun and creative games. We believe games should spark imagination and bring joy to players of all ages. Whether it’s a tiny mobile game or a big adventure, we put our heart into every pixel.</p>
          </div>
        </div>
        <hr className='w-full border-[#717171]' />
        <div className='flex w-full justify-between mx-auto px-0 flex-wrap gap-10 sm:px[30px] lg:px-[80px]'>
          <h1 className='text-secondery-color text-2xl lg:text-3xl font-BebasNeueRegular'>INFO</h1>
          <div>
            <p className='text-text-color font-IMBPlex text-sm lg:text-xl'>RELEASE DATE</p>
            <h1 className='text-white font-IMBPlex text-sm lg:text-xl'>September,4th2013</h1>
          </div>
          <div>
            <p className='text-text-color font-IMBPlex text-sm lg:text-xl'>GENER</p>
            <h1 className='text-white font-IMBPlex text-sm lg:text-xl'>Survival-Horror</h1>
          </div>
          <div className='hidden sm:flex flex-col gap-1.5'>
            <h1 className='text-text-color font-IMBPlex text-sm lg:text-xl'>SOCIAL MEDIA</h1>
            <div className='flex items-center gap-3 justify-center'>
              <img src={GithubImg} className='lg:w-8 w-6 cursor-pointer hover:text-secondery-color transition-colors' alt='github img' />
              <img src={SteamImg} className='lg:w-7 w-5 cursor-pointer hover:text-secondery-color transition-colors' alt='steam img' />
              <img src={InstagramImg} className='z lg:w-7 w-6 cursor-pointer hover:text-secondery-color transition-colors' alt='instagram img' />
              <img src={DiscordImg} className='lg:w-7 w-5 cursor-pointer hover:text-secondery-color transition-colors' alt='discord img' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
