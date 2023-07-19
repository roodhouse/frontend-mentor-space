import React from 'react'
import Data from '../../data.json'

function Moon() {
  return (
    <>
     <div id="moonContainer">
            <div id="moonHeader" className='text-white text-center font-["Bellefair"] text-[56px] font-normal uppercase mb-[1px] md:text-[80px] md:mb-2 xl:text-left xl:text-[100px] xl:mb-[14px]'>
              <h1>{Data.destinations[0].name}</h1>
            </div>
            <div id="moonCopy" className='text-lightBlue text-center font-["Barlow"] text-[15px] font-normal leading-[25px] mb-8 md:text-base md:leading-[28px] md:w-[573px] md:mb-[49px] xl:text-left xl:w-[444px] xl:text-[18px] xl:leading-[32px] xl:mb-[54px]'>
              <p>{Data.destinations[0].description}</p>
            </div>
            <div id="moonBreakLine" className='w-full h-[1px] bg-[#383B4B] mb-8 md:mb-7'/>
            <div id="distanceMoonTravel" className='md:flex md:justify-evenly md:mb-[62px] xl:justify-start'>
              <div id="moonDistanceContainer" className='flex flex-col items-center mb-8 md:mb-0 xl:items-start xl:mr-[79px]'>
                <div id="moonDistanceLabel" className='text-lightBlue font-["Barlow_Condensed"] text-sm font-normal tracking-[2.362px] uppercase mb-3'>
                  <p>Avg. Distance</p>
                </div>
                <div id="moonDistance" className='text-white text-center font-["Bellefair"] text-[28px] font-normal uppercase'>
                  <p>{Data.destinations[0].distance}</p>
                </div>
              </div>
              <div id="moonTravelContainer" className='flex flex-col items-center xl:items-start'>
                <div id="moonTravelLabel" className='text-lightBlue text-center font-["Barlow_Condensed"] text-sm font-normal tracking-[2.362px] uppercase mb-3'>
                  <p>Est. Travel Time</p>
                </div>
                <div id="moonTravel" className='text-white text-center font-["Bellefair"] text-[28px] font-normal uppercase'>
                  <p>{Data.destinations[0].travel}</p>
                </div>
              </div>
            </div>
     </div>
    </>
  )
}

export default Moon