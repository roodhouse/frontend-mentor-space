import React, {useState, useEffect} from 'react'
import Logo from './header/Logo'
import Hamburger from './header/Hamburger'
import Menu from './header/Menu'
import { motion } from "framer-motion"

function Header() {


  useEffect(() => {
    const hamburger = document.getElementById('hamburger')
    const closeIconContainer = document.getElementById('closeIconContainer')
    
    hamburger.addEventListener('click', menuClick)
    closeIconContainer.addEventListener('click', closeMenu)
    
    
  },[])

  useEffect(() => {
    if (window.innerWidth < 768) {
      document.getElementById("theMenu").addEventListener('click', closeMenu)
      
  }
  })

  function menuClick(e) {
    const menuWrapper = document.getElementById('menuWrapper')
    menuWrapper.style.display = 'block'
    
  }

  function closeMenu(e) {
    const menuWrapper = document.getElementById('menuWrapper')
    menuWrapper.style.display = 'none'
  }
  

  return (
    <>
    <div id="headerContainer" className='xl:flex xl:items-center xl:justify-between'>
      <div id="iconContainer" className='flex justify-between items-center'>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: .8 }} id="logoWrapper" className='xl:mr-16'>
          <Logo />
        </motion.div>
        <div id="hamburger" className='md:hidden'>
          <Hamburger />
        </div>
      </div>
      <div id="mainLine" className='hidden xl:block xl:w-[473px] xl:h-[1px] bg-white opacity-[0.2514851987361908] xl:absolute xl:left-[167px] xl:z-10'/>
      <div id="menuWrapper" className='hidden md:block'>
        <Menu />
      </div>
    </div>
    </>
  )
}

export default Header