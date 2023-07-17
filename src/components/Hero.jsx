import React from 'react'

function Hero() {
  return (
    <>
      <div id="heroContainer">
        <div id="introContainer" className='text-lightBlue text-center font-["Barlow_Condensed"] font-normal text-base tracking-[2.7px]'>
          <p>SO, YOU WANT TO TRAVEL TO</p>
        </div>
        <div id="headingContainer" className='text-white text-center font-["Bellefair"] font-normal leading-[100px] text-[80px] my-4'>
          <h1>SPACE</h1>
        </div>
        <div id="bodyContainer" className='text-lightBlue text-center font-["Barlow"] text-[15px] font-normal leading-[25px]'>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
      </div>
    </>
  )
}

export default Hero