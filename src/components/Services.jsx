import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import LottieAnimation from "./LottieAnimation";
import TextOutline from "./TextOutline";
import { blob1 } from "../assets";
const ServiceCard = ({ title, index, icon, animation, description }) => {
  return (
    <div className="xs:w-[250px] dark:bg-zinc-700 dark:text-white bg-white md:w-5/12 shadow-xl rounded-2xl">
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 mt-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <div className="animation ">
          <LottieAnimation animation={animation} />

          </div>
          <h3 className=" text-[17px] font-bold my-4 text-center happy-font">{title}</h3>
        </div>
        <div className="info p-4 flex items-center gap-1">
          <div className="tag flex flex-col justify-center">
            <p className="text-gray-400 font-mono">{"<h3>"}</p>
            <div class="inline-block bg-[#34495E] h-40 min-h-[1em] w-0.5 self-stretch rounded-2xl  opacity-100 dark:opacity-50 m-auto"></div>

            <p className="text-gray-400 font-mono">{"</h3>"}</p>
          </div>
          <div className="info flex flex-col gap-1">
            <div className="line flex gap-1">
              <div className="blue bg-blue-500 p-1 w-2 rounded-xl"></div>
              <div className="skyblue bg-sky-500 p-1 w-4 rounded-xl"></div>
              <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
              <div className="pink bg-pink-500 p-1 w-8 rounded-xl"></div>
            </div>
            <div className="line flex gap-1">
              <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
              <div className="teal bg-teal-500 p-1 w-12 rounded-xl"></div>
              <div className="pink bg-sky-500 p-1 w-8 rounded-xl"></div>
            </div>
            <div className="line flex gap-1">
              <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
              <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
              <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
              <div className="teal bg-teal-500 p-1 w-8 rounded-xl"></div>
            </div>
            <div className="text">
              <p className="sourcecode-font text-[#34495E] dark:text-gray-200">
                {description}
              </p>
            </div>
            <div className="line flex gap-1">
              {" "}
              <div className="pink bg-pink-500 p-1 w-4 rounded-xl"></div>
              <div className="yellow bg-yellow-500 w-8 p-1 rounded-xl"></div>
              <div className="yellow bg-blue-500 w-2 p-1 rounded-xl"></div>
            </div>
            <div className="line flex gap-1">
              {" "}
              <div className="blue bg-orange-500 p-1 w-16 rounded-xl"></div>
              <div className="skyblue bg-sky-500 p-1 w-8 rounded-xl"></div>
            </div>
            <div className="line flex gap-1">
              <div className="blue bg-blue-500 p-1 w-8 rounded-xl"></div>
              <div className="skyblue bg-sky-500 p-1 w-10 rounded-xl"></div>
            </div>
            <div className="line flex gap-1">
              <div className="orange bg-orange-500 w-5 p-1 rounded-xl"></div>
              <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
              <div className="teal bg-teal-500 p-1 w-8 rounded-xl"></div>
              <div className="pink bg-pink-500 p-1 w-4 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="relative mt-10 md:mt-0">
      <div variants={textVariant()} className="">
        <p className={`${styles.sectionSubText} happy-font`}  >Introduction</p>
       <p className="text-9xl font-black" style={{
          fontFamily: "Belgan",
        }}>Expertises</p>
      </div>
      <p
        variants={fadeIn("", "", 0.1, 0.1)}
        className=" text-secondary text-[17px] my-4 max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fugiat
        eius dignissimos! Velit quaerat inventore suscipit voluptatum tempore
        voluptate unde culpa corporis assumenda voluptatibus tenetur quasi
        impedit atque sed soluta, dolores consectetur deleniti
      </p>
      <div className="mt-20 w-full flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "Services");
