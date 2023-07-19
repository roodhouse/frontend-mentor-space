import React from 'react'
import Hero from './home/Hero'
import Button from './home/Button'

function Home() {
  return (
    <>
    <div id="homeContainer" className='mt-[51px]'>
          <div id='heroWrapper' className='mb-[81px]'>
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