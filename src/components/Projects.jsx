import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { git_hub } from "../assets";
import { Tilt } from "react-tilt";
import ProjectCard from "./ProjectCard";
import Masonry from "react-masonry-css";

const Projects = () => {

  

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 2,
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          varients={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perferendis culpa iste neque beatae voluptas similique cum dicta alias
          ipsa mollitia, voluptate, iusto sit accusantium!
        </motion.p>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid "
        columnClassName="masonry-grid-column"
      >
        {projects.map((project, index) => (
        
            <ProjectCard project={project} />
        ))}
      </Masonry>

    
    </div>
  );
};

export default SectionWrapper(Projects, "");
