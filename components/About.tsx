import React, { FunctionComponent } from "react";

export interface AboutProps {
  className?: string;
}

export const About: FunctionComponent<AboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`${className} bg-slate-200 h-full xs:h-screen  p-8 py-8 lg:p-0 w-full flex gap-10 lg:gap-44 flex-col lg:flex-row items-center justify-center`}
    >
      <img
        className=" h-96 lg:h-[600px] border-black rounded-xl"
        src={"/deolu/deolu-2.jpg"}
      ></img>
      <div className=" lg:w-2/6 flex flex-col gap-4 justify-center lg:justify-left lg:gap-8 ">
        <p className="xxs:text-4xl font-bold text-center lg:text-left">
          About
        </p>
        <p className="text-sm md:text-lg text-center md:px-16 lg:px-0 lg:text-left">
          Adeolu is a skilled software engineer specializing in web3
          technologies. With over 3 years of experience, He excels in developing
          robust web applications using cutting-edge tools. Passionate about the
          decentralized web, Adeolu stays up-to-date with the latest trends
          to provide innovative solutions. For exceptional results in your web3
          projects, collaborate with Adeolu, a dedicated and knowledgeable
          professional.
        </p>
      </div>
    </div>
  );
};
