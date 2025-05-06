import React from 'react'

export default function Navbar() {
  return (
    <div className='px-28 pt-11'>
      <div className='flex items-center justify-between h-14'>
        <h1>Logo</h1>
        <ul className='inline-flex gap-6'>
          <a href="#">HOME</a>
          <a href="#">STUDIO</a>
          <a href="#">GAMES</a>
          <a href="#">CONTACT</a>
        </ul>
        <div className='flex gap-5'>
          <h2>SOUND</h2>
          <h2><span>EN</span>/FN</h2>
        </div>
      </div>
      <hr className='w-full' />
    </div>
  )
}
