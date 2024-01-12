import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { staticWebsites } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { git_hub } from "../assets";
const ProjectCard = ({ project }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", project.index * 0.5, 0.75)}>
      <div className=" shadow-xl h-full ">
        <div className=" relative w-full">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-62 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className=" w-10 h-10 rounded-full hover:w-14 flex justify-center items-center cursor-pointer "
            >
              <img
                src={git_hub}
                alt="github"
                className=" rounded-full  object-contain"
              />
            </div>
          </div>
        </div>
        <div className=" ">
          <h3 className="bg-gray-200 text-black p-2 font-bold text-[24px]">
            {project.name}
          </h3>
        </div>
        <div className="p-2">
          <h3 className=" font-semibold text-[17px]">{project.subtitle}</h3>
          <p className="mt-2 text-secondary text-[17px]">
            {project.description}
          </p>{" "}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p key={tag.name} className={`text-[17px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Slider = ({ type }) => {
  return (
    <div className="slidebox p-4">
      <Swiper
        className="myswiper"
        modules={[Pagination, Navigation]}
        // navigation={true}
        loopFillGroupWithBlanck={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {type.map((project, index) => (
          <SwiperSlide>
            <ProjectCard key={`project-${index}`} project={project} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
