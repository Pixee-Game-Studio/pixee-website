import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-black w-full mt-8 sm:mt-16 lg:mt-40'>
      <div className='container'>
        <div className='flex items-center flex-wrap sm:pb-16 lg:px-14 py-6 sm:pt-16 lg:pt-24 gap-5 sm:gap-10 justify-between'>
          <div>
            <h1 className='text-white text-xl font-BebasNeueRegular sm:text-2xl lg:text-4xl'>PIXEE</h1>
            <p className='text-primary-color font-TestSohneMono text-xs sm:text-sm lg:max-w-[400px] xl:max-w-[500px] leading-relaxed lg:text-base'>pixee Game is an independent game studio driven by creativity and passion, crafting unique and engaging experiences for players around the world.</p>
            <Link to="#" className='text-secondery-color font-TestSohneMono mt-2'>get it on system</Link>
          </div>
          <div>
            <p className='text-secondery-color text-sm font-BebasNeueRegular sm:text-base lg:text-lg'>CONTACT US</p>
            <h1 className='text-white text-xl font-BebasNeueRegular sm:text-2xl'>Here, every email could be the beginning of <br /> something unforeseen.</h1>
            <div className='text-white mt-5 font-TestSohneMono text-xs sm:text-sm lg:text-base'>
              <h1>Email Studio : pixeestudio@gmail.com</h1>
              <h1>Location : Iran,Tehran</h1>
            </div>
          </div>
        </div>
        <hr className='w-full border-[#717171]' />
        <div className='flex items-center flex-wrap gap-3 justify-between lg:px-14 py-5'>
          <p className='text-white text-xs sm:text-sm lg:text-base font-IMBPlex'>©2024 Pixee Game</p>
          <div className='flex items-center justify-center gap-5 sm:gap-10'>
            <Link to="#" className='font-IMBPlex text-primary-color text-xs sm:text-sm lg:text-base'>Terms of Service</Link>
            <Link to="#" className='font-IMBPlex text-primary-color text-xs sm:text-sm lg:text-base'>Privacy</Link>
            <Link to="#" className='font-IMBPlex text-primary-color text-xs sm:text-sm lg:text-base'>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
