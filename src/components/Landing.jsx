import React, { useState } from "react";
import WandererCanvas from "../canvas/Wanderer";
import Section from "./Section";
import { easeInOut, motion } from "framer-motion";
import RobotCanvas from "../canvas/Robot";
import { ThemeContext } from "@emotion/react";
import ThemeControl from "./ThemeControl";
import { contacts } from "../constants";
import TextOutline from "./TextOutline";
import { blob3 } from "../assets";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const handleRoute=(route)=>{
    navigate(route);

  }
  return (
    <div className="relative h-screen w-screen bg-sky-500 dark:bg-transparent overflow-hidden  flex">
      <img
        src={blob3}
        alt="blob"
        className="absolute -top-10 h-80 w-80 -start-20 z-50"
      />
       <p className="url fixed top-52 opacity-5 bg-transparent  right-[-200px] dark:opacity-10 font-black text-[10rem] -rotate-90 happy-font ">
        /Home{" "}
      </p>

      <div className="name text-white text-center rounded-full p-8 z-50  absolute">
        <p className=" text-7xl text-start my-[-20px] happy-font font-bold">
          H
        </p>
        <div className="flex">
          <p className=" text-7xl happy-font text-start my-[-15px]  ">A</p>
          <p className=" text-7xl text-start happy-font my-[-20px] font-bold">
            R
          </p>
        </div>
        <div className="flex my-[-10px]">
          <p className=" text-7xl text-start font-bold happy-font">S</p>
          <p className=" text-7xl text-start font-black happy-font">H </p>
          <p className=" text-7xl text-start font-bold happy-font">.</p>
        </div>
      </div>
      <div className="robot w-screen h-full flex justify-center  items-center flex-1 z-0">
        <RobotCanvas />
      </div>
      <div className="mode absolute end-0  p-4  z-50 flex justify-center overflow-hidden items-center text-black py-4 rounded-[50px] ">
        <ThemeControl />
      </div>
      <div className=" absolute bottom-0 right-0 p-4 ">
        <ul className="list-none flex my-4 justify-end items-start flex-col gap-4">
          {contacts.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }  bg-white rounded-full p-4 text-black text-[18px] gap-2 font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              {link.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="links p-8 z-50 cursor-pointer absolute bottom-0">
        <motion.h1
          className="text-outline text-outline-hover font-black md:text-9xl text-7xl"
          data-text="WORK"
          onClick={()=>handleRoute("/work")}

        >
          WORK
        </motion.h1>
        <motion.h1
          className="text-outline text-outline-hover font-black md:text-9xl text-7xl"
          data-text="ABOUT"
          onClick={()=>handleRoute("/about")}
        >
          ABOUT
        </motion.h1>
        <motion.h1
          className="text-outline text-outline-hover font-black md:text-9xl text-7xl"
          data-text="CONTACT"
          onClick={()=>handleRoute("/contact")}

        >
          CONTACT
        </motion.h1>
      </div>
    </div>
  );
};

export default Landing;
