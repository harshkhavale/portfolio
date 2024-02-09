import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  frameworks,
  database,
  webtools,
  backendtech,
  mobiletech,
  frontend,
} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { backend } from "../assets";
import RobotCanvas from "../canvas/Robot";
const TechCard = ({ name, index, icon }) => {
  return (
    <Tilt className=" shadow-2xl dark:bg-white p-1 m-1 rounded-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  p-[1px]  "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" overflow-hidden flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={name} className="md:w-16 md:h-16 w-12 h-12 object-contain -rotate-45" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const TechSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className=" flex w-6/12  flex-col">
          <p style={{ fontFamily: "Belgan" }} className="text-[8rem]">
            Tech
          </p>
          <p style={{ fontFamily: "Belgan" }} className="text-[12rem] -my-28">
            Bucket
          </p>

          <p className="my-20 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            amet esse maiores. Non aperiam dolor, temporibus numquam accusamus
            suscipit saepe illum beatae, eaque error recusandae.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            amet esse maiores. Non aperiam dolor, temporibus numquam accusamus
            suscipit saepe illum beatae, eaque error recusandae.
          </p>
        </div>
        <div className="tech w-6/12 mt-20">
          <div className="mobiletech mt-4">
            <div className=" w-full flex flex-wrap rotate-45 justify-center gap-2">
              {mobiletech.map((service, index) => (
                <TechCard key={service.title} index={index} {...service} />
              ))}
            </div>{" "}
          </div>
          <div className="backend mt-4">
            <div className=" w-full flex flex-wrap rotate-45 justify-center gap-8">
              {backendtech.map((service, index) => (
                <TechCard key={service.title} index={index} {...service} />
              ))}
            </div>{" "}
          </div>

          <div className="frontend my-8">
            <div className=" w-full flex flex-wrap rotate-45 ">
              {frontend.map((service, index) => (
                <TechCard key={service.title} index={index} {...service} />
              ))}
            </div>{" "}
          </div>

          <div className="frameworks my-4">
            <div className=" w-full flex flex-wrap rotate-45 gap-8">
              {frameworks.map((service, index) => (
                <TechCard key={service.title} index={index} {...service} />
              ))}
            </div>{" "}
          </div>
          <div className="databases my-8">
            <div className=" w-full flex flex-wrap rotate-45 gap-4">
              {database.map((service, index) => (
                <TechCard key={service.title} index={index} {...service} />
              ))}
            </div>{" "}
          </div>
          <div className="web-tools my-6">
            <div className=" w-full flex flex-wrap rotate-45  gap-2">
              {webtools.map((service, index) => (
                <TechCard key={service.title} index={index} {...service} />
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(TechSection, "tech-section");
