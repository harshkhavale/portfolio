import React from "react";
import { blackblob, blob1, blob2, blob3, grayblob } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import TextOutline from "./TextOutline";

const Steps = () => {
  return (
    <div className="steps relative mt-10 md:mt-0 ">
      <div className="md:ms-48">
      <motion.div variants={textVariant()} className="">
        <p className={styles.sectionSubText}>WorkFlow </p>
        <TextOutline text={"How I do it"} />
      </motion.div>
      </div>
     
      <div className="flex flex-col md:flex-row justify-center items-center p-4 gap-8  md:px-40">
        <div className="left  flex-1">
          <div className="card flex flex-col gap-8 relative">
            <div className="box dark:bg-gray-900 bg-white  p-2 relative overflow-hidden  shadow-md rounded-lg">
              <div className="flex relative justify-between">
                <h1 className=" absolute top-0 start-0 text-5xl p-1  font-black z-10">
                  01
                </h1>
                <h1 className="absolute top-0 right-0 text-2xl p-2 font-bold z-10">
                  Plan and Design
                </h1>
              </div>
              <div className="layers -z-20">
                <div className="layer1  absolute bg-blue-300 rounded-full left-[-25px] top-[-45px]  p-16" />
                <div className="layer2 absolute bg-blue-400 rounded-full right-[-25px] bottom-[-65px] p-32" />
              </div>
              <div className="info mt-20 flex">
                <p className="z-20 flex flex-col gap-2 font-semibold">
                  <p>
                    1.Identify the purpose,goals, and target audience of the
                    website/application.
                  </p>
                  <p>
                    2.Create wireframes and designs mockups using tools like
                    FIGMA or SKETCH.
                  </p>
                  <p>3.Understand the purpose and check its feasibility</p>
                  <p>
                    4.Work on its UX{" "}
                    {"(Overall flow,How things will actually get implemented)"}
                  </p>
                </p>
              </div>
            </div>
            <div className="box dark:bg-gray-900 bg-white p-2 relative overflow-hidden  shadow-md rounded-lg">
              <div className="flex relative justify-between">
                <h1 className=" absolute top-0 start-0 text-5xl p-1  font-black z-10">
                  02
                </h1>
                <h1 className="absolute top-0 right-0 text-2xl p-2 font-bold z-10">
                  Plan and Design
                </h1>
              </div>
              <div className="layers -z-20">
                <div className="layer1  absolute bg-orange-300 rounded-full left-[-25px] top-[-45px]  p-16" />
                <div className="layer2 absolute bg-orange-400 rounded-full right-[-25px] bottom-[-65px] p-32" />
              </div>
              <div className="info mt-20 flex">
                <p className="z-20 flex flex-col gap-2 font-semibold">
                  <p>
                    1.Identify the purpose,goals, and target audience of the
                    website/application.
                  </p>
                  <p>
                    2.Create wireframes and designs mockups using tools like
                    FIGMA or SKETCH.
                  </p>
                  <p>3.Understand the purpose and check its feasibility</p>
                  <p>
                    4.Work on its UX{" "}
                    {"(Overall flow,How things will actually get implemented)"}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="right flex-1">
          <div className="cards flex flex-col mt-40 gap-8 relative">
          <div className="box dark:bg-gray-900 bg-white p-2 relative overflow-hidden  shadow-md rounded-lg">
              <div className="flex relative justify-between">
                <h1 className=" absolute top-0 start-0 text-5xl p-1  font-black z-10">
                  01
                </h1>
                <h1 className="absolute top-0 right-0 text-2xl p-2 font-bold z-10">
                  Plan and Design
                </h1>
              </div>
              <div className="layers -z-20">
                <div className="layer1  absolute bg-red-300 rounded-full left-[-25px] top-[-45px]  p-16" />
                <div className="layer2 absolute bg-red-400 rounded-full right-[-25px] bottom-[-65px] p-32" />
              </div>
              <div className="info mt-20 flex">
                <p className="z-20 flex flex-col gap-2 font-semibold">
                  <p>
                    1.Identify the purpose,goals, and target audience of the
                    website/application.
                  </p>
                  <p>
                    2.Create wireframes and designs mockups using tools like
                    FIGMA or SKETCH.
                  </p>
                  <p>3.Understand the purpose and check its feasibility</p>
                  <p>
                    4.Work on its UX{" "}
                    {"(Overall flow,How things will actually get implemented)"}
                  </p>
                </p>
              </div>
            </div>

            <div className="box dark:bg-gray-900 bg-white p-2 relative overflow-hidden  shadow-md rounded-lg">
              <div className="flex relative justify-between">
                <h1 className=" absolute top-0 start-0 text-5xl p-1  font-black z-10">
                  01
                </h1>
                <h1 className="absolute top-0 right-0 text-2xl p-2 font-bold z-10">
                  Plan and Design
                </h1>
              </div>
              <div className="layers -z-20">
                <div className="layer1  absolute bg-emerald-300 rounded-full left-[-25px] top-[-45px]  p-16" />
                <div className="layer2 absolute bg-emerald-400 rounded-full right-[-25px] bottom-[-65px] p-32" />
              </div>
              <div className="info mt-20 flex">
                <p className="z-20 flex flex-col gap-2 font-semibold">
                  <p>
                    1.Identify the purpose,goals, and target audience of the
                    website/application.
                  </p>
                  <p>
                    2.Create wireframes and designs mockups using tools like
                    FIGMA or SKETCH.
                  </p>
                  <p>3.Understand the purpose and check its feasibility</p>
                  <p>
                    4.Work on its UX{" "}
                    {"(Overall flow,How things will actually get implemented)"}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
