import React from 'react'
import TheMenuClosed from '../../assets/shared/icon-hamburger.svg'

function Hamburger() {
  return (
    <>
      <div id="iconContainer">
        <div id="closedMenuContainer" className=''>
          <img src={TheMenuClosed} id='menu' alt="Closed Menu" />
        </div>
      </div>
    </>
  )
}

export default Hamburger