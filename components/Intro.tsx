import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";


export interface IntroProps {
  className?: string;
}

export const Intro: FunctionComponent<IntroProps> = ({
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
      className=" w-36 xxs:w-52 xxs:h-52 xs:w-72  -mt-44 lg:-mt-60 xs:h-72 absolute lg:relative lg:w-[900px] lg:h-[900px] p-3 xs:p-5 lg:p-20 rounded-full border border-slate-300"
    >
      <div className="w-full h-full p-3 xs:p-5 lg:p-20 rounded-full  border border-slate-300">
        <div className="w-full h-full p-3 xs:p-5 lg:p-20 rounded-full  border border-slate-300">
          <div className="w-full h-full p-3 xs:p-5 lg:p-32 rounded-full border border-slate-300">
            <div className="w-full h-full xxs:p-3 xs:p-5 rounded-full">
              <img
                alt="image"
                src="/deolu/deolu.jpg"
                className="w-full object-cover h-full rounded-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
      <div className="absolute mt-16 sm:mt-40 lg:mt-32 text-center">
        <p className="text-xl tracking-[.24em] ">SOFTWARE ENGINEER</p>
        <p className="mt-2 font-black text-lg xs:text-4xl">ADEOLU ADEWOLE</p>
      </div>
  </div>
  );
};
