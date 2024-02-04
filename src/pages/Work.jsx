import React, {useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  urbananime,
  spotifyanime,
  academixanime,
  airbnbanime,
  socialanime,
  parkouranime,
} from "../assets/projects";
import ThemeControl from "../components/ThemeControl";

import {robox} from "../assets";

import { useNavigate } from "react-router-dom";

import { ArrowBack} from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import Project from "../widgets/Project";
const Work = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const projects = [
    {
      title: "Parkour",
      image: parkouranime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 4,
    },
    {
      title: "urban_store",
      image: urbananime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 2,
    },
    {
      title: "spotify",
      image: spotifyanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 3,
    },
    {
      title: "ACADEMIX",
      image: academixanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 2,
    },
    {
      title: "Airbnb",
      image: airbnbanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 3,
    },
    {
      title: "social",
      image: socialanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 3,
    },
  ];

  return (
    <div>
      <div className="flex justify-end pt-2">
        <div className="navbar flex justify-center gap-6  rounded-3xl w-min  px-4 items-center">
          <p className=" happy-font font-semibold flex gap-4  italic">
            Home <p>{">"}</p> work
          </p>
          <p
            className="url fixed top-52 opacity-5 bg-transparent  left-[-300px] dark:opacity-10 font-black text-[10rem] rotate-90 "
            style={{
              fontFamily: "Belgan",
              fontSize: "15rem",
            }}
          >
            WORK
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

      <div
        className={`relative flex ${
          isNonMobileScreens ? "flex-row" : "flex-col"
        }`}
      >
        <div className=" flex-1">
          <div className="px-8">
            <p className="text-bold happy-font font-bold">
              Projects I have done so far..
            </p>
            <h1 className="text-9xl font-bold" style={{ fontFamily: "Belgan" }}>
              WORK
            </h1>
            <p className=" my-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga
              voluptatibus quidem optio libero sed recusandae iure fugiat, ullam
              doloribus!
            </p>
          </div>

          <img src={robox} alt="" className=" sticky" />
        </div>
        <div className="p-8 flex-2">
          <div className="grid gap-1 grid-rows-3 ">
            <div className="grid gap-2 grid-rows-1 grid-cols-5 ">
              <div className=" col-span-2 h-full w-full">
                <Project project={projects[2]} />
              </div>
              <div className=" col-span-3 h-full w-full">
                {" "}
                <Project project={projects[0]} />
              </div>
            </div>
            <div className="grid gap-2 grid-rows-1 grid-cols-5">
              <div className=" col-span-3 h-full w-full">
                {" "}
                <Project project={projects[1]} />
              </div>

              <div className=" col-span-2">
                <Project project={projects[3]} />
              </div>
            </div>
            <div className="grid gap-2 grid-rows-1 grid-cols-5">
              <div className=" col-span-2 ">
                {" "}
                <Project project={projects[5]} />
              </div>
              <div className=" col-span-3 ">
                <Project project={projects[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Work;
