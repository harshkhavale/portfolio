import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Close, DragHandleOutlined } from "@mui/icons-material";
import ThemeControl from "./ThemeControl";
const Navbar = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <div className="z-50  navbar flex justify-center pt-2">
      <div className="navbar w-full px-4 flex gap-2 justify-between items-center">
        <div className="logo flex gap-4 items-center ">
          <img src={logo} alt="" className="w-14 h-14 " />
          <div className="line  rotate-180 bg-white p-1 h-16"></div>
          <div>
          <p className="text-wrap text-[1.7rem] font-bold -my-2" style={{fontFamily:'Belgan'}}>HARSH</p>
          <p className="text-wrap font-bold text-[1.3rem] -my-2 " style={{fontFamily:'Belgan'}}>KHAVALE</p>
          </div>
         

        </div>
        <div className="links">
          <ul className="list-none hidden sm:flex flex-row items-center gap-10 rounded-2xl border-2 border-current p-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "outline p-2 rounded-3xl"
                    : "text-secondary"
                } hover:underline underline-offset-8   cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`${link.id}`} className="happy-font font-bold">
                  {" "}
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <ThemeControl />
            </li>
          </ul>
        </div>
        <div
          className="sm:hidden cursor-pointer flex flex-1 justify-end items-center"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <DragHandleOutlined /> : <Close />}
        </div>
        <div
          className={`${
            toggle ? "hidden" : "flex-col"
          } p-6 bg-current absolute top-20 right-0 mx-4 my-2 w-full  z-10 rounded-b-3xl`}
        >
          <ul className="list-none my-2 flex justify-end items-start flex-col gap-4">
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
                  style={{ fontFamily: "Belgan" }}
                  className="text-3xl font-black text-center"
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
