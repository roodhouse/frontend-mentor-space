import React from 'react'
import TheMenuClose from '../../assets/shared/icon-close.svg'

function Menu() {
  return (
    <>
        <div id="menuContainer" className='w-[254px] flex flex-col items-end bg-[rgba(255,255,255,0.04)] h-screen backdrop-blur-[40.774227142333984px] absolute top-0 right-0 pl-8 z-20 md:pl-0 md:w-[450px] md:h-24 xl:w-[830px] xl:top-10 xl:static'>
            <div id="closeIconContainer" className='pr-6 pt-8 mb-[65px] md:hidden'>
                <img src={TheMenuClose} alt="Close menu" />
            </div>
            <div id="theMenu" className='w-full md:h-full'>
                <ul className='flex flex-col md:flex-row md:h-full md:items-baseline md:justify-evenly'>
                    <li id='linkhome' className='selectedLink link mb-8 md:mb-0 md:h-full md:flex md:items-center cursor-pointer'>
                            <div id='homeLeft' className='flex xl:items-center'>
                                <p className='mr-[11px] font-["Barlow_Condensed"] text-white text-base font-bold tracking-[2.7px] md:hidden xl:block'>00</p>
                                <p className='font-["Barlow_Condensed"] text-white text-base font-normal tracking-[2.7px] md:text-sm md:tracking-[2.362px]'>HOME</p>
                            </div>
                    </li>
                    <li id='linkdestination' className='link mb-8 md:mb-0 md:h-full md:flex md:items-center cursor-pointer'>
                            <div id="destinationLeft" className='flex xl:items-center'>
                                <p className='mr-[11px] font-["Barlow_Condensed"] text-white text-base font-bold tracking-[2.7px] md:hidden xl:block'>01</p>
                                <p className='font-["Barlow_Condensed"] text-white text-base font-normal tracking-[2.7px] md:text-sm md:tracking-[2.362px]'>DESTINATION</p>
                            </div>
                    </li>
                    <li id='linkcrew' className='link mb-8 md:mb-0 md:h-full md:flex md:items-center cursor-pointer'>
                            <div id="crewLeft" className='flex xl:items-center'>
                                <p className='mr-[11px] font-["Barlow_Condensed"] text-white text-base font-bold tracking-[2.7px] md:hidden xl:block'>02</p>
                                <p className='font-["Barlow_Condensed"] text-white text-base font-normal tracking-[2.7px] md:text-sm md:tracking-[2.362px]'>CREW</p>
                            </div>
                    </li>
                    <li id='linktech' className='link md:h-full md:flex md:items-center cursor-pointer'>
                            <div id="techLeft" className='flex xl:items-center'>
                                <p className='mr-[11px] font-["Barlow_Condensed"] text-white text-base font-bold tracking-[2.7px] md:hidden xl:block'>03</p>
                                <p className='font-["Barlow_Condensed"] text-white text-base font-normal tracking-[2.7px] md:text-sm md:tracking-[2.362px]'>TECHNOLOGY</p>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Menu