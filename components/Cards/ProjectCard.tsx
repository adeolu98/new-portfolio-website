import React, { FunctionComponent, ReactNode, useState } from "react";

export interface ProjectCardProps {
  imageSrc: string;
  className?: string;
  children?: ReactNode;
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  className = "",
  imageSrc,
  children,
}) => {
  const [showProjectInfo, setShowProjectInfo] = useState("invisible");

  const handleDisplayProjectInfo = (action: string) => {
    action === "show"
      ? setShowProjectInfo("visible")
      : setShowProjectInfo("invisible");
  };

  return (
    <div
      className={`${className} border rounded-3xl flex flex-col justify-left bg-black`}
      onMouseOver={() => handleDisplayProjectInfo("show")}
      onMouseOut={() => handleDisplayProjectInfo("hide")}
    >
      <img
        src={imageSrc}
        className=" w-full h-full rounded-3xl hover:opacity-30"
        alt={"project"}
      ></img>
      <div
        className={`${showProjectInfo} absolute bottom-0 md:w-72 lg:w-96 xl:w-[500px] text-left text-white px-6 pb-6`}
      >
        {children}
      </div>
    </div>
  );
};
