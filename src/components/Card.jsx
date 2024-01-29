import React from 'react'

const Card = ({image}) => {
  return (
    <div className="card bg-white w-96  overflow-hidden rounded-3xl shadow-2xl">
        <div className="img">
<img src={image} alt="banner" className=' w-full h-52 object-cover' />
        </div>
        <div className="info">
    <p className=' font-semibold p-12 montserrat-font'>GENESIS</p>
        </div>
    </div>
  )
}

export default Card
