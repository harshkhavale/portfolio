import React from "react";
import { code } from "../assets";

const Logos = () => {
  return (
    <div className="logos bg-black relative">
      <img
        src={code}
        alt="code"
        className="absolute h-96 w-screen overflow-hidden object-cover top-0 "
      />
      <div className="bg-black absolute w-screen h-screen bg-opacity-5 z-30"></div>
      <div className="p-20 absolute top-0 flex gap-2 items-center w-screen right-[-900px] z-[100000000000000]">
        <div className="text-white text-5xl">{"< "}</div>
        <div className="text-white flex flex-col happy-font font-bold my-4 right-0 text-end text-5xl">
          /harsh_khavale
        </div>
        <div className="text-white text-5xl">{" >"}</div>
      </div>
      <p className="absolute top-40 right-28 z-[1000000000000000000000] text-white">A full stack web/application developer</p>
    </div>
  );
};

export default Logos;
