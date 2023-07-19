import React from 'react'
import Data from '../../data.json'

function FlightEngineer() {
  return (
    <>
      <div id="flightEngineerContainer" className='md:flex md:flex-col md:justify-center md:items-center md:mb-10'>
        <div id="flightEngineerRole" className='mb-2 text-white text-center font-["Bellefair"] text-base font-normal uppercase opacity-[0.4951259195804596] md:text-2xl'>
          <p>{Data.crew[3].role}</p>
        </div>
        <div id='flightEngineerName' className='mb-4 text-white text-center font-["Bellefair"] text-2xl font-normal uppercase md:text-[40px]'>
          <p>{Data.crew[3].name}</p>
        </div>
        <div id="flightEngineerBio" className='text-lightBlue text-center text-[15px] font-["Barlow"] font-normal leading-[25px] md:text-base md:leading-[28px] md:w-[592px]'>
          <p>{Data.crew[3].bio}</p>
        </div>
      </div>
    </>
  )
}

export default FlightEngineer