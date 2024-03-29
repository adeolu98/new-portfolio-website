import React, { FunctionComponent } from "react";
import { SkillCard } from "./Cards/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import tailwindLogo from "../public/tailwind.svg";

export interface SkillsProps {
  className?: string;
}

export const Skills: FunctionComponent<SkillsProps> = ({ className = "" }) => {
  return (
    <div className={`${className} grid gap-4 grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3  md:grid-cols-6 text-xs xs:text-sm md:text-base lg:text-xl`}>
      <SkillCard className="h-full lg:h-60">
        <img src={"/skills/tailwindcss.svg"} className="w-full h-full"></img>
        <p className="pt-4">Tailwind</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <img src={"/skills/typescript.svg"} className="w-full h-full"></img>
        <p className="pt-4">Typescript</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <img src={"/skills/nextjs.svg"} className="w-full h-full"></img>
        <p className="pt-4">Next.js</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
          <img src={"/skills/solidity.svg"} className="w-full h-full"></img>
          <p className="pt-4">Solidity</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <img src={"/skills/hardhat.svg"} className="w-full h-full"></img>
        <p className="pt-4">Hardhat</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <img src={"/skills/subgraphs.svg"} className="w-full h-full"></img>
        <p className="pt-4">Subgraphs</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <img src={"/skills/ethers.svg"} className="w-full h-full"></img>
        <p className="pt-4">Ethers.js</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <FontAwesomeIcon
          icon={faReact}
          className="w-full h-full"
        ></FontAwesomeIcon>
        <p className="pt-4">React.js</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
      <img src={"/skills/foundry-banner.png"} className="object-cover w-full h-full"></img>
      
        <p className="pt-4">Foundry</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <FontAwesomeIcon
          icon={faJs}
          className="w-full h-full"
        ></FontAwesomeIcon>
        <p className="pt-4">Javascript</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <FontAwesomeIcon
          icon={faGit}
          className="w-full h-full"
        ></FontAwesomeIcon>
        <p className="pt-4">Git</p>
      </SkillCard>
      <SkillCard className="h-full lg:h-60">
        <FontAwesomeIcon
          icon={faPython}
          className="w-full h-full"
        ></FontAwesomeIcon>
        <p className="pt-4">Python</p>
      </SkillCard>
    </div>
  );
};
