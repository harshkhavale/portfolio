import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, certificates } from "../constants";
import Certifications from "./Certifications";
import { useMediaQuery } from "@mui/material";
const VerticalScrollCarousel = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className=" bg-white dark:bg-[#191919]  relative  bg-transparent "
    >
      <div className="sticky top-0  flex  h-[150vh] items-center overflow-hidden">
        <div className="certificates absolute top-0 -z-30">
          {isNonMobileScreens && (
            <div className="mt-32 font-semibold text-2xl px-16 w-[40rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              illum ea ducimus deleniti maxime optio.
            </div>
          )}
          <Certifications />
        </div>
        <div className="flex justify-end w-full gap-0">
          <motion.div
            style={{ y }}
            className=" flex  p-8 flex-col -mt-96 md:mt-[200vh] gap-2"
          >
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="box md:w-full md:h-72 w-60 h-40 object-cover rounded-md overflow-hidden shadow-lg"
              >
                <img
                  src={certificate.img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
          {isNonMobileScreens && (
            <motion.div
              style={{ y }}
              className="  flex p-8 flex-col md:mt-[100vh] gap-4"
            >
              {certificates.map((certificate, index) => (
                <div
                  key={index}
                  className="box md:w-full md:h-72 w-60 h-40 object-cover rounded-md overflow-hidden shadow-lg"
                >
                  <img
                    src={certificate.img}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const ScrollCards = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <div className=" ">
      {!isNonMobileScreens && (
        <div className="flex items-center justify-center  font-semibold text-2xl px-16 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          illum ea ducimus deleniti maxime optio.
        </div>
      )}
      <VerticalScrollCarousel />
    </div>
  );
};

export default ScrollCards;
