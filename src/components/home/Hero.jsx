import React from 'react'

function Hero() {
  return (
    <>
      <div id="heroContainer">
        <div id="introContainer" className='text-lightBlue text-center font-["Barlow_Condensed"] font-normal text-base tracking-[2.7px] md:text-[20px] md:tracking-[3.375pxs] xl:text-[28px] xl:tracking-[4.725px] xl:text-left'>
          <p>SO, YOU WANT TO TRAVEL TO</p>
        </div>
        <div id="headingContainer" className='text-white text-center font-["Bellefair"] font-normal leading-[100px] text-[80px] my-4 md:my-6 md:text-[150px] md:leading-[150px] xl:text-[150px] xl:text-left'>
          <h1>SPACE</h1>
        </div>
        <div id="bodyContainer" className='text-lightBlue text-center font-["Barlow"] text-[15px] font-normal leading-[25px] md:text-base md:leading-[28px] md:w-[444px] xl:text-lg xl:leading-8 xl:text-left'>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
      </div>
    </>
  )
}

export default Hero