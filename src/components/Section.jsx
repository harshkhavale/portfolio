import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WorkIcon from "@mui/icons-material/Work";
import ThemeControl from "./ThemeControl";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div className="section w-full p-4">
      <div className="blocks grid grid-cols-4 gap-1">
        <div className="left col-span-2   ">
          <div className="expertises overflow-hidden relative h-full  text-white bg-[#ff5e57] rounded-[50px] transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md">
            <div className="flex z-50 justify-between p-8">
              <p className=" font-semibold z-50 ">Work</p>
              <WorkIcon />
            </div>
            <div className="layers z-0">
              <div className="layer1  absolute bg-red-300 rounded-full left-[-25px] top-[-45px]  p-16" />
              <div className="layer2 shadow-2xl absolute bg-red-400 rounded-full right-[-25px] bottom-[-65px] p-32" />
            </div>
          </div>
        </div>
        <div className="right col-span-2 grid gap-1 grid-cols-2 grid-rows-2">
          <div className="about overflow-hidden bg-[#7bed9f]  text-black rounded-[50px] transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md">
            <div className="flex justify-between p-8 pt-20">
              <p className=" font-semibold">About</p>
              <BusinessIcon />
            </div>
            <div className="layers z-0">
              <div className="layer1  absolute  bg-[#5edf94] right-[-25px] rounded-full top-[-45px]  p-16" />
            </div>
          </div>
          <Link to="/tech">
      <div className="tech bg-[#faffd8] text-black rounded-[50px] transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md">
        <div className="flex justify-between p-8 pt-20">
          <p className="font-semibold">tech</p>
          <p className="font-black happy-font">{"</>"}</p>
        </div>
      </div>
    </Link>
          <div className="contact bg-yellow-200 text-black col-span-2 rounded-[50px] transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md">
            <div className="flex justify-between p-8 pt-20">
              <p className=" font-semibold">Contact</p>
              <ContactPageIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
