import React from 'react'
import GameImage from '../../assets/Images/gameImage.png'

export default function LongAway() {
  return (
    <div className='flex justify-between px-[200px]'>
      <div>
        <div className='css-typing mt-6'>
          <p className='font-TestSohneMono text-xl text-white'>Long Away is an open-world action-adventure game by</p>
          <p className='font-TestSohneMono text-xl text-white'>Pixee Studio, set in the fading days of the American Wild West.</p> 
          <p className='font-TestSohneMono text-xl text-white'>You play as Arthur Morgan (in RDR2) or John Marston (in RDR1), </p> 
          <p className='font-TestSohneMono text-xl text-white'>navigating a world of loyalty, survival, and tough moral choices.</p>
        </div>
        <p className='mt-3 font-TestSohneMono text-xl text-white inline-block'><span className='text-secondery-color'>Download</span> now and dive into a world you won’t <br/> want to leave!</p>
        <a href="#" className='transition-all mt-4 w-[250px] h-[50px] items-center font-TestSohneMono justify-center flex bg-transparent hover:bg-transparent border-[1px] text-lg text-white'>Purchase to order</a>
      </div>
      <div>
        <img className='-mt-28' src={GameImage} alt="" />
      </div>
    </div>
  )
}
