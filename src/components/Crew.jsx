import React, { useState, useEffect } from 'react'
import Commander from './crew/Commander'
import FlightEngineer from './crew/FlightEngineer'
import MissionSpecialist from './crew/MissionSpecialist'
import Pilot from './crew/Pilot'
import CommanderImage from '../assets/crew/image-douglas-hurley.png'
import MissionSpecialistImage from '../assets/crew/image-mark-shuttleworth.webp'
import PilotImage from '../assets/crew/image-victor-glover.webp'
import FlightEngineerImage from '../assets/crew/image-anousheh-ansari.webp'
import Data from '../data.json'

function Crew() {

  useEffect(() => {
    // Change background
    let mainWrapper = document.getElementById('mainWrapper')
    console.log(mainWrapper)
    mainWrapper.style.backgroundImage = "url('https://s3.us-east-2.amazonaws.com/images.rughdesign.com/wp-content/uploads/background-crew-mobile.jpg')"
  })
  return (
    <>
        <div id="crewContainer" className='mt-[34px]'>
            <div id="crewHeader" className='flex justify-center mb-8'>
                <div id="crewHeadNumber" className='text-white mr-[18px] font-["Barlow_Condensed"] text-base font-bold tracking-[2.7px] opacity-25'>
                    <p>02</p>
                </div>
                <div id="crewHeadCopy" className='text-white font-["Barlow_Condensed" text-base font-normal tracking-[2.7px] uppercase'>
                    <p>Meet your crew</p>
                </div>
            </div>
            <div id="crewImage">
                <div id="commanderImage" className='selectedImage hidden justify-center items-center mb-[30px]'>
                    <img src={CommanderImage} alt={Data.crew[0].name} className='w-[177px] h-[222px]' />
                </div>
                <div id="missionSpecialistImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px]'>
                    <img src={MissionSpecialistImage} alt={Data.crew[1].name} className='w-[259px] h-[259px]' />
                </div>
                <div id="pilotImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px]'>
                    <img src={PilotImage} alt={Data.crew[2].name} className='w-[259px] h-[259px]' />
                </div>
                <div id="flightEngineerImage" className='hidden w-full h-[259px] justify-center items-center mb-[30px]'>
                    <img src={FlightEngineerImage} alt={Data.crew[3].name} className='w-[259px] h-[259px]' />
                </div>

            </div>
            <div id="crewMenu" className='mb-5'>
                <ul className='flex justify-evenly font-["Barlow_Condensed"] text-base font-normal uppercase tracking-[2.7px]'>    
                    <li id='moon' className='selected planet text-lightBlue h-[28px]'>Moon</li>
                    <li id='mars' className='planet h-[28px] text-lightBlue'>Mars</li>
                    <li id='europa' className='planet h-[28px] text-lightBlue'>Europa</li>
                    <li id='titan' className='planet h-[28px] text-lightBlue'>Titan</li>
                    
                </ul>
            </div>
            <div id="commanderWrapper" className='selectedCopy'>
                <Commander />
            </div>
            <div id="missionSpecialistWrapper" className='hidden'>
                <MissionSpecialist />
            </div>
            <div id="pilotWrapper" className='hidden'>
                <Pilot />
            </div>
            <div id="flightEngineerWrapper" className='hidden'>
                <FlightEngineer />
            </div>
        </div>
    </>
  )
}

export default Crew