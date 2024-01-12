import React from "react";

const MeshBackground = () => {
  return (
    <div className="mesh absolute inline-flex flex-row inset-0 top-[50px]">
      <div className="absolute inline-flex flex-row  inset-0 top-[50px]  justify-center">
        <div className="shape1 bg-blur bg-[#ff48ad] opacity-50 h-[400px] w-[400px] rounded-[9999px] relative "></div>
        <div className="shape2 bg-blur bg-[#1e00ff] opacity-50 h-[300px] w-[300px] rounded-[9999px] relative"></div>
        <div className="shape1 bg-blur bg-[#8c00d7] opacity-50 h-[400px] w-[400px] rounded-[9999px] relative "></div>
      </div>
      <div className="h1 ">
        Hello World
      </div>
    </div>
  );
};

export default MeshBackground;
