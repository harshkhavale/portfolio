import React from "react";
import { blackblob, blob1, blob2, blob3, grayblob } from "../assets";
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <motion.div className="relative">
      <div>
        <motion.img
          initial={{ x: 50, y: 50, scale: 20,  }}
          animate={{ x: 0, y: 0, scale: 1 ,}}
          transition={{ duration: 10, ease: "easeInOut" }}
          src={blob3}
          alt="blob"
          className="fixed  -top-16 h-80 w-80 -start-20 z-10"
        />
      </div>

      <div className="name text-white text-center rounded-full p-2 z-50  absolute">
        <p className=" text-7xl text-start my-[-20px] happy-font font-bold">
          H
        </p>
        <div className="flex">
          <p className=" text-7xl happy-font text-start my-[-15px] font-bold ">
            A
          </p>
          <p className=" text-7xl text-start happy-font my-[-20px] font-bold">
            R
          </p>
        </div>
        <div className="flex my-[-8px]">
          <p className=" text-7xl text-start font-bold happy-font">S</p>
          <p className=" text-7xl text-start font-bold happy-font">H </p>
          <p className=" text-7xl text-start font-bold happy-font">.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;
