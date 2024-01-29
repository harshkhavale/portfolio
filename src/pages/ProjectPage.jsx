import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowBack,
  ArrowBackIosNewOutlined,
  ArrowCircleLeft,
  ArrowCircleRight,
  GitHub,
} from "@mui/icons-material";


import { projects } from "../constants";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import MobileLayout from "../components/MobileLayout";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
const ProjectPage = () => {
  const { index } = useParams();

  // Convert the index to a number
  const projectIndex = parseInt(index, 1);
  const project = projects[1];

  const [activeSlide, setActiveSlide] = useState(0);
  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % project.slider.length);
  };
  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + project.slider.length) % project.slider.length);
  };
   const getSlideClasses = (index) => {
    return index === activeSlide ? "" : "hidden";
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/work");
  };
  return (
    <div
      key={project.title}
      className={`aboutpage pb-48 relative overflow-y-hidden `}
      // style={{ backgroundColor: project.theme, color: project.color }}
    >
      <p className=" font- flex gap-4 p-8">
        Home <p>{"/"}</p> Work <p>{"/"}</p>{" "}
        <p className="font-bold"             style={{ fontFamily: "Belgan" }}
>{project.title}</p>
      </p>
     
      <div className="arrow fixed  top-0 right-0 p-4" onClick={goBack}>
        <ArrowBack
          style={{
            fontSize: "3rem",
          }}
          className=" cursor-pointer border-2 hover:border-3 md:p-1 p-2 rounded-full"
        />
      </div>

      <div className="relative w-full mt-0 ">
        <div className="banner relative text-white  overflow-hidden ">
          <div className="next relative  top-0 right-0 z-50">
            <div className=" absolute right-0 md:top-40 top-24 z-50">
              <motion.h1
                className=" name font-black md:text-9xl text-7xl"
                data-text="variables"             style={{ fontFamily: "Belgan" }}

              >
                {project.title}
              </motion.h1>
              <p className=" text-right -mt-4 px-4 font-bold text-2xl happy-font  z-10">
                {project.tagline}
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={project.bannerImg}
              alt={project.title}
              className=" md:h-96 w-full h-64  opacity-85  object-left  object-cover"
            />
          </div>
        </div>

        <div className="section1 md:mx-10 flex flex-col md:flex-row gap-4 p-4 md:p-16">
          <div className="left  gap-4 grid md:grid-cols-5  md:grid-rows-3">
            <div className=" row-span-1 col-span-3 font-semibold  md:text-5xl" >
              {project.headerText}{" "}
            </div>
            <div className=" row-span-1 col-span-2 flex gap-4 flex-col ">
              <div className="date">
                <p className="">Date</p>
                <p className="font-black">
                  {project.startDate}
                  <span className="px-2 font-medium">to</span>
                  {project.endDate}
                </p>
              </div>

              <div className="github flex gap-2">
                <GitHub />
                <p>{project.github}</p>
              </div>
              {project.deploy && (
                <div className="github flex gap-2">
                  <LaunchRoundedIcon />
                  <p>{project.deploy}</p>
                </div>
              )}
            </div>
            <div className=" row-span-2  col-span-5 md:p-8 p-4 ">
              <div id="default-carousel" className="relative w-full">
                <div className="relative shadow-md h-[500px] w-full overflow-hidden rounded-lg ">
                  {project.slider.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      className={`absolute w-full h-full object-cover shadow-md object-left-top ${getSlideClasses(
                        index
                      )}`}
                      alt={slide.name}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                  onClick={handlePrev}
                >
                  <ArrowCircleRight />{" "}
                </button>
                <button
                  type="button"
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                  onClick={handleNext}
                >
                  <ArrowCircleLeft />
                </button>
              </div>
            </div>
          </div>

          <div className="right flex flex-col-reverse md:grid grid-rows-4 gap-4 ">
            <div className=" row-span-2 col-span-2  ">
              <p className="font-bold">Technology Stack</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <div className=" bg-gray-900 text-white font-bold p-2 m-2 rounded-3xl">
                    {tech}
                  </div>
                ))}{" "}
              </div>
            </div>
            <div className=" row-span-2 col-span-2  ">
              <div className="nav flex items-center gap-4">
                <ArrowRightAltIcon className=" rotate-180" />
                <div>
                  {activeSlide + 1}
                  {"/"}
                  {project.slider.length}
                </div>

                <ArrowRightAltIcon />
              </div>
              <div className="font-semibold inline-block">
                Start with an idea and make it{" "}
                <span className=" italic">better</span>
              </div>
              <ul>
                <li>- Home</li>
                <li>- Auth</li>
                <li>- Cart</li>
                <li>- Payment</li>
                <li>- Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="logo">
          <img src={project.logo} alt="" />
        </div>
        <div className="pages md:mx-10 md:p-16 p-4">
          <div className="page md:grid gap-8 grid-cols-4 grid-rows-1">
            <div className="img col-span-3 row-span-1">
              <img src={project.pages[0].image} alt="page" />
            </div>
            <div className="info col-span-1 row-span-1">
              <p className="font-bold">Home</p>
              Icon has the ability to adjust the layout and order of most any
              page on the website. As seen on the homepage there's a newsletter
              sign up, announcement, featured collections, product categories,
              career listing, and recent limiter posts.
            </div>
          </div>
        </div>
        <div className="mobile md:mx-10 md:grid grid-cols-4 md:p-16 p-4 ">
          <div className="screens col-span-3 flex flex-wrap items-center justify-center gap-4 md:gap-12">
            <div className="flex gap-6 flex-wrap">
              {
                project.mobile.map((page,index)=>(
                  <MobileLayout key={page.image} title={project.title} image={page.image} />

                ))
              }
            </div>
           
          </div>
          <div className="col-span-1 md:p-12">
            <p className="font-bold">A fully featured mobile experience.</p>
            Inline autoplaying videos and animations can be seen on the home,
            work, and case study pages. The animated mobile navigation and
            content keep the mobile experience feeling fast and fluid.
          </div>
        </div>

        <div className="end md:mx-10 md:px-16  p-4">
          <div className="info grid grid-rows-1 grid-cols-2">
            <div className="box1 text-5xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
              quae!
            </div>
            <div className="box2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
              quae!
            </div>
          </div>
          <div className="next mt-20">
            <p className=" text-right font-bold text-3xl">next project</p>
            <motion.h1
              className="text-right text-outline text-outline-hover font-black md:text-9xl text-7xl"
              data-text="URBANSTORE"
            >
              {project.next.title}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
