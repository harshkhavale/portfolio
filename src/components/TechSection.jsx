import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { frameworks, database, webtools, backendtech,mobiletech, frontend } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { backend } from "../assets";
import RobotCanvas from "../canvas/Robot";
const TechCard = ({ name, index, icon }) => {
  return (
    <Tilt className=" shadow-2xl dark:bg-white rounded-xl">
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
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          
        </div>
      </motion.div>
    </Tilt>
  );
};

const TechSection = () => {
  return (
    <div>
      <div className="flex flex-row-reverse items-center">
      <div className="w-5/12">
      <p style={{fontFamily:'Belgan'}} className="text-[7rem]">My Tech Bucket</p>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fugiat
        eius dignissimos! Velit quaerat inventore suscipit voluptatum tempore
        voluptate unde culpa corporis assumenda voluptatibus tenetur quasi
        impedit atque sed soluta, dolores consectetur deleniti
      </motion.p>
      </div>
      <div className="tech mt-20 w-7/12">
      <div className="mobiletech mt-4">
         
         <div className=" w-full flex flex-wrap gap-12">
           {mobiletech.map((service, index) => (
             <TechCard key={service.title} index={index} {...service} />
           ))}
         </div>{" "}
       </div>
        <div className="backend mt-4">
          
          <div className=" w-full flex flex-wrap gap-8">
            {backendtech.map((service, index) => (
              <TechCard key={service.title} index={index} {...service} />
            ))}
          </div>{" "}
        </div>
       
        <div className="frontend my-8">
         
         <div className=" w-full flex flex-wrap  gap-4">
           {frontend.map((service, index) => (
             <TechCard key={service.title} index={index} {...service} />
           ))}
         </div>{" "}
       </div>

       <div className="frameworks mt-4">
        
         <div className=" w-full flex flex-wrap  gap-8">
           {frameworks.map((service, index) => (
             <TechCard key={service.title} index={index} {...service} />
           ))}
         </div>{" "}
       </div>
        <div className="databases mt-4">
        
          <div className=" w-full flex flex-wrap  gap-10">
            {database.map((service, index) => (
              <TechCard key={service.title} index={index} {...service} />
            ))}
          </div>{" "}
        </div>
        <div className="web-tools mt-4">
         
          <div className=" w-full flex flex-wrap  gap-12">
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
