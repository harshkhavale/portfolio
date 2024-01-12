import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Services from "./components/Services";
import TechSection from "./components/TechSection";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Logo from "./components/Logo";
import Project from "./components/Project";
import Section from "./components/Section";
import Landing from "./components/Landing";
import About from "./pages/About";
import MeshBackground from './components/MeshBackground'
import Logos from "./components/Logos";
import BubbleComponent from "./components/BubbleComponent";
import Steps from "./components/Steps";

const App = () => {
  return (
    <div className=" dark:text-white dark:bg-black">
     <div className="mesh absolute inline-flex flex-row inset-0 ">
        <div className="fixed inline-flex flex-row  inset-0 top-[50px]  justify-center">
          <div className="shape1 bg-blur bg-[#ff48ad] opacity-50 h-[400px] w-[400px] rounded-[9999px] relative "></div>
          <div className="shape2 bg-blur bg-[#1e00ff] opacity-50 h-[300px] w-[300px] rounded-[9999px] relative"></div>
          <div className="shape1 bg-blur bg-[#8c00d7] opacity-50 h-[400px] w-[400px] rounded-[9999px] relative "></div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tech" element={<TechSection />} />
          <Route path="/about" element={<About/>} />
          <Route path="/tech" element={<TechSection />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/mesh" element={<MeshBackground/>}/>
          <Route path="/logo" element={<Logos/>}/>
          <Route path="/bubbles" element={<BubbleComponent/>}/>
          <Route path="/steps" element={<Steps/>}/>

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
