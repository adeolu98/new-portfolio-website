import React, { FunctionComponent, useEffect, useState } from "react";


export interface NavProps {
  className?: string;
  top?: number;
}

export const Nav: FunctionComponent<NavProps> = ({
  className = "",
  top = 450,
}) => {
  const [changeBg, setChangeBg] = useState(false)
  
  useEffect(() => {
    const onScroll = () => {
      setChangeBg(document.documentElement.scrollTop >= top);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [top]);

  return (
    <div className={`${className} ${changeBg && 'bg-slate-200'}  xxs:sticky z-[600] top-0 w-full flex flex-col xxs:flex-row justify-center items-center lg:gap-8 text-xs md:text-base text-center py-1 xxs:h-12`}>
    <a
      href="#experience"
      className="px-1 xs:px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black"
    >
      <p>EXPERIENCE</p>
    </a>
    <a
      href="#skills"
      className="px-1 xs:px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200  hover:border-2 hover:border-black focus:border-2 focus:border-black"
    >
      <p> SKILLS</p>
    </a>
    <a
      href="#projects"
      className="px-1 xs:px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black"
    >
      <p>PROJECTS</p>
    </a>
    <a
      href="#about"
      className="px-1 xs:px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black"
    >
      <p>ABOUT</p>
    </a>
  </div>
  );
};
