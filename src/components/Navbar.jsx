import React, { useState, useEffect } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { menu,close } from "../assets";
import { contacts, navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <div className=" fixed z-50  w-2/3 navbar flex justify-center pt-2">
     
      <div className=" bg-white text-gray-500  mt-2 rounded-3xl p-4 ">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
       
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}

              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:underline underline-offset-8  text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}> /{link.title}</a>
            </li>
          ))}
          
        </ul>
       

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px]  object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

        </div>
      </div>

      <div
        className={`${toggle ? "hidden" : "flex-col"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px]  z-10 rounded-xl`}
      >

        <ul className="list-none my-2 flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#3cffd8]" : "text-white"
                } hover:text-[#3cffd8] font-medium text-[17px] cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="list-none flex my-4 justify-end items-start flex-col gap-4">
          {contacts.map((link) => (
            <li
            key={link.id}
            className={`${active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] gap-2 font-medium cursor-pointer`}
            onClick={() => {
              setActive(link.title);
            }}
          >{link.icon}
            <a className="text-xs px-2 hover:underline underline-offset-8" href={`${link.url}`} target='_blank'>{link.url}</a>
          </li>
          ))}
        </ul>
      </div>
      </div>
      {
        
      }
    </div>
  );
};

export default Navbar;
