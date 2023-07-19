import React, {useState, useEffect} from 'react'
import Logo from './header/Logo'
import Hamburger from './header/Hamburger'
import Menu from './header/Menu'

function Header() {


  useEffect(() => {
    const hamburger = document.getElementById('hamburger')
    const closeIconContainer = document.getElementById('closeIconContainer')
    
    hamburger.addEventListener('click', menuClick)
    closeIconContainer.addEventListener('click', closeMenu)
    
    
  },[])

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
    <div id="headerContainer">
      <div id="iconContainer" className='flex justify-between items-center'>
        <div id="logoWrapper">
          <Logo />
        </div>
        <div id="hamburger" className='md:hidden'>
          <Hamburger />
        </div>
      </div>
      <div id="menuWrapper" className='hidden md:block'>
        <Menu />
      </div>
    </div>
    </>
  )
}

export default Header