import React from 'react'
import GithubImg from '../assets/Images/github-img.png'
import YoutubeImg from '../assets/Images/youtube-img.png'
import DiscordImg from '../assets/Images/discord-img.png'
import XImg from '../assets/Images/x-img.png'

export default function Studio() {
  return (
    <div className='flex items-center flex-col p-[100px] py-48 absolute gap-14 inset-0 bg-noise-bg z-10 bg-repeat'>
      <div className='flex items-center flex-row justify-center gap-8'>
        <div className='flex items-center justify-center gap-1.5'>
          <h1 className='font-IMBPlex text-text-color [writing-mode:sideways-lr] text-xl'>FIND US HERE:</h1>
          <div className='flex items-center gap-3 justify-center flex-col'>
            <img src={GithubImg} className='w-7 h-7' alt='github img' />
            <img src={YoutubeImg} className='w-7 h-7' alt='youtube img' />
            <img src={DiscordImg} className='w-7 h-7' alt='discord img' />
            <img src={XImg} className='w-6 h-6' alt='x img' />
          </div>
        </div>
        <div>
          <div>
            <p className='font-BebasNeueRegular text-secondery-color text-xl'>THE STUDIO</p>
            <h2 className='font-BebasNeueRegular text-white text-4xl'>ABOUT PIXEE STUDIO</h2>
          </div>
          <p className='text-white text-xl mt-4 font-TestSohneMono'>At <span className='text-secondery-color'>Pixee Game</span> Studio, we’re a small team of dreamers who love making fun and creative games. <br/> We believe games should spark imagination and bring joy to players of all ages. <br/> Whether it’s a tiny mobile game or a big adventure, we put our heart into every pixel.</p>
        </div>
      </div>
      <hr className='w-full' />
      <div className='flex ml-[100px] space-x-80 w-full'>
        <h1 className='text-secondery-color text-3xl font-BebasNeueRegular'>INFO</h1>
        <div>
          <p className='text-text-color font-IMBPlex text-xl'>RELEASE DATE</p>
          <h1 className='text-white font-IMBPlex text-xl'>September,4th2013</h1>
        </div>
        <div>
          <p className='text-text-color font-IMBPlex text-xl'>GENER</p>
          <h1 className='text-white font-IMBPlex text-xl'>Survival-Horror</h1>
        </div>
      </div>
    </div>
  )
}
