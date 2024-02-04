import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { ArrowBack } from "@mui/icons-material";
import ThemeControl from "../components/ThemeControl";

import { useNavigate } from "react-router-dom";
import {motion } from "framer-motion";
import TechSection from "../components/TechSection";
const About = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="about relative overflow-hidden">
      

      <div className="flex justify-end">
        <div className="navbar flex justify-center bg-white rounded-3xl w-min text-black px-4 items-center">
          <p className=" happy-font font-semibold flex gap-4 ">
            Home <p>{">"}</p> about
          </p>
          <p
            className="url fixed top-52 opacity-5 bg-transparent  left-[-300px] dark:opacity-10 font-black text-[10rem] rotate-90 "
            style={{
              fontFamily: "Belgan",
              fontSize: "15rem",
            }}
          >
            ABOUT
          </p>

          <div className=" flex gap-4 top-4 z-50 right-4 rounded-3xl p-1">
            <div
              className="arrow cursor-pointer border-2 hover:border-3  overflow-hidden  rounded-full"
              onClick={goBack}
            >
              <motion.div
                whileHover={{
                  x: [0, -50, 50, 0],
                  transition: {
                    yoyo: 1,
                  },
                }}
              >
                <ArrowBack
                  style={{
                    fontSize: "2rem",
                  }}
                  className="p-1"
                />
              </motion.div>
            </div>
            <div className="theme">
              <ThemeControl />
            </div>
          </div>
        </div>
      </div>
      <p
        className="url fixed top-52 opacity-5 bg-transparent  left-[-300px] dark:opacity-10 font-black text-[10rem] rotate-90 "
        style={{
          fontFamily: "Belgan",
          fontSize: "15rem",
        }}
      >
        ABOUT
      </p>

      <div className="relative w-full mt-0 ">
        <Hero />
        <Services />
        <div className="difference flex flex-col p-20">
          <p className="font-bold text-5xl italic -mb-24" style={{ fontFamily: "Belgan" }}>
            the difference between
          </p>
          <div className="flex gap-8">
            <p className="text-[25rem]" style={{ fontFamily: "Belgan" }}>
              Self
            </p>
            <p
              className="font-bold text-7xl flex justify-center items-center"
              style={{ fontFamily: "Belgan" }}
            >
              &
            </p>
          </div>
          <div className="flex justify-between -mt-52">
            <p className="w-1/3 mt-20 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quis saepe expedita ullam iusto quae tempore sunt, labore dolorem
              iure!
            </p>
            <p
              className="text-[20rem] text-left"
              style={{ fontFamily: "Belgan" }}
            >
              Others
            </p>
          </div>
        </div>
        <TechSection />
      </div>
      
    </div>
  );
};

export default About;
