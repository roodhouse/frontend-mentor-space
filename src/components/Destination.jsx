import React, { useState, useEffect } from 'react'
import Data from '../data.json'
import { useParams } from 'react-router-dom';
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
   
    // const { destination } = useParams()
    // console.log(useParams())

    // Data.destinations.forEach((place) => {
    //     console.log(place)
    // })

    useEffect(() => {
        let planets = document.querySelectorAll('.planet')
        let currentSelectedImage = document.querySelector('.selectedImage')
        
        planets = Array.from(planets)
        
        planets.forEach((planet)=> {
            
            planet.addEventListener('click', (e) => {                
                setThePlanets(e.target.id)
                let planetImage = document.getElementById(e.target.id+'Image')

                if (planetImage.classList.contains('selectedImage')) {
                    return
                } else if (!planetImage.classList.contains('selectedImage')) {
                    
                    currentSelectedImage.classList.remove('selectedImage')
                    currentSelectedImage.classList.add('hidden')
                    planetImage.classList.add('selectedImage')
                    currentSelectedImage = planetImage;
                }
                
            })
        })

    },[])

    // let planetImage = document.getElementById(thePlanets+'Image')
    // console.log(planetImage)
    // planetImage.classList.remove('hidden') 

  return (
    <>
        <div id="destinationContainer" className='mt-[34px]'>
            <div id="destinationHeader" className='flex justify-center mb-9'>
                <div id="destinationHeadNumber" className='text-white mr-[18px] font-["Barlow_Condensed"] text-base font-bold tracking-[2.7px] opacity-25'>
                    <p>01</p>
                </div>
                <div id="destinationHeadCopy" className='text-white font-["Barlow_Condensed" text-base font-normal tracking-[2.7px] uppercase'>
                    <p>Pick your destination</p>
                </div>
            </div>
            <div id="destinationImage">
                <div id="moonImage" className='selectedImage w-full h-[259px] hidden justify-center items-center mb-[30px]'>
                    <img src={MoonImage} alt={Data.destinations[0].name} className='w-[259px] h-[259px]' />
                </div>
                <div id="marsImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px]'>
                    <img src={MarsImage} alt={Data.destinations[1].name} className='w-[259px] h-[259px]' />
                </div>
                <div id="europaImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px]'>
                    <img src={EuropaImage} alt={Data.destinations[2].name} className='w-[259px] h-[259px]' />
                </div>
                <div id="titanImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px]'>
                    <img src={TitanImage} alt={Data.destinations[3].name} className='w-[259px] h-[259px]' />
                </div>

            </div>
            <div id="destMenu" className='mb-5'>
                <ul className='flex justify-evenly font-["Barlow_Condensed"] text-base font-normal uppercase tracking-[2.7px]'>    
                    <li id='moon' className='selected planet text-lightBlue h-[28px]'>Moon</li>
                    <li id='mars' className='planet h-[28px] text-lightBlue'>Mars</li>
                    <li id='europa' className='planet h-[28px] text-lightBlue'>Europa</li>
                    <li id='titan' className='planet h-[28px] text-lightBlue'>Titan</li>
                    
                </ul>
            </div>
            <div id="moonWrapper">
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
    </>
  )
}

export default Destination
