import React from 'react'
import Data from '../../data.json'

function Capsule() {
  return (
    <>
     <div id="capsuleContainer">
            <div id="capsuleHeader" className='text-lightBlue text-center font-["Barlow_Condensed"] text-sm leading-[2.362px] font-normal uppercase mb-[9px]'>
              <h1>THE TERMINOLOGY…</h1>
            </div>
            <div id="capsuleName" className='text-white text-center font-["Bellefair"] text-2xl font-normal uppercase mb-4'>
              <p>{Data.technology[2].name}</p>
            </div>
            <div id="capsuleCopy" className='text-lightBlue text-center font-["Barlow"] font-normal leading-[25px]'>
              <p>{Data.technology[2].description}</p>
            </div>
     </div>
    </>
  )
}

export default Capsule