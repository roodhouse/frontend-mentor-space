import React, { useState, useEffect } from 'react'
import LaunchImage from '../assets/technology/image-launch-vehicle-landscape.jpg'
import PortImage from '../assets/technology/image-spaceport-landscape.jpg'
import CapsuleImage from '../assets/technology/image-space-capsule-landscape.jpg'
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
    
    // Change background
    let mainWrapper = document.getElementById('mainWrapper')
    console.log(mainWrapper)
    mainWrapper.classList.add('techBackground')

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
        <div id="technologyContainer" className='mt-[34px] md:mt-16 md:flex md:flex-col'>
            <div id="technologyHeader" className='flex justify-center mb-8 md:justify-start md:items-center md:pl-[15px] md:mb-[60px]'>
                <div id="technologyHeadNumber" className='text-white mr-[18px] font-["Barlow_Condensed"] text-base font-bold tracking-[2.7px] opacity-25 md:text-xl md:tracking-[3.375px]'>
                    <p>03</p>
                </div>
                <div id="technologyHeadCopy" className='text-white font-["Barlow_Condensed" text-base font-normal tracking-[2.7px] uppercase md:text-xl md:tracking-[3.375px]'>
                    <p>Space Launch 101</p>
                </div>
            </div>
            <div id="technologyImage">
                <div id="launchImage" className='selectedTechImage w-full hidden justify-center items-center mb-[30px] md:mb-[56px]'>
                    <img src={LaunchImage} alt={Data.technology[0].name} className='w-full h-[170px] md:h-[310px]' />
                </div>
                <div id="portImage" className='hidden w-full justify-center items-center mb-[30px] md:mb-[56px]'>
                    <img src={PortImage} alt={Data.technology[1].name} className='w-full h-[170px] md:h-[310px]' />
                </div>
                <div id="capsuleImage" className='hidden w-full justify-center items-center mb-[30px] md:mb-[56px]'>
                    <img src={CapsuleImage} alt={Data.technology[2].name} className='w-full h-[170px] md:h-[310px]' />
                </div>

            </div>
            <div id="techMenu" className='mb-[26px] md:mb-11'>
                <ul className='flex justify-center font-["Bellefair"] text-base font-normal tracking-[1px] md:text-2xl md:tracking-[1.5px]'>    
                    <li id='launch' className='selectedTech tech w-10 h-10 text-white border border-white/[.25] rounded-[50%] text-center flex justify-center items-center mr-4 md:w-[60px] md:h-[60px]'>1</li>
                    <li id='port' className='tech w-10 h-10 text-white border border-white/[.25] rounded-[50%] text-center flex justify-center items-center mr-4 md:w-[60px] md:h-[60px]'>2</li>
                    <li id='capsule' className='tech w-10 h-10 text-white border border-white/[.25] rounded-[50%] text-center flex justify-center items-center md:w-[60px] md:h-[60px]'>3</li>
                </ul>
            </div>
            <div id="launchWrapper" className='selectedTechCopy px-6'>
                <Launch />
            </div>
            <div id="portWrapper" className='hidden px-6'>
                <Port />
            </div>
            <div id="capsuleWrapper" className='hidden px-6'>
                <Capsule />
            </div>
        </div>
    </>
  )
}

export default Technology