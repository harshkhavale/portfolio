import React from "react";
import { variables } from "../assets";
import MobileLayout from "../components/MobileLayout";
import {
  urbananime,
  urbanmain,
  urbanmainmobile,
  urbanshowcase,
} from "../assets/projects";
import { motion } from "framer-motion";
import LaptopLayout from "../components/LaptopLayout";
const Work = () => {
  return (
    <div className="relative">
      <p className="font-bold text-5xl" style={{ fontFamily: "Belgan" }}>
        Urban_Store
      </p>
      <div className="flex items-center">
        <div className="w-96">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ad
            dolorum odio soluta vel quod ipsam officia cupiditate, provident
            eaque necessitatibus animi quia perspiciatis maxime voluptatibus
            exercitationem maiores aspernatur, officiis nihil architecto! Nemo
            consectetur ea qui molestias at sed, totam quis quo laudantium
            alias, magnam architecto, quasi enim! Nemo ad dolor adipisci maxime
           
          </p>
        </div>
        <div className="w-screen">
          {/* <div className="screens col-span-3 flex flex-wrap items-center justify-center gap-4 md:gap-12">
            <div className="flex gap-6 flex-wrap h-[96px]">
              <MobileLayout title={"variables"} image={urbanmainmobile} />
            </div>
          </div> */}
          <div className="lap w-7/12 absolute right-0">
            <LaptopLayout title={"variables"} image={urbanshowcase} />
          </div>
          <div className="absolute top-0 -z-10">
            <img src={urbananime} alt="" className="w-96 h-96 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
