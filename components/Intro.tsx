import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";


export interface IntroProps {
  onClick?: () => void;
  className?: string;
}

export const Intro: FunctionComponent<IntroProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
    <motion.div
      transition={{
        duration: 8,
        ease: "circInOut",
        repeat: Infinity,
      }}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.3 }}
      className="w-72 -mt-44 lg:-mt-60 h-72 absolute lg:relative lg:w-[900px] lg:h-[900px] p-5 lg:p-20 rounded-full border border-slate-300"
    >
      <div className="w-full h-full p-5 lg:p-20 rounded-full  border border-slate-300">
        <div className="w-full h-full p-5 lg:p-20 rounded-full  border border-slate-300">
          <div className="w-full h-full p-5 lg:p-32 rounded-full border border-slate-300">
            <div className="w-full h-full rounded-full">
              <img
                alt="image"
                src="/deolu.jpg"
                className="w-full object-cover h-full rounded-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    <div className="absolute flex flex-col gap-8 items-center mt-56 lg:mt-32">
      <div className="text-center">
        <p className="text-xl tracking-[.24em] ">SOFTWARE ENGINEER</p>
        <p className="mt-2 font-black text-4xl">ADEOLU ADEWOLE</p>
      </div>

      <div className="flex flex-row gap-4 lg:gap-8 text-xs md:text-base items-center justify-between h-12">
        <button className="px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black">
          <p>EXPERIENCE</p>
        </button>
        <button className="px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200  hover:border-2 hover:border-black focus:border-2 focus:border-black">
          <p> SKILLS</p>
        </button>
        <button className="px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black">
          <p>PROJECTS</p>
        </button>
        <button className="px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black">
          <p>ABOUT</p>
        </button>
      </div>
    </div>
  </div>
  );
};
