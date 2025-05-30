import React from 'react'
import GithubImg from '../assets/Images/github-img.svg'
import YoutubeImg from '../assets/Images/youtube-img.svg'
import DiscordImg from '../assets/Images/discord-img.svg'
import XImg from '../assets/Images/x-img.svg'

export default function Studio() {
  return (
    <div className='flex items-center justify-center flex-col px-[200px] pt-10 gap-14'>
      <div className='flex items-center text-center justify-center gap-8'>
        <div>
          <div>
            <p className='font-BebasNeueRegular text-secondery-color text-xl'>THE STUDIO</p>
            <h2 className='font-BebasNeueRegular text-white text-4xl'>ABOUT PIXEE STUDIO</h2>
          </div>
          <p className='text-white text-xl mt-4 font-TestSohneMono'>At <span className='text-secondery-color'>Pixee Game</span> Studio, we’re a small team of dreamers who love making fun and creative games. <br/> We believe games should spark imagination and bring joy to players of all ages. <br/> Whether it’s a tiny mobile game or a big adventure, we put our heart into every pixel.</p>
        </div>
      </div>
      <hr className='w-full' />
      <div className='flex w-full justify-between px-[200px]'>
        <h1 className='text-secondery-color text-3xl font-BebasNeueRegular'>INFO</h1>
        <div>
          <p className='text-text-color font-IMBPlex text-xl'>RELEASE DATE</p>
          <h1 className='text-white font-IMBPlex text-xl'>September,4th2013</h1>
        </div>
        <div>
          <p className='text-text-color font-IMBPlex text-xl'>GENER</p>
          <h1 className='text-white font-IMBPlex text-xl'>Survival-Horror</h1>
        </div>
        <div className='flex flex-col gap-1.5'>
          <h1 className='text-text-color font-IMBPlex text-xl'>SOCIAL MEDIA</h1>
          <div className='flex items-center gap-3 justify-center'>
            <img src={GithubImg} className='w-9 cursor-pointer hover:text-secondery-color transition-colors' alt='github img' />
            <img src={YoutubeImg} className='w-8 cursor-pointer hover:text-secondery-color transition-colors' alt='youtube img' />
            <img src={DiscordImg} className='w-8 cursor-pointer hover:text-secondery-color transition-colors' alt='discord img' />
            <img src={XImg} className='z w-8 cursor-pointer hover:text-secondery-color transition-colors' alt='x img' />
          </div>
        </div>
      </div>
    </div>
  )
}
