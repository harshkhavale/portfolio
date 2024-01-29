import React, { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { menu, close } from "../assets";
import { contacts, navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Close, DragHandleOutlined } from "@mui/icons-material";

const Navbar = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <div className="z-50  navbar flex justify-center pt-2">
      <div className="navbar w-full px-4 flex justify-between">
        <div className="logo flex gap-4 items-center">
          <h1 className=" font-black text-5xl" data-text={"HARSH"} style={{fontFamily:'Belgan'}}>
            {"HARSH"}
          </h1>{" "}
          <div className="line w-1 rotate-180 rounded-3xl bg-current h-full"></div>
          <p className="text-wrap w-24">
            A Full Stack Web/Application Developer
          </p>
        </div>
        <div className="links">
          <ul className="list-none hidden sm:flex flex-row items-center gap-10">
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
                <a href={`#${link.id}`}> {link.title}</a>
              </li>
            ))}
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
                <a href={`#${link.id}`} style={{ fontFamily: "Belgan" }} className="text-3xl font-black text-center">
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
