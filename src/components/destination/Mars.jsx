import React from 'react'
import Data from '../../data.json'

function Mars() {
  return (
    <>
     <div id="marsContainer">
            <div id="marsHeader" className='text-white text-center font-["Bellefair"] text-[56px] font-normal uppercase mb-[1px]'>
              <h1>{Data.destinations[1].name}</h1>
            </div>
            <div id="marsCopy" className='text-lightBlue text-center font-["Barlow"] text-[15px] font-normal leading-[25px] mb-8'>
              <p>{Data.destinations[1].description}</p>
            </div>
            <div id="marsBreakLine" className='w-full h-[1px] bg-[#383B4B] mb-8'/>
            <div id="marsDistanceContainer" className='flex flex-col items-center mb-8'>
              <div id="marsDistanceLabel" className='text-lightBlue font-["Barlow_Condensed"] text-sm font-normal tracking-[2.362px] uppercase mb-3'>
                <p>Avg. Distance</p>
              </div>
              <div id="marsDistance" className='text-white text-center font-["Bellefair"] text-[28px] font-normal uppercase'>
                <p>{Data.destinations[1].distance}</p>
              </div>
            </div>
            <div id="marsTravelContainer" className='flex flex-col items-center'>
              <div id="marsTravelLabel" className='text-lightBlue text-center font-["Barlow_Condensed"] text-sm font-normal tracking-[2.362px] uppercase mb-3'>
                <p>Est. Travel Time</p>
              </div>
              <div id="marsTravel" className='text-white text-center font-["Bellefair"] text-[28px] font-normal uppercase'>
                <p>{Data.destinations[1].travel}</p>
              </div>
            </div>
     </div>
    </>
  )
}

export default Mars