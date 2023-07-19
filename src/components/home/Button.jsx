import React from 'react'

function Button() {
  return (
    <>
      <div id="exploreButtonContainer" className='flex justify-center cursor-pointer'>
      <a href="/destination">
        <div id="exploreButton" className='w-[150px] h-[150px] bg-white flex justify-center items-center rounded-[50%]'>
          <p className='text-dark text-center font-["Bellefair"] text-xl font-normal tracking-[1.25px]'>EXPLORE</p>
        </div>
      </a>
      </div>
    </>
  )
}

export default Button
