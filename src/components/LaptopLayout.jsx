import React from "react";
import { variables } from "../assets";
import { Wifi } from "@mui/icons-material";

const LaptopLayout = ({ title, image }) => {
  return (
    <div className="flex flex-col m-8 ">
      <div
        className={`mobile relative border-[6px] md:border-[6px] rounded-t-md shadow-2xl border-black bg-black md:h-96 md:w-68 mx-8 overflow-hidden `}
      >
        <div className="img flex h-full w-full gap-0 flex-col">
          <div className="heading m-1 -mb-2 bg-white  rounded-md">
            <div className=" p-1 font-bold text-xs text-black flex justify-between items-center">
              <p className="">12.35</p>
              <Wifi style={{ fontSize: "12px" }} />
            </div>
            
          </div>
          <div className="img md:h-[480px] h-[280px]  ">
            <img
              src={image}
              alt=""
              className={` object-cover h-full p-1 overflow-hidden`}
            />
          </div>
        </div>
      </div>
      <div className={`keypad rounded-sm bg-black z-40 p-2`} />
    </div>
  );
};

export default LaptopLayout;
