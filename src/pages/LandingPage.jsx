import React from "react";
import Landing from "../components/Landing";
import { blob3 } from "../assets";
import Logo from "../components/Logo";
import { useProgress } from "@react-three/drei";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const LandingPage = () => {
  const { progress } = useProgress();
  const buffer = useSelector((state) => state.buffer);

  return (
    <motion.div exit={{x:'-100vh'}} className="relative">
      {buffer ? <Logo/> : <Landing />}
    </motion.div>
  );
};

export default LandingPage;
