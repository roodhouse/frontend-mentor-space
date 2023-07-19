import React from 'react'
import Data from '../../data.json'

function Commander() {
  return (
    <>
      <div id="commanderContainer">
        <div id="commanderRole" className='mb-2 text-white text-center font-["Bellefair"] text-base font-normal uppercase opacity-[0.4951259195804596]'>
          <p>{Data.crew[0].role}</p>
        </div>
        <div id='commanderName' className='mb-4 text-white text-center font-["Bellefair"] text-2xl font-normal uppercase'>
          <p>{Data.crew[0].name}</p>
        </div>
        <div id="commanderBio" className='text-lightBlue text-center text-[15px] font-["Barlow"] font-normal leading-[25px]'>
          <p>{Data.crew[0].bio}</p>
        </div>
      </div>
    </>
  )
}

export default Commander