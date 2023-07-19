import React from 'react'
import Data from '../../data.json'

function Europa() {
  return (
    <>
     <div id="europaContainer">
            <div id="europaHeader" className='text-white text-center font-["Bellefair"] text-[56px] font-normal uppercase mb-[1px] md:text-[80px] md:mb-2'>
              <h1>{Data.destinations[2].name}</h1>
            </div>
            <div id="europaCopy" className='text-lightBlue text-center font-["Barlow"] text-[15px] font-normal leading-[25px] mb-8 md:text-base md:leading-[28px] md:w-[573px] md:mb-[49px]'>
              <p>{Data.destinations[2].description}</p>
            </div>
            <div id="europaBreakLine" className='w-full h-[1px] bg-[#383B4B] mb-8 md:mb-7'/>
            <div id="distanceTravel" className='md:flex md:justify-evenly'>
              <div id="europaDistanceContainer" className='flex flex-col items-center mb-8 md:mb-0'>
                <div id="europaDistanceLabel" className='text-lightBlue font-["Barlow_Condensed"] text-sm font-normal tracking-[2.362px] uppercase mb-3'>
                  <p>Avg. Distance</p>
                </div>
                <div id="europaDistance" className='text-white text-center font-["Bellefair"] text-[28px] font-normal uppercase'>
                  <p>{Data.destinations[2].distance}</p>
                </div>
              </div>
              <div id="europaTravelContainer" className='flex flex-col items-center'>
                <div id="europaTravelLabel" className='text-lightBlue text-center font-["Barlow_Condensed"] text-sm font-normal tracking-[2.362px] uppercase mb-3'>
                  <p>Est. Travel Time</p>
                </div>
                <div id="europaTravel" className='text-white text-center font-["Bellefair"] text-[28px] font-normal uppercase'>
                  <p>{Data.destinations[2].travel}</p>
                </div>
              </div>
            </div>
     </div>
    </>
  )
}

export default Europa