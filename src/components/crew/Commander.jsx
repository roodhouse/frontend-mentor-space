import React from 'react'
import Data from '../../data.json'

// issue with margin... 

function Commander() {
  return (
    <>
      <div id="commanderContainer" className='md:flex md:flex-col md:justify-center md:items-center md:mb-10 xl:items-start'>
        <div id="commanderRole" className='mb-2 text-white text-center font-["Bellefair"] text-base font-normal uppercase opacity-[0.4951259195804596] md:text-2xl xl:text-[32px] xl:mb-[15px]'>
          <p>{Data.crew[0].role}</p>
        </div>
        <div id='commanderName' className='mb-4 text-white text-center font-["Bellefair"] text-2xl font-normal uppercase md:text-[40px] xl:text-[56px]'>
          <p>{Data.crew[0].name}</p>
        </div>
        <div id="commanderBio" className='text-lightBlue text-center text-[15px] font-["Barlow"] font-normal leading-[25px] md:text-base md:leading-[28px] md:w-[592px]'>
          <p>{Data.crew[0].bio}</p>
        </div>
      </div>
    </>
  )
}

export default Commander