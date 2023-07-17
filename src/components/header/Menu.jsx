import React from 'react'
import TheMenuClosed from '../../assets/shared/icon-hamburger.svg'

function Menu() {
  return (
    <>
    <div id="menuContainer">
      <img src={TheMenuClosed} alt="Closed Menu" />
    </div>
    </>
  )
}

export default Menu