import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { frameworks, database, webtools, backendtech,mobiletech, frontend } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { backend } from "../assets";
const TechCard = ({ name, index, icon }) => {
  return (
    <Tilt className=" shadow-md w-2/12 rounded-xl">
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
          <img src={icon} alt={name} className="w-24 h-auto object-contain" />
          <h3 className="text-black inline-block  text-[17px] font-bold text-xs md:text-lg text-wrap text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const TechSection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>technologies</p>
        <h2 className={styles.sectionHeadText}>Technolgical stack</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fugiat
        eius dignissimos! Velit quaerat inventore suscipit voluptatum tempore
        voluptate unde culpa corporis assumenda voluptatibus tenetur quasi
        impedit atque sed soluta, dolores consectetur deleniti
      </motion.p>
      <div className="tech mt-20">
        <div className="frontend my-8">
          <p className="text-secondary text-[17px] underline underline-offset-8 decoration-green-500 my-4">
            FRONTEND
          </p>
          <div className=" w-full flex flex-wrap justify-center gap-8">
            {frontend.map((service, index) => (
              <TechCard key={service.title} index={index} {...service} />
            ))}
          </div>{" "}
        </div>

        <div className="frameworks mt-4">
          <p className="text-secondary text-[17px] underline underline-offset-8 decoration-green-500 my-4">
            FRAMEWORKS
          </p>
          <div className=" w-full flex flex-wrap justify-center gap-8">
            {frameworks.map((service, index) => (
              <TechCard key={service.title} index={index} {...service} />
            ))}
          </div>{" "}
        </div>
        <div className="backend mt-4">
          <p className="text-secondary text-[17px] underline underline-offset-8 decoration-green-500 my-4">
            BACKEND
          </p>
          <div className=" w-full flex flex-wrap justify-center gap-8">
            {backendtech.map((service, index) => (
              <TechCard key={service.title} index={index} {...service} />
            ))}
          </div>{" "}
        </div>
        <div className="mobiletech mt-4">
          <p className="text-secondary text-[17px] underline underline-offset-8 decoration-green-500 my-4">
            MOBILE DEVELOPMENT
          </p>
          <div className=" w-full flex flex-wrap justify-center gap-8">
            {mobiletech.map((service, index) => (
              <TechCard key={service.title} index={index} {...service} />
            ))}
          </div>{" "}
        </div>
        <div className="databases mt-4">
          <p className="text-secondary text-[17px] underline underline-offset-8 decoration-green-500 my-4">
            DATABASE
          </p>
          <div className=" w-full flex flex-wrap justify-center gap-8">
            {database.map((service, index) => (
              <TechCard key={service.title} index={index} {...service} />
            ))}
          </div>{" "}
        </div>
        <div className="web-tools mt-4">
          <p className="text-secondary text-[17px] underline underline-offset-8 decoration-green-500 my-4">
            WEB-TOOLS
          </p>
          <div className=" w-full flex flex-wrap justify-center gap-8">
            {webtools.map((service, index) => (
              <TechCard key={service.title} index={index} {...service} />
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(TechSection, "tech-section");
