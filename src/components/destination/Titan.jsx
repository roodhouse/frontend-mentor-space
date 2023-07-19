import React from 'react'
import Data from '../../data.json'

function Titan() {
  return (
    <>
     <div id="titanContainer">
            <div id="titanHeader" className='text-white text-center font-["Bellefair"] text-[56px] font-normal uppercase mb-[1px]'>
              <h1>{Data.destinations[3].name}</h1>
            </div>
            <div id="titanCopy" className='text-lightBlue text-center font-["Barlow"] text-[15px] font-normal leading-[25px] mb-8'>
              <p>{Data.destinations[3].description}</p>
            </div>
            <div id="titanBreakLine" className='w-full h-[1px] bg-[#383B4B] mb-8'/>
            <div id="titanDistanceContainer" className='flex flex-col items-center mb-8'>
              <div id="titanDistanceLabel" className='text-lightBlue font-["Barlow_Condensed"] text-sm font-normal tracking-[2.362px] uppercase mb-3'>
                <p>Avg. Distance</p>
              </div>
              <div id="titanDistance" className='text-white text-center font-["Bellefair"] text-[28px] font-normal uppercase'>
                <p>{Data.destinations[3].distance}</p>
              </div>
            </div>
            <div id="titanTravelContainer" className='flex flex-col items-center'>
              <div id="titanTravelLabel" className='text-lightBlue text-center font-["Barlow_Condensed"] text-sm font-normal tracking-[2.362px] uppercase mb-3'>
                <p>Est. Travel Time</p>
              </div>
              <div id="titanTravel" className='text-white text-center font-["Bellefair"] text-[28px] font-normal uppercase'>
                <p>{Data.destinations[3].travel}</p>
              </div>
            </div>
     </div>
    </>
  )
}

export default Titan