import React from "react";
import { easeInOut, motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "../canvas";
import SubHeroSection from "../components/SubHeroSection";
import Resume from "./Resume";
import {
  blackblob,
  blob1,
  blob2,
  blob3,
  gradientcolor,
  gradientcolor2,
  gradientwhite,
  grayblob,
  profile,
  sphere,
} from "../assets";
const slideInRightEffect = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const slideInLeftEffect = {
  hidden: {
    x: -500,
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const Hero = () => {
  return (
    <div className="flex w-full md:flex-row flex-col-reverse items-center">
      <motion.div  variants={slideInLeftEffect}
        initial="hidden"
        animate="visible"
        transition="transition"  className="relative md:ms-20 flex-1 p-2 md:p-8 ">
        <div className="mx-auto flex flex-row items-start gap-5">
          <div>
            <div className="flex ">
              
              <h1 className={`${styles.heroSubText} w-full`}  >
                {" "}
                Hey there , I' m{" "}
              </h1>

              <SubHeroSection />
            </div>
            <div className=" "></div>
            <p className={`${styles.heroSubText} mt-20 md:mt-32 text-[20px] `}  >
              {" "}
              A full stack web and mobile application developer.
            </p>
            <p className="text-secondary bg-white dark:bg-gray-900  text-[17px] p-4 my-4 ps-1">
              "Proficient in JavaScript, HTML, CSS, React, Angular, Node.js,
              Next.js, and Android, flutter ,React-Native. Experienced in
              creating seamless digital experiences for both web and mobile
              platforms. Let's build something extraordinary{" "}
              <p className=" inline underline underline-offset-8">together!</p>"
            </p>{" "}
            <Resume />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideInRightEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="profile relative flex-1  "
      >
        <img
          src={profile}
          alt="profile"
          className="relative rounded-b-full z-50"
        />
        <img
          src={gradientcolor2}
          alt=""
          className="absolute top-14 z-10 right-[-20px] "
        />
      </motion.div>
    </div>
  );
};

export default Hero;
