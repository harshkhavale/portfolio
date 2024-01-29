import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  CircleNotifications,
  FireExtinguisher,
  Leaderboard,
  StarsTwoTone,
} from "@mui/icons-material";
import { boycycle, pattern, room } from "../assets";
import { Sky, Sparkles } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IDELayout = () => {
  useEffect(() => {
    window.onload = function () {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.to(".asch", {
        scrollTrigger: {
          trigger: ".pallate",
          screenX:100,
          yPercent: -100,
          duration: 5,
          markers: true,
          ease: "Power3.easeInOut",
        },
      });
    };
  }, []);
  

  return (
    <div className="idelayout bg-zinc-900 h-[600rem] relative text-xs text-gray-300">
      <div className="ide sticky top-0 h-[40rem]">
        <motion.div
          // animate={{ rotateX: 30, rotateY: 10, rotateZ: -10 }}
          className="asch absolute right-20 top-40 bg-zinc-800 rounded-2xl p-4 h-[30rem] w-[40rem] "
        >
          <motion.div className="dots ">
            <motion.div className="flex gap-2">
              <div className="bg-zinc-700 rounded-full p-2" />
              <div className="bg-zinc-700 rounded-full p-2" />
              <div className="bg-zinc-700 rounded-full p-2" />
            </motion.div>
          </motion.div>
          <div className="features w-82   absolute top-36  p-4 rounded-lg">
            <div className=" flex relative flex-col h-full w-full">
              <div className="content  p-4 rounded-3xl">
                <div className=" nav flex items-center gap-8 text-xs font-bold ">
                  <p className="bg-zinc-700 px-2 pt-2 rounded-t-2xl">
                    Features
                  </p>
                  <p>Messages</p>
                  <p>Links</p>
                </div>
                <ul className="bg-zinc-700 p-4 flex flex-col gap-4 rounded-b-3xl w-full">
                  <li className=" flex justify-between">
                    <p className="text-sm">Faster Development</p>{" "}
                    <div className="toggle  border-2 border-green-500 relative rounded-full p-3 w-10 flex items-center">
                      <div className="ball rounded-full absolute w-1 p-2 m-1 end-0 right-0  bg-green-500" />
                    </div>
                  </li>
                  <li className=" flex justify-between">
                    <p className="text-sm">Cleaner Code</p>{" "}
                    <div className="toggle border-2 border-pink-500 relative rounded-full p-3 w-10 flex items-center">
                      <div className="ball rounded-full absolute w-1 p-2 m-1 end-0 right-0  bg-pink-500" />
                    </div>
                  </li>
                  <li className=" flex justify-between">
                    <p className="text-sm">Pure Abstraction</p>{" "}
                    <div className="toggle border-2 border-orange-500 relative rounded-full p-3 w-10 flex items-center">
                      <div className="ball rounded-full absolute w-1 p-2 m-1 end-0 right-0  bg-orange-500" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="system w-96 h-60 absolute top-4 left-40  bg-zinc-700 rounded-xl m-4">
            <div className="flex gap-4 p-8">
              <h1 className="happy-font">Design</h1>
              <FireExtinguisher />
              <CircleNotifications />
            </div>

            <div className="info flex flex-col gap-1">
              <div className="line flex gap-1">
                <div className="blue bg-blue-500 p-1 w-2 rounded-xl"></div>
                <div className="skyblue bg-sky-500 p-1 w-4 rounded-xl"></div>
                <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                <div className="pink bg-pink-500 p-1 w-8 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
                <div className="teal bg-teal-500 p-1 w-12 rounded-xl"></div>
                <div className="pink bg-sky-500 p-1 w-8 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
                <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
                <div className="teal bg-teal-500 p-1 w-8 rounded-xl"></div>
              </div>
              <div className="">
                <p className="sourcecode-font dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  voluptatum, possimus minus magni magnam vitae? Ea itaque
                  doloremque aspernatur hic perspiciatis velit sint labore.
                  Perferendis.
                </p>
              </div>
              <div className="line flex gap-1">
                {" "}
                <div className="pink bg-pink-500 p-1 w-4 rounded-xl"></div>
                <div className="yellow bg-yellow-500 w-8 p-1 rounded-xl"></div>
                <div className="yellow bg-blue-500 w-2 p-1 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                {" "}
                <div className="blue bg-orange-500 p-1 w-16 rounded-xl"></div>
                <div className="skyblue bg-sky-500 p-1 w-8 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                <div className="blue bg-blue-500 p-1 w-8 rounded-xl"></div>
                <div className="skyblue bg-sky-500 p-1 w-10 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
                <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                <div className="teal bg-teal-500 p-1 w-8 rounded-xl"></div>
                <div className="pink bg-pink-500 p-1 w-4 rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className="colors w-[30rem] h-60 absolute top-72 left-60  bg-zinc-700/30 rounded-xl m-4">
            <div className="info flex flex-col gap-1">
              <div className="line flex gap-1">
                <div className="blue bg-blue-500 p-1 w-2 rounded-xl"></div>
                <div className="skyblue bg-sky-500 p-1 w-4 rounded-xl"></div>
                <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                <div className="pink bg-pink-500 p-1 w-8 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
                <div className="teal bg-teal-500 p-1 w-12 rounded-xl"></div>
                <div className="pink bg-sky-500 p-1 w-8 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
                <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
                <div className="teal bg-teal-500 p-1 w-8 rounded-xl"></div>
              </div>
              <div className="">
                <p className="sourcecode-font dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  voluptatum, possimus minus magni magnam vitae? Ea itaque
                  doloremque aspernatur hic perspiciatis velit sint labore.
                  Perferendis.
                </p>
              </div>
              <div className="line flex gap-1">
                {" "}
                <div className="pink bg-pink-500 p-1 w-4 rounded-xl"></div>
                <div className="yellow bg-yellow-500 w-8 p-1 rounded-xl"></div>
                <div className="yellow bg-blue-500 w-2 p-1 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                {" "}
                <div className="blue bg-orange-500 p-1 w-16 rounded-xl"></div>
                <div className="skyblue bg-sky-500 p-1 w-8 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                <div className="blue bg-blue-500 p-1 w-8 rounded-xl"></div>
                <div className="skyblue bg-sky-500 p-1 w-10 rounded-xl"></div>
              </div>
              <div className="line flex gap-1">
                <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
                <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                <div className="teal bg-teal-500 p-1 w-8 rounded-xl"></div>
                <div className="pink bg-pink-500 p-1 w-4 rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className="pallate absolute flex -top-16 -right-10 w-40 h-10  border-4 shadow-2xl border-gray-500 rounded-2xl overflow-hidden">
            <div className="color p-4 bg-red-500" />
            <div className="color p-4 bg-yellow-500" />

            <div className="color p-4 bg-green-500" />

            <div className="color p-4 bg-blue-500" />

            <div className="color p-4 bg-orange-500" />
          </div>
          <div className="image absolute top-52 -right-10 w-52 h-60 border-4 shadow-3xl border-gray-500 rounded-2xl overflow-hidden">
            <img src={boycycle} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="aim flex absolute start-0 bottom-0 gap-2 flex-col p-4">
            <div className="learn  flex gap-4  bg-zinc-900  p-2 rounded-2xl">
              <Leaderboard />
              <div>
                <p className="font-semibold">Learn</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="learn  flex gap-4  bg-zinc-900  p-2 rounded-2xl">
              <StarsTwoTone />
              <div>
                <p>Learn</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>{" "}
            <div className="learn  flex gap-4   bg-zinc-900  p-2 rounded-2xl">
              <Leaderboard />
              <div>
                <p>Learn</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="asch"></div>
      </div>
    </div>
  );
};

export default IDELayout;
