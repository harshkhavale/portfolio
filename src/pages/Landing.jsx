import React from 'react'
import Landing from '../components/Landing'
import { blob3 } from '../assets'
const Landing = () => {
  return (
    <div className='relative'>
        {/* <Landing/> */}

        <img src={blob3} alt="" className="absolute top-0 start-0 z-50" />

    </div>
  )
}

export default Landing
