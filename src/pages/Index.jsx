import React from "react";
import { coder, google, javascriptCertificate } from "../assets";
import { contacts, certificates } from "../constants";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {motion} from 'framer-motion';
import StackedCards from "../components/StackedCards";
import ScrollCards from "../components/ScrollCards";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "@mui/material";
import RotatedText from "../widgets/RotatedText";
import Creative from "../components/Creative";
const Index = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <div className=" overflow-x-hidden">
      {isNonMobileScreens && <Navbar />}

      <div className="main-page flex flex-col-reverse md:grid relative z-50  grid-rows-1 grid-cols-6 md:px-0">
        <div className="left col-span-3 p-4">
          <div
            style={{ fontFamily: "Belgan" }}
            className="  flex flex-col items-center justify-center   text-9xl  font-black "
          >
            <p
              className=" text-center flex justify-center font-black text-[16vh] md:text-[40vh]"
              style={{ fontFamily: "Pilowlava" }}
            >
              art
            </p>

            <div className="flex flex-col">
              <div className="flex justify-center">
                <p className=" text-2xl  happy-font">through</p>
              </div>

              <div className="flex justify-center mb-6 items-center">
                <div className="line h-1 w-40 mx-[-13px] rounded-3xl bg-current"></div>

                <KeyboardArrowRightIcon />
              </div>
              <div></div>

              <div className="flex flex-col -mt-16 gap-2">
                <div className="line flex gap-1">
                  <div className="blue bg-blue-500 p-2 w-2 rounded-xl"></div>
                  <div className="skyblue bg-sky-500 p-1 w-4 rounded-xl"></div>
                  <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                  <div className="pink bg-pink-500 p-1 w-8 rounded-xl"></div>
                </div>
                <div className="line flex gap-1">
                  <div className="orange bg-orange-500 w-5 p-2 rounded-xl"></div>
                  <div className="teal bg-teal-500 p-1 w-12 rounded-xl"></div>
                  <div className="pink bg-sky-500 p-1 w-8 rounded-xl"></div>
                </div>
              </div>
              <div className="arrow flex items-center ">
                <div className="code flex -mt-2 items-center">
                  <p
                    className=" font-black md:text-[35vh] text-[14vh]"
                    style={{}}
                  >
                    code
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-end items-end">
                <div className="line flex gap-1">
                  <div className="blue bg-blue-500 p-2 w-2 rounded-xl"></div>
                  <div className="skyblue bg-sky-500 p-1 w-4 rounded-xl"></div>
                  <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                  <div className="pink bg-pink-500 p-1 w-8 rounded-xl"></div>
                </div>
                <div className="line flex gap-1">
                  <div className="orange bg-orange-500 w-5 p-2 rounded-xl"></div>
                  <div className="teal bg-teal-500 p-1 w-12 rounded-xl"></div>
                  <div className="pink bg-sky-500 p-1 w-8 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right col-span-3 relative  rounded-t-none bg-gradient-to-r  overflow-hidden">
          <img
            src={coder}
            alt=""
            className="coderimg w-full h-screen md:object-left-top object-cover"
            style={{
              display: "block",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
          {/* <div className="aim backdrop-blur-sm bg-white/30 dark:bg-dark/30 absolute w-full rounded-3xl  bottom-0 overflow-hidden">
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
          </div> */}
          {!isNonMobileScreens && (
            <div className="absolute top-0 w-full text-white">
              <Navbar />
            </div>
          )}

          <div className="contact absolute  rounded-tl-3xl ps-4 bottom-0 md:bottom-16 right-0 p-2 ">
            <ul className="list-none flex my-4 justify-end items-end flex-col gap-4">
              {contacts.map((link) => (
                <li
                  key={link.id}
                  className={`bg-white shadow-2xl rounded-full p-2 md:p-4 text-black text-[18px] gap-2 font-medium cursor-pointer transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md`}
                >
                  <a href={link.url} target="_blank">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section2 bg-white dark:bg-[#191919] md:flex items-center z-10 p-2 relative">
        <div className="side flex flex-col  p-8 gap-8">
          <p
            className=" font-bold text-7xl md:text-9xl"
            style={{ fontFamily: "Belgan" }}
          >
            My FEATURES
          </p>

          <div className="flex">
            <p className=" w-1/2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              cumque minus quis perferendis alias fuga odio tenetur earum eaque
              obcaecati!
            </p>
            <RotatedText title={"ABOUT"} subtitle={"KNOW-MORE-KNOW-MORE"} />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="col-span-1 h-full flex justify-center items-center">
          <motion.div
            whileHover={{
              scale: 1.2,
              zIndex: 10,
              transition: { ease: "easeInOut" },
            }}
            className="m-1  h-min border-2 p-4 border-current relative  overflow-clip  flex-col"
          >
            <img
              src={google}
              alt=""
              className="w-full h-full object-cover"
            />
            
            <div className=" flex p-4 gap-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              <p className="text-xs md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, totam.
              </p>
              <div className=" bg-white rounded-full h-min p-1 text-black">
                <ArrowOutwardIcon />
              </div>
            </div>
          </motion.div>
          </div>
         
          <div className="col-span-1">
          <motion.div
            whileHover={{
              scale: 1.2,
              zIndex: 10,
              transition: { ease: "easeInOut" },
            }}
            className="m-1  h-auto border-2 p-4 border-current relative  overflow-clip flex justify-center items-center flex-col"
          >
            <img
              src={javascriptCertificate}
              alt=""
              className="w-full h-full object-cover"
            />
            
            <div className=" flex p-4 gap-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              <p className="text-xs md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, totam.
              </p>
              <div className=" bg-white rounded-full h-min p-1 text-black">
                <ArrowOutwardIcon />
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              zIndex: 10,
              transition: { ease: "easeInOut" },
            }}
            className="m-1 h-auto border-2 p-4 border-current relative  overflow-clip flex justify-center items-center flex-col"
          >
            <img
              src={javascriptCertificate}
              alt=""
              className="w-full h-full object-cover"
            />
            
            <div className=" flex p-4 gap-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              <p className="text-xs md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, totam.
              </p>
              <div className=" bg-white rounded-full h-min p-1 text-black">
                <ArrowOutwardIcon />
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>

      <div className="section3  mb-16   ">
        <div className="marquee-container">
          <p
            className="marquee-text happy-font text-[12rem] md:text-[20rem] "
            style={{
              // fontFamily: "Belgan",
              fontStyle: "italic",
              fontWeight: "900",
            }}
          >
            portfolio.
          </p>
          <p
            className="marquee-text2 happy-font  text-[12rem] md:text-[20rem]"
            style={{
              // fontFamily: "Belgan",
              fontStyle: "italic",
              fontWeight: "900",
            }}
          >
            portfolio.
          </p>
        </div>{" "}
      </div>
<div className="">
<Creative />
      <ScrollCards />
</div>
    
    </div>
  );
};

export default Index;
