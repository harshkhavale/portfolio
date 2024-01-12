import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TextOutline from "../components/TextOutline";
import { ArrowBack } from "@mui/icons-material";
import ThemeControl from "../components/ThemeControl";
import Steps from "../components/Steps";
import { useNavigate } from "react-router-dom";
const About = () => {
 const navigate = useNavigate();
  const goBack=()=>{
    navigate("/");
  }
  return (
    <div className="aboutpage relative overflow-y-hidden">
      <p className=" happy-font font-semibold flex gap-4 p-8">
        Home <p>{">"}</p> about
      </p>
      <p className="url fixed top-52 opacity-5 bg-transparent  left-[-200px] dark:opacity-10 font-black text-[10rem] rotate-90 happy-font ">
        /about{" "}
      </p>
      
      <div className="relative w-full mt-0 ">
        <Hero />
        <Services />
        <Steps/>
      </div>
      <div className="arrow fixed  top-0 right-0 p-4" onClick={goBack}>
        <ArrowBack
        
          style={{
            fontSize: "3rem",
          }}
          
          className=" cursor-pointer border-2 hover:border-3 md:p-1 p-2 rounded-full"
        />
      </div>
      <div className="theme  fixed top-24 z-50 right-4 p-1">
        <ThemeControl />
      </div>
    </div>
  );
};

export default About;
