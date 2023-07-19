import React from 'react'
import TheMenuClose from '../../assets/shared/icon-close.svg'

function Menu() {
  return (
    <>
        <div id="menuContainer" className='w-[254px] flex flex-col items-end bg-[rgba(255,255,255,0.04)] h-screen backdrop-blur-[40.774227142333984px] absolute top-0 right-0 pl-8 z-20'>
            <div id="closeIconContainer" className='pr-6 pt-8 mb-[65px]'>
                <img src={TheMenuClose} alt="Close menu" />
            </div>
            <div id="theMenu" className='w-full'>
                <ul className='flex flex-col'>
                    <li className='mb-8'>
                        <a href="/" className='text-white flex justify-between items-center h-[31px] hover:border-r-4 hover:border-r-white'>
                            <div id='homeLeft' className='flex'>
                                <p className='mr-[11px] font-["Barlow_Condensed"] text-white text-base font-bold tracking-[2.7px]'>00</p>
                                <p className='font-["Barlow_Condensed"] text-white text-base font-normal tracking-[2.7px]'>HOME</p>
                            </div>
                        </a>
                    </li>
                    <li className='mb-8'>
                        <a href="destination" className='text-white flex justify-between items-center h-[31px] hover:border-r-4 hover:border-r-white'>
                            <div id="destinationLeft" className='flex'>
                                <p className='mr-[11px] font-["Barlow_Condensed"] text-white text-base font-bold tracking-[2.7px]'>01</p>
                                <p className='font-["Barlow_Condensed"] text-white text-base font-normal tracking-[2.7px]'>DESTINATION</p>
                            </div>
                        </a>
                    </li>
                    <li className='mb-8'>
                        <a href="crew" className='text-white flex justify-between items-center h-[31px] hover:border-r-4 hover:border-r-white'>
                            <div id="crewLeft" className='flex'>
                                <p className='mr-[11px] font-["Barlow_Condensed"] text-white text-base font-bold tracking-[2.7px]'>02</p>
                                <p className='font-["Barlow_Condensed"] text-white text-base font-normal tracking-[2.7px]'>CREW</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="technology" className='text-white flex justify-between items-center h-[31px] hover:border-r-4 hover:border-r-white'>
                            <div id="techLeft" className='flex'>
                                <p className='mr-[11px] font-["Barlow_Condensed"] text-white text-base font-bold tracking-[2.7px]'>03</p>
                                <p className='font-["Barlow_Condensed"] text-white text-base font-normal tracking-[2.7px]'>TECHNOLOGY</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Menu