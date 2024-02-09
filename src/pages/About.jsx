import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { ArrowBack } from "@mui/icons-material";
import ThemeControl from "../components/ThemeControl";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TechSection from "../components/TechSection";
import RotatedText from "../widgets/RotatedText";

const About = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="about relative overflow-hidden">
      <div className="navbar flex justify-between m-2 text-current px-4 items-center">
        <p className=" happy-font font-semibold flex gap-2 ">
          Home <p>{"/"}</p> about
        </p>
        <p
          className="url fixed top-52 opacity-5 bg-transparent -z-20  left-[-300px] dark:opacity-10 font-black text-[10rem] rotate-90 "
          style={{
            fontFamily: "Belgan",
            fontSize: "15rem",
          }}
        >
          ABOUT
        </p>

        <div className=" flex gap-4 top-4 z-50 right-4 rounded-3xl p-1">
          <div
            className="arrow cursor-pointer border-2  border-current  overflow-hidden  rounded-full"
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
        <div className="difference flex flex-col p-2 md:p-20">
          <div className="flex items-center gap-36">
            <div className="flex">
              <p
                className="md:text-[25rem] text-[10rem]"
                style={{ fontFamily: "Belgan" }}
              >
                Self
              </p>
              <p
                className="font-bold md:text-[10rem] text-[7rem] flex items-end"
                style={{ fontFamily: "Belgan" }}
              >
                &
              </p>
            </div>

            {isNonMobileScreens && (
              <RotatedText
                title={"DIFFERENCE"}
                subtitle={"the-difference-between-"}
              />
            )}
          </div>
          <div className="flex justify-between md:-mt-40 -mt-24">
            {isNonMobileScreens && (
              <p className="w-1/3 mt-20 font-bold ">
                My standout quality lies in my versatility across diverse fields
                within technology. While others may specialize in one area, I
                excel in web development, mobile app development, backend
                solutions, and UI/UX design. This versatility allows me to offer
                unique insights, solve complex problems creatively, and deliver
                innovative solutions that stand out in the competitive
                landscape.
              </p>
            )}

            <p
              className="md:text-[25rem] text-[8rem] text-left"
              style={{ fontFamily: "Belgan" }}
            >
              Others
            </p>
          </div>
          {!isNonMobileScreens && (
            <div className="">
              <div className="flex justify-center">
                <RotatedText
                  title={"DIFFERENCE"}
                  subtitle={"the-difference-between-"}
                />
              </div>

              <p className="font-bold p-2 ">
                My standout quality lies in my versatility across diverse fields
                within technology. While others may specialize in one area, I
                excel in web development, mobile app development, backend
                solutions, and UI/UX design. This versatility allows me to offer
                unique insights, solve complex problems creatively, and deliver
                innovative solutions that stand out in the competitive
                landscape.
              </p>
            </div>
          )}
        </div>
        <TechSection />
      </div>
    </div>
  );
};

export default About;
