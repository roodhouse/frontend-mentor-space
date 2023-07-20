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
      const [thePerson, setThePerson] = useState('')

  useEffect(() => {
      let crew = document.querySelectorAll('.crew')
      let currentSelectedCrewImage = document.querySelector('.selectedCrewImage')
      let selectedCrew = document.querySelector('.selectedCrew')
      let selectedCrewCopy = document.querySelector('.selectedCrewCopy')

    crew = Array.from(crew)
        
        crew.forEach((person)=> {
            
            person.addEventListener('click', (e) => {  
                setThePerson(e.target.id)
                // Switch the image to the clicked person
                let crewImage = document.getElementById(e.target.id+'Image')
                if (crewImage.classList.contains('selectedCrewImage')) {
                    return
                } else if (!crewImage.classList.contains('selectedCrewImage')) {
                    currentSelectedCrewImage.classList.remove('selectedCrewImage')
                    currentSelectedCrewImage.classList.add('hidden')
                    crewImage.classList.add('selectedCrewImage')
                    currentSelectedCrewImage = crewImage;
                }

                // Toggle the menu bar between people
                if (person.classList.contains('selectedCrew')) {
                    return
                } else if (!person.classList.contains('selectedCrew')) {
                    selectedCrew.classList.remove('selectedCrew')
                    person.classList.add('selectedCrew')
                    selectedCrew = person
                }

                // // Toggle the info section
                let crewCopy = document.getElementById(e.target.id+'Wrapper')
                console.log(crewCopy)
                if (crewCopy.classList.contains('selectedCrewCopy')) {
                    console.log('copy here')
                    return
                } else if (!crewCopy.classList.contains('selectedCrewCopy')) {
                    console.log('copy not here')
                    selectedCrewCopy.classList.remove('selectedCrewCopy')
                    selectedCrewCopy.classList.add('hidden')
                    crewCopy.classList.add('selectedCrewCopy')
                    crewCopy.classList.remove('hidden')
                    selectedCrewCopy = crewCopy
                }      
            })
        })
  })


  return (
    <>
        <div id="crewContainer" className='mt-[34px] md:mt-16 md:flex md:flex-col xl:mt-[100px] xl:flex-wrap xl:h-[712px]'>
            <div id="crewHeader" className='flex justify-center mb-8 md:justify-start md:items-center md:pl-[15px] md:mb-[60px] md:order-1 xl:mb-[154px]'>
                <div id="crewHeadNumber" className='text-white mr-[18px] font-["Barlow_Condensed"] text-base font-bold tracking-[2.7px] opacity-25 md:text-xl md:tracking-[3.375px] xl:text-[28px] xl:tracking-[4.725px]'>
                    <p>02</p>
                </div>
                <div id="crewHeadCopy" className='text-white font-["Barlow_Condensed" text-base font-normal tracking-[2.7px] uppercase md:text-xl md:tracking-[3.375px] xl:text-[28px] xl:tracking-[4.725px]'>
                    <p>Meet your crew</p>
                </div>
            </div>
            <div id="crewImage" className='md:order-4'>
                <div id="commanderImage" className='selectedCrewImage hidden justify-center items-center md:mt-[6px] xl:mt-0 xl:ml-[141px]'>
                    <img src={CommanderImage} alt={Data.crew[0].name} className='w-[177px] h-[222px] md:w-[456px] md:h-[532px] xl:w-[568px] xl:h-[712px]' />
                </div>
                <div id="missionSpecialistImage" className='hidden justify-center items-center xl:mt-[10px] xl:ml-10'>
                    <img src={MissionSpecialistImage} alt={Data.crew[1].name} className='w-[154px] h-[222px] md:w-[368px] md:h-[532px] xl:w-[453px] xl:h-[654px] ' />
                </div>
                <div id="pilotImage" className='hidden justify-center items-center xl:ml-[180px]'>
                    <img src={PilotImage} alt={Data.crew[2].name} className='w-[181px] h-[222px] md:w-[433px] md:h-[532px] xl:w-[554px] xl:h-[681px]' />
                </div>
                <div id="flightEngineerImage" className='hidden justify-center items-center xl:mt-[57px] xl:ml-[52px]'>
                    <img src={FlightEngineerImage} alt={Data.crew[3].name} className='w-[226px] h-[222px] md:w-[539px] md:h-[532px] xl:w-[615px] xl:h-[607px]' />
                </div>
            </div>
            <div id="crewBreakLine" className='w-full h-[1px] bg-[#383B4B] mb-8 md:hidden'/>
            <div id="crewMenu" className='mb-5 md:order-3 md:mb-10'>
                <ul className='flex justify-center font-["Barlow_Condensed"] text-base font-normal uppercase tracking-[2.7px] xl:justify-start'>    
                    <li id='commander' className='selectedCrew crew w-[10px] h-[10px] bg-white rounded-[50%] opacity-[0.174363] mr-4 xl:w-[15px] xl:h-[15px] cursor-pointer hover:bg-white/50'></li>
                    <li id='missionSpecialist' className='crew w-[10px] h-[10px] bg-white rounded-[50%] opacity-[0.174363] mr-4 xl:w-[15px] xl:h-[15px] cursor-pointer hover:bg-white/50'></li>
                    <li id='pilot' className='crew w-[10px] h-[10px] bg-white rounded-[50%] opacity-[0.174363] mr-4 xl:w-[15px] xl:h-[15px] cursor-pointer hover:bg-white/50'></li>
                    <li id='flightEngineer' className='crew w-[10px] h-[10px] bg-white rounded-[50%] opacity-[0.174363] xl:w-[15px] xl:h-[15px] cursor-pointer hover:bg-white/50'></li>
                    
                </ul>
            </div>
            <div id="commanderWrapper" className='selectedCrewCopy md:order-2'>
                <Commander />
            </div>
            <div id="missionSpecialistWrapper" className='hidden md:order-2'>
                <MissionSpecialist />
            </div>
            <div id="pilotWrapper" className='hidden md:order-2'>
                <Pilot />
            </div>
            <div id="flightEngineerWrapper" className='hidden md:order-2'>
                <FlightEngineer />
            </div>
        </div>
    </>
  )
}

export default Crew