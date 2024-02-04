import React from "react";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import TechSection from "./components/TechSection";
import Contact from "./components/Contact";

import About from "./pages/About";
import MeshBackground from "./components/MeshBackground";

import Work from "./pages/Work";
import ProjectPage from "./pages/ProjectPage";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import IDELayout from "./components/IDELayout";

import Footer from "./components/Footer";
const App = () => {
  return (
    <div className=" dark:text-white dark:bg-[#191919] ">
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tech" element={<TechSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/mesh" element={<MeshBackground />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/ide" element={<IDELayout />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
