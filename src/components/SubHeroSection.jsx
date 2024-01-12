import React from "react";
import { styles } from "../styles";
const SubHeroSection = () => {
  return (
    <div className="sub-hero ">
      <div className="content absolute top-36 w-full md:top-48 ml-[-100px] ">
        <div className="content__container ">
          <ul className="content__container__list ">
            <li className="content__container__list__item text-2xl md:text-5xl ">
              <p className={`${styles.heroHeadText}`}>Web Developer</p>
            </li>
            <li className="content__container__list__item text-2xl md:text-5xl">
            <p className={`${styles.heroHeadText}`}>Harsh</p>

            </li>
            <li className="content__container__list__item text-2xl md:text-5xl">
            <p className={`${styles.heroHeadText}`}>App Developer</p>
            </li>
            <li className="content__container__list__item text-2xl md:text-5xl">
            <p className={`${styles.heroHeadText}`}>UI/UX Designer</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
