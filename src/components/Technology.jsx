import React from 'react'
import LaunchImage from '../assets/technology/image-launch-vehicle-portrait.jpg'
import PortImage from '../assets/technology/image-spaceport-portrait.jpg'
import CapsuleImage from '../assets/technology/image-space-capsule-portrait.jpg'
import Data from '../data.json'
import Launch from '../components/technology/Launch'
import Port from '../components/technology/Port'
import Capsule from '../components/technology/Capsule'

// change background
// set up slider
// set up data

function Technology() {
  return (
    <>
        <div id="technologyContainer" className='mt-[34px]'>
            <div id="technologyHeader" className='flex justify-center mb-8'>
                <div id="technologyHeadNumber" className='text-white mr-[18px] font-["Barlow_Condensed"] text-base font-bold tracking-[2.7px] opacity-25'>
                    <p>03</p>
                </div>
                <div id="technologyHeadCopy" className='text-white font-["Barlow_Condensed" text-base font-normal tracking-[2.7px] uppercase'>
                    <p>Space Launch 101</p>
                </div>
            </div>
            <div id="technologyImage">
                <div id="launchImage" className='selectedImage w-full h-[259px] hidden justify-center items-center mb-[30px]'>
                    <img src={LaunchImage} alt={Data.technology[0].name} className='w-[259px] h-[259px]' />
                </div>
                <div id="portImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px]'>
                    <img src={PortImage} alt={Data.technology[1].name} className='w-[259px] h-[259px]' />
                </div>
                <div id="capsuleImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px]'>
                    <img src={CapsuleImage} alt={Data.technology[2].name} className='w-[259px] h-[259px]' />
                </div>

            </div>
            <div id="techMenu" className='mb-5'>
                <ul className='flex justify-evenly font-["Barlow_Condensed"] text-base font-normal uppercase tracking-[2.7px]'>    
                    <li id='launch' className='selectedTech tech text-lightBlue h-[28px]'>Moon</li>
                    <li id='port' className='tech h-[28px] text-lightBlue'>Mars</li>
                    <li id='capsule' className='tech h-[28px] text-lightBlue'>Europa</li>
                    
                </ul>
            </div>
            <div id="moonWrapper" className='selectedTechCopy'>
                <Launch />
            </div>
            <div id="marsWrapper" className='hidden'>
                <Port />
            </div>
            <div id="europaWrapper" className='hidden'>
                <Capsule />
            </div>
        </div>
    </>
  )
}

export default Technology