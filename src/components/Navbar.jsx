import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Close, DragHandleOutlined } from "@mui/icons-material";
import ThemeControl from "./ThemeControl";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`z-50  navbar flex justify-center pt-2 ${
        !isNonMobileScreens ? "" : ""
      } `}
    >
      <div className="navbar w-full px-4 flex gap-2 justify-between items-center">
        <div
          className={`logo flex gap-4 dark:text-white text-black items-center ${
            !isNonMobileScreens ? "" : ""
          } `}
        >
          <img src={logo} alt="" className="w-14 h-14 rounded-md " />
          <div className="line  rotate-180 bg-current p-1 h-16"></div>
          <div>
            <p
              className="text-wrap text-[1.7rem] font-bold -my-2"
              style={{ fontFamily: "Belgan" }}
            >
              HARSH
            </p>
            <p
              className="text-wrap font-bold text-[1.7rem] -my-2 "
              style={{ fontFamily: "Belgan" }}
            >
              KHAVALE
            </p>
          </div>
        </div>
        <div className="links">
          <ul className="list-none hidden sm:flex flex-row items-center gap-10 rounded-2xl  p-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? " p-2" : "text-secondary"
                } hover:underline underline-offset-[1rem]   cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`${link.id}`} className=" happy-font font-semibold">
                  {""}
                  {link.id}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {isNonMobileScreens && (
          <div>
            <ThemeControl />
          </div>
        )}

        <div
          className="sm:hidden cursor-pointer flex z-50 flex-1 justify-end dark:text-white text-black items-center"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <DragHandleOutlined /> : <Close className="border rounded-full border-black" style={{color:'black',fontSize:'5rem'}} />}
        </div>
        {!isNonMobileScreens && (
          <div>
            <ThemeControl />
          </div>
        )}
        <div
          className={`${
            toggle ? "hidden" : "flex-col"
          } bg-current fixed top-0 start-0 w-screen p-4 h-screen flex justify-center  z-10 rounded-bl-[10rem]`}
        >
          <ul className="list-none my-2 flex  flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-[#3cffd8]" : "text-black"
                } hover:text-[#3cffd8]  text-[17px] cursor-pointer flex justify-center`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a
                  href={`${link.id}`}
                  className="text-5xl happy-font font-bold text-center"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {}
    </div>
  );
};

export default Navbar;
