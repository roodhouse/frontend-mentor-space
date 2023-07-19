import React from 'react'
import Hero from './home/Hero'
import Button from './home/Button'

function Home() {
  return (
    <>
    <div id="homeContainer" className='mt-[51px] md:mt-[130px] md:flex md:flex-col md:items-center xl:mt-[275px] xl:flex-row xl:justify-between'>
          <div id='heroWrapper' className='mb-[81px] md:mb-[156px]'>
            <Hero />
          </div>
          <div id='btnWrapper'>
            <Button />
          </div>
    </div>
    </>
  )
}

export default Home