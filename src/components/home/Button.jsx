import React from 'react'

function Button() {
  return (
    <>
      <div id="exploreButtonContainer" className='flex justify-center cursor-pointer'>
        <div id="exploreButton" className='w-[150px] h-[150px] bg-white flex justify-center items-center rounded-[50%] md:w-[242px] md:h-[242px] xl:w-[274px] xl:h-[274px]'>
          <p className='text-dark text-center font-["Bellefair"] text-xl font-normal tracking-[1.25px] md:text-[32px] md:tracking-[2px] xl:text-[32px]'>EXPLORE</p>
        </div>
      </div>
    </>
  )
}

export default Button
