import React from "react";
import StaggeredGrid from "./StaggeredGrid";
import { git_hub, glory, urbanstore, variables } from "../assets";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { styles } from "../styles";
import GitHubIcon from '@mui/icons-material/GitHub';
const Project = () => {
  return (
    <div className=" grid md:grid-cols-9 grid-cols-1 ">
      <div className="showcase col-span-6">
        <StaggeredGrid images={[variables, urbanstore, glory]} />
      </div>
      <div className="info col-span-3 shadow-2xl">
        <div className="navbar flex justify-between py-2 p-2">
          <ArrowCircleLeftOutlinedIcon fontSize={"large"} />
          <p className="text-gray-500 font-semibold">Back to Projects</p>
        </div>
        <div className="moreinfo flex flex-col gap-4 p-4">
          <p className={`${styles.sectionHeadText} `}>Project name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            rerum!
          </p>
          <img src={variables} alt="" className="rounded-lg" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            pariatur aperiam mollitia, sapiente impedit libero molestias nulla
            expedita velit in animi cupiditate laudantium iure quos, atque
            suscipit ullam ut unde.
          </p>
          <div className="git flex gap-4 p-2">
          <GitHubIcon/>
          <p>link</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
