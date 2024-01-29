import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TextOutline from "../components/TextOutline";
import { ArrowBack } from "@mui/icons-material";
import ThemeControl from "../components/ThemeControl";
import Steps from "../components/Steps";
import Robot from "../canvas/Robot";
import { useNavigate } from "react-router-dom";
import { animate, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TechSection from "../components/TechSection";
import Languages from "../components/Languages";
const About = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="aboutpage relative overflow-y-hidden">
      <div className="logo p-4 flex gap-2 items-center">
        <h1 className=" font-black text-3xl happy-font" data-text={"HARSH"}>
          {"HARSH"}
        </h1>{" "}
        <div className="line w-2 rotate-180 rounded-3xl bg-black h-full"></div>
        <p className="text-wrap w-24">A Full Stack Web/Application Developer</p>
      </div>

      <p className=" happy-font font-semibold flex gap-4 p-8">
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
      <div className="fixed flex gap-4 top-4 z-50 right-4 bg-white rounded-3xl p-1">
        <div
          className="arrow cursor-pointer border-2 hover:border-3   rounded-full"
          onClick={goBack}
        >
          <motion.div
            whileHover={{
              x: [-50, 50, 0],
              transition: {
                yoyo: 1,
                duration: 1,
              },
            }}
          >
            <ArrowBack
              style={{
                fontSize: "3rem",
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
  );
};

export default About;
