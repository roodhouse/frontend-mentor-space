import React from 'react'
import Data from '../../data.json'

function Capsule() {
  return (
    <>
     <div id="capsuleContainer" className='md:flex md:flex-col md:justify-center md:items-center'>
            <div id="capsuleHeader" className='text-lightBlue text-center font-["Barlow_Condensed"] text-sm tracking-[2.362px] font-normal uppercase mb-[9px] md:text-base md:tracking-[2.7px] md:mb-4'>
              <h1>THE TERMINOLOGY…</h1>
            </div>
            <div id="capsuleName" className='text-white text-center font-["Bellefair"] text-2xl font-normal uppercase mb-4 md:text-[40px]'>
              <p>{Data.technology[2].name}</p>
            </div>
            <div id="capsuleCopy" className='text-lightBlue text-[15px] text-center font-["Barlow"] font-normal leading-[25px] md:text-base md:leading-[25px] md:w-[458px]'>
              <p>{Data.technology[2].description}</p>
            </div>
     </div>
    </>
  )
}

export default Capsule