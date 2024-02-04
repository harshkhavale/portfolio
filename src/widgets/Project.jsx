import React from "react";
import { spotifyanime } from "../assets/projects";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
const Project = ({ project }) => {
  return (
    <Link to={`/project?projectId=${project.id}`}>
    <motion.div whileHover={{scale:1.2, zIndex:10, transition:{ease:"easeInOut"}}} className="m-1 h-96 border-2 border-current relative rounded-3xl overflow-clip flex justify-center items-center">
      <img src={project.image} alt="" className="w-full h-full object-cover" />
      <div className="absolute flex justify-center items-center">
        <h1 className="text-[4em] font-bold " style={{ fontFamily: "Belgan" }}>
          {project.title}
        </h1>
      </div>
      <div className="absolute bottom-10 flex p-4 gap-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <p className="happy-font">{project.subtitle}</p>
        <div className=" bg-white rounded-full h-min p-1 text-black">
          <ArrowOutwardIcon />
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default Project;
