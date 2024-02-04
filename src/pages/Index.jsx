import React from "react";
import { coder  } from "../assets";
import { contacts, certificates } from "../constants";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";



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

      <div className="main-page rounded-3xl flex flex-col-reverse md:grid relative z-50  grid-rows-1 grid-cols-6  p-4 md:px-0">
        <div className="left col-span-3 p-4">
          <div
            style={{ fontFamily: "Belgan" }}
            className="  flex flex-col items-center justify-center   text-9xl  font-black "
          >
            <p
              className=" text-center flex justify-center font-black text-[30vh] md:text-[50vh]"
              style={{ fontFamily: "Belgan" }}
            >
              Art
            </p>
            <div>
              <p className=" text-2xl text-right md:-my-10 happy-font">through</p>
            </div>
            <div className="flex mb-6 items-center">
              <div className="line h-1 w-40 mx-[-13px] rounded-3xl bg-current"></div>

              <KeyboardArrowRightIcon />
            </div>
            <div>
              <div className="arrow flex items-center ">
                <div className="code flex items-center">
                  <p
                    className=" font-black md:text-[25vh] text-[15vh]"
                    style={{ fontFamily: "Belgan" }}
                  >
                    {" < code >"}
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
        <div className="right col-span-3 relative rounded-3xl rounded-t-none bg-gradient-to-r  overflow-hidden">
          <img src={coder} alt="" className="coderimg w-full h-screen object-left-top object-cover"  style={{display: "block",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}/>
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
                  {link.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section2 bg-white dark:bg-[#191919] flex sticky items-center z-10 p-2 relative">
        
        <div className="side flex flex-col  p-8 gap-8">
          <p
            className=" font-bold text-7xl md:text-9xl"
            style={{ fontFamily: "Belgan" }}
          >
            My FEATURES
          </p>
          <p className="w-1/2">
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
        <div className="absolute end-12 md:end-64 md:-bottom-40">
        <StackedCards />

        </div>
      </div>
      <div className="section3  mb-16   ">
        <div className="marquee-container">
          <p
            className="marquee-text happy-font"
            style={{
              // fontFamily: "Belgan",
              fontStyle: "italic",
              fontWeight: "900",
              fontSize: "20rem",
            }}
          >
            portfolio.
          </p>
          <p
            className="marquee-text2 happy-font "
            style={{
              // fontFamily: "Belgan",
              fontStyle: "italic",
              fontWeight: "900",
              fontSize: "20rem",
            }}
          >
            portfolio.
          </p>
        </div>{" "}
      </div>
    
      <Creative/>
      <ScrollCards />
      
      
    </div>
  );
};

export default Index;
