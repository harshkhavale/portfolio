import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Services from "./components/Services";
import TechSection from "./components/TechSection";
import Contact from "./components/Contact";

import About from "./pages/About";
import MeshBackground from "./components/MeshBackground";
import Logos from "./components/Logos";
import BubbleComponent from "./components/BubbleComponent";
import Steps from "./components/Steps";
import LandingPage from "./pages/LandingPage";
import Work from "./pages/Work";
import ProjectPage from "./pages/ProjectPage";
import { AnimatePresence } from "framer-motion";
import Start from "./components/Start";
import Index from "./pages/Index";
import StackedCards from "./components/StackedCards";
import IDELayout from "./components/IDELayout";
import BlobCard from "./widgets/BlobCard";
const App = () => {
  return (
    <div className=" dark:text-white dark:bg-[#191919]">
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tech" element={<TechSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<TechSection />} />
            <Route path="/work" element={<Work />} />
            <Route path="/mesh" element={<MeshBackground />} />
            <Route path="/logo" element={<Logos />} />
            <Route path="/bubbles" element={<BubbleComponent />} />
            <Route path="/steps" element={<Steps />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/start" element={<Start />} />
            <Route path="/index" element={<LandingPage />} />
            <Route path="/card" element={<StackedCards />} />
            <Route path="/ide" element={<IDELayout />} />
            <Route path="/blob" element={<BlobCard />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
};

export default App;
