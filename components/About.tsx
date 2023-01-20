import React, { FunctionComponent } from "react";
import { SkillCard } from "./Cards/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
} from "@fortawesome/free-brands-svg-icons";


export interface AboutProps {
  className?: string;
}

export const About: FunctionComponent<AboutProps> = ({ className = "" }) => {
  return (
    <div className={`${className} bg-slate-200 h-screen  p-8 py-8 lg:p-0 w-full flex gap-10 lg:gap-44 flex-col lg:flex-row items-center justify-center`}>
    <img
      className=" h-96 lg:h-[600px] border-black rounded-xl"
      src={"/deolu-2.jpg"}
    ></img>
    <div className=" lg:w-2/6 flex flex-col gap-4 justify-center lg:justify-left lg:gap-8 ">
      <p className="text-4xl font-bold text-center lg:text-left">About </p>
      <p className="text-sm text-center md:px-16 lg:px-0 lg:text-left">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum.
      </p>
    </div>
  </div>
  );
};
