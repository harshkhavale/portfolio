import React from "react";
import { boy, boycycle, experiment2, pattern, profile, room } from "../assets";
import { contacts, certificates } from "../constants";
import CodeIcon from "@mui/icons-material/Code";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import RadarOutlinedIcon from "@mui/icons-material/RadarOutlined";

import ControlCameraOutlinedIcon from "@mui/icons-material/ControlCameraOutlined";
import Certifications from "../components/Certifications";
import StackedCards from "../components/StackedCards";
import ScrollCards from "../components/ScrollCards";
import ThemeControl from "../components/ThemeControl";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "@mui/material";
import RotatedText from "../widgets/RotatedText";
const Index = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <div className=" overflow-x-hidden">
      <div className="main-page rounded-3xl flex flex-col-reverse md:grid relative z-50  grid-rows-1 grid-cols-5  p-4 md:px-16">
        <div className="left col-span-3 p-4">
          {isNonMobileScreens && <Navbar />}
          <div
            style={{ fontFamily: "Belgan" }}
            className="  flex flex-col items-center justify-center p-8  text-9xl  font-black "
          >
            <p
              className=" text-center flex justify-center font-black text-[20vh] md:text-[35vh]"
              style={{ fontFamily: "Belgan" }}
            >
              Art
            </p>
            <div>
              <p className=" text-2xl text-right happy-font">through</p>
            </div>
            <div className="flex mb-6 items-center">
              <div className="line h-1 w-40 mx-[-13px] rounded-3xl bg-current"></div>

              <KeyboardArrowRightIcon />
            </div>
            <div>
              <div className="arrow flex items-center ">
                <div className="code flex items-center">
                  <p
                    className=" font-black md:text-[20vh] text-[9vh]"
                    style={{ fontFamily: "Belgan" }}
                  >
                    {" < c0de >"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lower">
            <div>
              <div className="contact w-52 my-10 flex items-center gap-6 justify-center p-4 bg-black rounded-3xl text-white">
                <p>contact now</p>{" "}
                <div className="arrow flex items-center ">
                  <div className="line h-1 w-8 mx-[-13px] rounded-3xl bg-white"></div>

                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right col-span-2 relative rounded-3xl bg-gradient-to-r from-sky-600 via-blue-500 to-[#0671A9] overflow-hidden">
          <img src={room} alt="" className="w-full h-full object-cover" />
          <div className="aim backdrop-blur-sm bg-white/30 dark:bg-dark/30 absolute w-full rounded-3xl  bottom-0 overflow-hidden">
            <div className="info my-20 relative">
              <div className=" p-8 w-40 h-40 -rotate-45 rounded-full border-black border-r-2 ">
                <img
                  src={pattern}
                  className="w-full h-full rounded-full"
                  alt=""
                />
              </div>
              <div className="learn flex flex-col absolute -top-14 start-20">
                <div className="flex gap-2">
                  <ArticleOutlinedIcon />
                  <p className="font-semibold">Learn</p>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur?</div>
                <div className="bg-black w-3 h-3 rounded-full" />
              </div>
              <div className="implement flex flex-col absolute top-10 start-44">
                <div className="flex gap-2">
                  <RadarOutlinedIcon />
                  <p className="font-semibold">Implement</p>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur?</div>
                <div className="bg-black absolute top-4 -start-6 w-3 h-3 rounded-full" />
              </div>
              <div className="improve flex flex-col absolute top-32 start-36">
                <div className="flex gap-2">
                  <ControlCameraOutlinedIcon />
                  <p className="font-semibold">Improve</p>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur?</div>
                <div className="bg-black absolute top-4 -start-8 w-3 h-3 rounded-full" />
              </div>
            </div>
          </div>
          {!isNonMobileScreens && (
            <div className="absolute top-0 w-full text-white">
              <Navbar />
            </div>
          )}
          <div className="theme absolute h-20 w-20 z-50 bottom-0 left-0  md:top-0 md:right-0 bg-white text-black p-2 m-4 rounded-3xl">
            <ThemeControl />
          </div>
          <div className="contact absolute bg-white rounded-tl-3xl ps-4 bottom-0 md:bottom-0 right-0 p-2 ">
            <ul className="list-none flex my-4 justify-end items-end flex-col gap-4">
              {contacts.map((link) => (
                <li
                  key={link.id}
                  className={`bg-white shadow-xl rounded-full p-2 md:p-4 text-black text-[18px] gap-2 font-medium cursor-pointer transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md`}
                >
                  {link.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section2 bg-white dark:bg-[#191919] flex flex-col-reverse md:flex-row items-center z-10 p-2 relative">
        <StackedCards />
        <div className="side flex flex-col items-end p-8 gap-8">
          <p
            className=" font-bold text-right text-7xl md:text-9xl"
            style={{ fontFamily: "Belgan" }}
          >
            My Features
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            cumque minus quis perferendis alias fuga odio tenetur earum eaque
            obcaecati!
          </p>
          <div className="btn bg-transparent">
            <div className="projects w-52 my-10 flex items-center gap-6 justify-center p-4  rounded-3xl text-white">
              <RotatedText title={"ABOUT"} subtitle={"KNOW-MORE-KNOW-MORE"} />
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="section3  mb-16 -mt-20 ">
        <div className="marquee-container">
          <p
            className="marquee-text"
            style={{
              fontFamily: "Belgan",
              fontStyle: "italic",
              fontWeight: "900",
              fontSize: "20rem",
            }}
          >
            portfolio.
          </p>
          <p
            className="marquee-text2 "
            style={{
              fontFamily: "Belgan",
              fontStyle: "italic",
              fontWeight: "900",
              fontSize: "20rem",
            }}
          >
            portfolio.
          </p>
        </div>{" "}
      </div>
      <div className="section3  ">
        <p
          className="text-[6rem] md:text-[15rem] -mt-12 md:-mt-24"
          style={{
            fontFamily: "Belgan",
          }}
        >
          CREATIVE
        </p>
        <p
          className=" text-center text-[4rem] md:text-[10rem]"
          style={{
            fontFamily: "Belgan",
            fontStyle: "italic",
          }}
        >
          developer
        </p>
        <p
          className="-mt-10"
          style={{
            fontFamily: "Belgan",
            fontStyle: "italic",
            fontSize: "5rem",
          }}
        >
          inspired by the
        </p>
        <p
          className="-mt-10"
          style={{
            fontFamily: "Belgan",
            fontSize: "12rem",
          }}
        >
          ABSTRACTION
        </p>
        <div className="-mt-20 flex">
          <p
            style={{
              fontFamily: "Belgan",
              fontStyle: "italic",
              fontSize: "5rem",
            }}
          >
            of
          </p>
          <p
            style={{
              fontFamily: "Belgan",
              fontStyle: "italic",
              fontSize: "12rem",
            }}
          >
            NATURE
          </p>
        </div>
      </div>
      <ScrollCards />
      <div className="flex justify-center items-baseline p-4">
        <p className=" font-bold">harshkhavale@2024</p>
      </div>
    </div>
  );
};

export default Index;
