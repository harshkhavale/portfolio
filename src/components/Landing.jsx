import React, { useState } from "react";
import WandererCanvas from "../canvas/Wanderer";
import Section from "./Section";
import { easeInOut, motion } from "framer-motion";
import RobotCanvas from "../canvas/Robot";
import { ThemeContext } from "@emotion/react";
import ThemeControl from "./ThemeControl";
import { contacts } from "../constants";
import TextOutline from "./TextOutline";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Landing = () => {
  const navigate = useNavigate();
  const handleRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="relative   h-screen w-screen bg-transparent overflow-hidden  flex">
      <Logo />
      <div className=" absolute background w-4/5 shadow-2xl h-4/5 m-16  ">
      <div className="robot w-screen h-full flex justify-center   items-center flex-1 z-0">
        <RobotCanvas />
      </div>
      </div>
      
      <div className="mode absolute end-0  p-4  z-50 flex justify-center overflow-hidden items-center text-black py-4 rounded-[50px] ">
        <ThemeControl />
      </div>
      <div className=" absolute bottom-20 md:bottom-0 right-0 p-4 ">
        <ul className="list-none flex my-4 justify-end items-start flex-col gap-4">
          {contacts.map((link) => (
            <li
              key={link.id}
              className={`bg-white shadow-xl rounded-full p-4 text-black text-[18px] gap-2 font-medium cursor-pointer transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md`}
              onClick={() => handleRoute(link.url)}
            >
              {link.icon}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ fontFamily: 'Belgan' }} className="fixed text-gray-100 flex items-center md:start-52  dark:bg-transparent  start-10 top-64  p-2 md:text-9xl text-5xl  font-black ">
        Art through code
      </div>
      <div className="links md:p-8 p-4 z-50 cursor-pointer absolute bottom-5 md:bottom-0">
        <motion.h1
          className="text-outline text-outline-hover font-black md:text-7xl text-7xl"
          data-text="WORK"
          onClick={() => handleRoute("/work")}
        >
          WORK
        </motion.h1>
        <motion.h1
          className="text-outline text-outline-hover font-black md:text-7xl text-7xl"
          data-text="ABOUT"
          onClick={() => handleRoute("/about")}
        >
          ABOUT
        </motion.h1>
        <motion.h1
          className="text-outline text-outline-hover font-black md:text-7xl text-7xl"
          data-text="CONTACT"
          onClick={() => handleRoute("/contact")}
        >
          CONTACT
        </motion.h1>
      </div>
    </div>
  );
};

export default Landing;
