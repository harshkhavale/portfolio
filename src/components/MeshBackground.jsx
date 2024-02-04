import React from "react";

const MeshBackground = ({ shape1, shape2, shape3 }) => {
  return (
    <div className="mesh absolute inline-flex flex-row inset-0 top-[50px]">
      <div className="absolute inline-flex flex-row  inset-0 top-[50px]  justify-center">
        <div
          className={`shape1 bg-blur bg-sky-400 opacity-50 h-[400px] w-[400px] rounded-[9999px] relative `}
        />
        <div
          className={`shape2 bg-blur  bg-pink-500 opacity-50 h-[300px] w-[300px] rounded-[9999px] relative`}
        />
        <div
          className={`shape1 bg-blur  bg-blue-500 opacity-50 h-[400px] w-[400px] rounded-[9999px] relative `}
        />
      </div>
      {/* <div className="h1 ">Hello World</div> */}
    </div>
  );
};

export default MeshBackground;
