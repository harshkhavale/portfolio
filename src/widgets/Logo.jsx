import React from 'react'
import { logo } from '../assets'

const Logo = () => {
  return (
    <div>
      <div className="logo p-4 flex gap-2 items-center">
        <img src={logo} alt="logo" />
        <div className="line w-2 rotate-180 rounded-3xl bg-black h-full"></div>
        <p className="text-wrap w-24">A Full Stack Web/Application Developer</p>
      </div> 
    </div>
  )
}

export default Logo
