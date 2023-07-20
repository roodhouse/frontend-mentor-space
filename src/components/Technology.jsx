import React, { useState, useEffect } from 'react'
import LaunchImage from '../assets/technology/image-launch-vehicle-landscape.jpg'
import LaunchImageFull from '../assets/technology/image-launch-vehicle-portrait.jpg'
import PortImage from '../assets/technology/image-spaceport-landscape.jpg'
import PortImageFull from '../assets/technology/image-spaceport-portrait.jpg'
import CapsuleImage from '../assets/technology/image-space-capsule-landscape.jpg'
import CapsuleImageFull from '../assets/technology/image-space-capsule-portrait.jpg'
import Data from '../data.json'
import Launch from '../components/technology/Launch'
import Port from '../components/technology/Port'
import Capsule from '../components/technology/Capsule'

// change background
// set up slider
// set up data

function Technology() {

  const [theTech, setTheTech] = useState('') 
  const [theTechImage, setTechImage] = useState('')

  useEffect(() => {
    let tech = document.querySelectorAll('.tech')
    let currentSelectedTechImage = document.querySelector('.selectedTechImage')
    let selectedTech = document.querySelector('.selectedTech')
    let selectedTechCopy = document.querySelector('.selectedTechCopy')
    
    tech = Array.from(tech)
    
    tech.forEach((technology)=> {
        
        technology.addEventListener('click', (e) => {  
            console.log(technology)              
            setTheTech(e.target.id)
            // Switch the image to the clicked tech
            let techImage = document.getElementById(e.target.id+'Image')
            if (techImage.classList.contains('selectedTechImage')) {
                return
            } else if (!techImage.classList.contains('selectedTechImage')) {
                
              currentSelectedTechImage.classList.remove('selectedTechImage')
              currentSelectedTechImage.classList.add('hidden')
                techImage.classList.add('selectedTechImage')
                currentSelectedTechImage = techImage;
            }

            // Toggle the menu bar between tech
            if (technology.classList.contains('selectedTech')) {
                return
            } else if (!technology.classList.contains('selectedTech')) {
                selectedTech.classList.remove('selectedTech')
                technology.classList.add('selectedTech')
                selectedTech = technology
            }

            // Toggle the info section
            let techCopy = document.getElementById(e.target.id+'Wrapper')
            console.log(techCopy)
            if (techCopy.classList.contains('selectedTechCopy')) {
                console.log('copy here')
                return
            } else if (!techCopy.classList.contains('selectedTechCopy')) {
                console.log('copy not here')
                selectedTechCopy.classList.remove('selectedTechCopy')
                selectedTechCopy.classList.add('hidden')
                techCopy.classList.add('selectedTechCopy')
                techCopy.classList.remove('hidden')
                selectedTechCopy = techCopy
            }      
        })
    })

},[])


  return (
    <>
        <div id="technologyContainer" className='mt-[34px] md:mt-16 md:flex md:flex-col xl:mt-[100px]'>
            <div id="technologyHeader" className='flex justify-center mb-8 md:justify-start md:items-center md:pl-[15px] md:mb-[60px] xl:pl-0 xl:mb-[26px]'>
                <div id="technologyHeadNumber" className='text-white mr-[18px] font-["Barlow_Condensed"] text-base font-bold tracking-[2.7px] opacity-25 md:text-xl md:tracking-[3.375px] xl:text-[28px] xl:tracking-[4.725px]'>
                    <p>03</p>
                </div>
                <div id="technologyHeadCopy" className='text-white font-["Barlow_Condensed" text-base font-normal tracking-[2.7px] uppercase md:text-xl md:tracking-[3.375px] xl:text-[28px] xl:tracking-[4.725px]'>
                    <p>Space Launch 101</p>
                </div>
            </div>
            <div id="techImageMenuCopy" className='xl:flex xl:justify-between'>
                <div id="technologyImage" className='xl:order-3'>
                    <div id="launchImage" className='selectedTechImage w-full hidden justify-center items-center mb-[30px] md:mb-[56px]'>
                        <img src={LaunchImage} alt={Data.technology[0].name} className='w-full h-[170px] md:h-[310px] xl:hidden' />
                        <img src={LaunchImageFull} alt={Data.technology[0].name} className='hidden xl:block' />
                    </div>
                    <div id="portImage" className='hidden w-full justify-center items-center mb-[30px] md:mb-[56px]'>
                        <img src={PortImage} alt={Data.technology[1].name} className='w-full h-[170px] md:h-[310px] xl:hidden' />
                        <img src={PortImageFull} alt={Data.technology[1].name} className='hidden xl:block' />
                    </div>
                    <div id="capsuleImage" className='hidden w-full justify-center items-center mb-[30px] md:mb-[56px]'>
                        <img src={CapsuleImage} alt={Data.technology[2].name} className='w-full h-[170px] md:h-[310px] xl:hidden' />
                        <img src={CapsuleImageFull} alt={Data.technology[2].name} className='hidden xl:block' />
                    </div>

                </div>
                <div id="techMenuCopy" className='xl:flex'>
                    <div id="techMenu" className='mb-[26px] md:mb-11 xl:order-1 xl:mt-[111px] xl:mr-[80px]'>
                        <ul className='flex justify-center font-["Bellefair"] text-base font-normal tracking-[1px] md:text-2xl md:tracking-[1.5px] xl:flex-col xl:text-[32px] xl:tracking-[2px]'>    
                            <li id='launch' className='selectedTech tech w-10 h-10 text-white border border-white/[.25] rounded-[50%] text-center flex justify-center items-center mr-4 md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px] xl:mb-8 cursor-pointer hover:border-white'>1</li>
                            <li id='port' className='tech w-10 h-10 text-white border border-white/[.25] rounded-[50%] text-center flex justify-center items-center mr-4 md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px] xl:mb-8 cursor-pointer hover:border-white'>2</li>
                            <li id='capsule' className='tech w-10 h-10 text-white border border-white/[.25] rounded-[50%] text-center flex justify-center items-center md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px] cursor-pointer hover:border-white'>3</li>
                        </ul>
                    </div>
                    <div id="launchWrapper" className='selectedTechCopy px-6 xl:order-2 xl:mt-[111px] xl:px-0'>
                        <Launch />
                    </div>
                    <div id="portWrapper" className='hidden px-6 xl:order-2 xl:mt-[111px] xl:px-0'>
                        <Port />
                    </div>
                    <div id="capsuleWrapper" className='hidden px-6 xl:order-2 xl:mt-[111px] xl:px-0'>
                        <Capsule />
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Technology