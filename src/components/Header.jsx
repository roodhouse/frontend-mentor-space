import React from 'react'
import Logo from './header/Logo'
import Menu from './header/Menu'

function Header() {
  return (
    <>
      <div id="headerContainer" className='flex justify-between items-center'>
        <div id="logoWrapper">
          <Logo />
        </div>
        <div id="menu">
          <Menu />
        </div>
      </div>
    </>
  )
}

export default Header