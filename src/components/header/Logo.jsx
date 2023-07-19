import React from 'react'
import TheLogo from '../../assets/shared/logo.svg'

function Logo() {
  return (
    <>
      <div id="logoContainer" className='w-10 h-10 lg:w-12 lg:h-12'>
        <img src={TheLogo} alt="Logo" />
      </div>
    </>
  )
}

export default Logo