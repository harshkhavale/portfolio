import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
   
      <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="m-1">
        <div className="bg-tertiary m-6 relative shadow-lg rounded-2xl sm:w-[360px] w-full">
          <div className=" relative w-full">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className=" w-10 h-10 rounded-full hover:w-12 flex justify-center items-center cursor-pointer "
              >
                <img
                  src={github}
                  alt="github"
                  className=" rounded-full  object-contain"
                />
              </div>
            </div>
          </div>
          {isHovered && (
            <div className="info text-black w-full p-4 mt-0  absolute bg-gradient-to-t from-white via-white  to-transparent bg-opacity-10 z-50 bottom-0">
              <div className="mt-5 ">
                <h3 className={`${styles.sectionHeadText}`}>{project.name}</h3>
                <h3 className=" font-semibold">{project.subtitle}</h3>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <p
                    key={tag.name}
                    className={`text-xs font-bold rounded-2xl p-1 text-white bg-gray-400 ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default ProjectCard;
