import React from 'react'
import { motion } from "framer-motion"

function Button() {
  return (
    <>
      <motion.div whileTap={{ scale: 0.9 }} id="exploreButtonContainer" className='flex justify-center cursor-pointer xl:border-[88px] xl:border-[transparent] xl:rounded-[50%] xl:hover:border-[88px] xl:hover:border-[rgba(255,255,255,0.5)] transition'>
        <div id="exploreButton" className='w-[150px] h-[150px] bg-white flex justify-center items-center rounded-[50%] md:w-[242px] md:h-[242px] xl:w-[274px] xl:h-[274px]'>
          <p className='text-dark text-center font-["Bellefair"] text-xl font-normal tracking-[1.25px] md:text-[32px] md:tracking-[2px] xl:text-[32px]'>EXPLORE</p>
        </div>
      </motion.div>
    </>
  )
}

export default Button
