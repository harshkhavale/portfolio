import React from 'react'
import { contacts } from '../constants';
const Footer = () => {
  return (
    <div className='relative flex justify-center gap-4 items-center p-2'>
         <div>
            <p className='font-bold text-xl happy-font'>harshkhavale@2024</p>
          </div>
          <div className='bg-white h-10 p-1'></div>
       <div className="contact p-2 ">
            <ul className="list-none flex my-4 gap-4">
              {contacts.map((link) => (
                <li
                  key={link.id}
                  className={`bg-white shadow-2xl rounded-full p-1 text-black text-[18px] gap-2 font-medium cursor-pointer transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md`}
                >
                  {link.icon}
                </li>
              ))}
            </ul>
          </div>
         
    </div>
  )
}

export default Footer
