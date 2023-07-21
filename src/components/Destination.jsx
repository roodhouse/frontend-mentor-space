import React, { useState, useEffect } from 'react'
import Data from '../data.json'
import Moon from './destination/Moon'
import Mars from './destination/Mars'
import Europa from './destination/Europa'
import Titan from './destination/Titan'
import MoonImage from '../assets/destination/image-moon.webp'
import MarsImage from '../assets/destination/image-mars.webp'
import EuropaImage from '../assets/destination/image-europa.webp';
import TitanImage from '../assets/destination/image-titan.webp'

function Destination() {

    const [thePlanets, setThePlanets] = useState('')
    const [thePlanetImage, setThePlanetImage] = useState('')
   
    useEffect(() => {
        let planets = document.querySelectorAll('.planet')
        let currentSelectedImage = document.querySelector('.selectedImage')
        let selectedPlanet = document.querySelector('.selected')
        let selectedPlanetCopy = document.querySelector('.selectedCopy')
        
        planets = Array.from(planets)
        
        planets.forEach((planet)=> {
            
            planet.addEventListener('click', (e) => {  
                console.log(planet)              
                setThePlanets(e.target.id)
                // Switch the image to the clicked planet
                let planetImage = document.getElementById(e.target.id+'Image')
                if (planetImage.classList.contains('selectedImage')) {
                    return
                } else if (!planetImage.classList.contains('selectedImage')) {
                    
                    currentSelectedImage.classList.remove('selectedImage')
                    currentSelectedImage.classList.add('hidden')
                    planetImage.classList.add('selectedImage')
                    currentSelectedImage = planetImage;
                }

                // Toggle the menu bar between planets
                if (planet.classList.contains('selected')) {
                    return
                } else if (!planet.classList.contains('selected')) {
                    selectedPlanet.classList.remove('selected')
                    planet.classList.add('selected')
                    selectedPlanet = planet
                }

                // Toggle the info section
                let planetCopy = document.getElementById(e.target.id+'Wrapper')
                console.log(planetCopy)
                if (planetCopy.classList.contains('selectedCopy')) {
                    console.log('copy here')
                    return
                } else if (!planetCopy.classList.contains('selectedCopy')) {
                    console.log('copy not here')
                    selectedPlanetCopy.classList.remove('selectedCopy')
                    selectedPlanetCopy.classList.add('hidden')
                    planetCopy.classList.add('selectedCopy')
                    planetCopy.classList.remove('hidden')
                    selectedPlanetCopy = planetCopy
                }      
            })
        })

    },[])

  return (
    <>
        <div id="destinationContainer" className='mt-[34px] md:mt-16 xl:mt-[100px]'>
            <div id="destinationHeader" className='flex justify-center mb-8 md:justify-start md:items-center md:pl-[15px] md:mb-[54px]'>
                <div id="destinationHeadNumber" className='text-white mr-[18px] font-["Barlow_Condensed"] text-base font-bold tracking-[2.7px] opacity-25 md:text-xl md:tracking-[3.375px] xl:text-[28px] xl:tracking-[4.725px]'>
                    <p>01</p>
                </div>
                <div id="destinationHeadCopy" className='text-white font-["Barlow_Condensed" text-base font-normal tracking-[2.7px] uppercase md:text-xl md:tracking-[3.375px] xl:text-[28px] xl:tracking-[4.725px]'>
                    <p>Pick your destination</p>
                </div>
            </div>
            <div id="destinationImageMenuCopy" className='xl:flex'>
                <div id="destinationImage" className='xl:mr-[157px] xl:pl-[65px]'>
                    <div id="moonImage" className='selectedImage w-full h-[259px] hidden justify-center items-center mb-[30px] md:h-[457px] md:mb-[54px] xl:h-[445px]'>
                        <img src={MoonImage} alt={Data.destinations[0].name} className='w-[259px] h-[259px] md:w-[457px] md:h-[457px] xl:w-[445px] xl:h-[445px]' />
                    </div>
                    <div id="marsImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px] md:h-[457px] md:mb-[54px] xl:h-[445px]'>
                        <img src={MarsImage} alt={Data.destinations[1].name} className='w-[259px] h-[259px] md:w-[457px] md:h-[457px] xl:w-[445px] xl:h-[445px]' />
                    </div>
                    <div id="europaImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px] md:h-[457px] md:mb-[54px] xl:h-[445px]'>
                        <img src={EuropaImage} alt={Data.destinations[2].name} className='w-[259px] h-[259px] md:w-[457px] md:h-[457px] xl:w-[445px] xl:h-[445px]' />
                    </div>
                    <div id="titanImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px] md:h-[457px] md:mb-[54px] xl:h-[445px]'>
                        <img src={TitanImage} alt={Data.destinations[3].name} className='w-[259px] h-[259px] md:w-[457px] md:h-[457px] xl:w-[445px] xl:h-[445px]' />
                    </div>

                </div>
                <div id="destinationMenuCopy" className='xl:flex xl:flex-col xl:w-[445px] xl:items-start'>
                    <div id="destMenu" className='mb-5 md:mb-8'>
                        <ul className='flex justify-evenly font-["Barlow_Condensed"] text-base font-normal uppercase tracking-[2.7px] md:justify-center'>    
                            <li id='moon' className='selected planet text-lightBlue h-[28px] md:mr-[35px] cursor-pointer hover:border-b-[3px] hover:border-b-white/50'>Moon</li>
                            <li id='mars' className='planet h-[28px] text-lightBlue md:mr-[35px] cursor-pointer hover:border-b-[3px] hover:border-b-white/50'>Mars</li>
                            <li id='europa' className='planet h-[28px] text-lightBlue md:mr-[35px] cursor-pointer hover:border-b-[3px] hover:border-b-white/50'>Europa</li>
                            <li id='titan' className='planet h-[28px] text-lightBlue cursor-pointer hover:border-b-[3px] hover:border-b-white/50'>Titan</li> 
                        </ul>
                    </div>
                    <div id="moonWrapper" className='selectedCopy'>
                        <Moon />
                    </div>
                    <div id="marsWrapper" className='hidden'>
                        <Mars />
                    </div>
                    <div id="europaWrapper" className='hidden'>
                        <Europa />
                    </div>
                    <div id="titanWrapper" className='hidden'>
                        <Titan />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Destination
