import React from 'react'
import Data from '../../data.json'

function Launch() {
  return (
    <>
     <div id="launchContainer" className='md:flex md:flex-col md:justify-center md:items-center xl:items-start'>
            <div id="launchHeader" className='text-lightBlue text-center font-["Barlow_Condensed"] text-sm tracking-[2.362px] font-normal uppercase mb-[9px] md:text-base md:tracking-[2.7px] md:mb-4 xl:mb-[11px]'>
              <h1>THE TERMINOLOGY…</h1>
            </div>
            <div id="launchName" className='text-white text-center font-["Bellefair"] text-2xl font-normal uppercase mb-4 md:text-[40px] xl:text-[56px] xl:text-left xl:w-[470px] xl:leading-[1]'>
              <p>{Data.technology[0].name}</p>
            </div>
            <div id="launchCopy" className='text-lightBlue text-[15px] text-center font-["Barlow"] font-normal leading-[25px] md:text-base md:leading-[25px] md:w-[458px] xl:text-left xl:text-lg xl:leading-[32px] xl:w-[444px]'>
              <p>{Data.technology[0].description}</p>
            </div>
     </div>
    </>
  )
}

export default Launch