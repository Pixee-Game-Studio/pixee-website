import React from 'react'
import { Link } from 'react-router-dom'

export default function Games() {
  return (
    <div className='px-[200px]'>
      <div>
        <div>
          <p className='font-BebasNeueRegular text-secondery-color text-xl'>GAMES</p>
          <h2 className='font-BebasNeueRegular text-white text-4xl'>THE PIXEE'S GAMES</h2>
        </div>
        <div className='flex gap-2 mt-2'>
          <Link to='/' className='transition-all bg-dust-bg w-[100px] h-[35px] pt-1 items-center justify-center flex bg-white font-BebasNeueRegular hover:bg-blood-bg hover:bg-transparent hover:text-white hover:border-[1px] hover:transition-all text-lg text-[#000]'>LONG AWAY</Link>
          <Link to='/thelastofus' className='transition-all bg-dust-bg w-[100px] h-[35px] pt-1 items-center justify-center flex bg-white font-BebasNeueRegular hover:bg-blood-bg hover:bg-transparent hover:text-white hover:border-[1px] hover:transition-all text-lg text-[#000]'>THE LAST OF US</Link>
          <Link to='/reddead' className='transition-all bg-dust-bg w-[100px] h-[35px] pt-1 items-center justify-center flex bg-white font-BebasNeueRegular hover:bg-blood-bg hover:bg-transparent hover:text-white hover:border-[1px] hover:transition-all text-lg text-[#000]'>REDDEAD</Link>
        </div>
      </div>
    </div>
  )
}
