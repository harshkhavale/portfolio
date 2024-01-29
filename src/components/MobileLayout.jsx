import React from "react";
import { variables } from "../assets";
import { Wifi } from "@mui/icons-material";

const MobileLayout = ({ title, image }) => {
  return (
    <div
      className={`mobile relative border-8 md:border-8 rounded-[35px] shadow-2xl border-black bg-black  md:w-68 `}
    >
      <div className="img flex h-full w-full gap-0 flex-col">
        <div className="heading m-1 -mb-2 bg-white p-2 rounded-t-[25px]">
          <div className=" px-2 font-bold text-xs text-black flex justify-between items-center">
            <p className="">12.35</p>
            <Wifi style={{ fontSize: "12px" }} />
          </div>
          <div className=" font-bold happy-font text-xs flex justify-center text-black items-center">
            {title}
          </div>
        </div>
        <div className="img md:h-[480px] h-[280px]  ">
          <img
            src={image}
            alt=""
            className={`object-cover h-full rounded-b-[32px] p-1 overflow-hidden`}
          />
        </div>
      </div>

      <div
        className={`absolute left-14  md:left-[72px] -top-2 navbar w-1/3 md:w-2/4 rounded-3xl bg-black p-3 md:p-4`}
      />
      <div
        className={`absolute rotate-90 -start-6 shadow-2xl top-10 navbar w-10 rounded-3xl bg-black p-2`}
      />
      <div
        className={`absolute rotate-90 -start-6 shadow-2xl top-28 navbar w-10 rounded-3xl bg-black p-2`}
      />
      <div
        className={`absolute rotate-90 -start-6  top-40 navbar w-10 rounded-3xl bg-black p-2`}
      />
    </div>
  );
};

export default MobileLayout;
