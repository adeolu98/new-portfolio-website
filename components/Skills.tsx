import React, { FunctionComponent } from "react";
import { SkillCard } from "./Cards/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
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
    <div className={`${className} grid gap-4 grid-cols-3  md:grid-cols-6`}>
      <SkillCard className="h-60">
        <img src={"/skills/tailwindcss.svg"} className="w-full h-full"></img>
        <p className="py-4 text-xl">Tailwind</p>
      </SkillCard>
      <SkillCard className="h-60">
        <img src={"/skills/typescript.svg"} className="w-full h-full"></img>
        <p className="py-4 text-xl">Typescript</p>
      </SkillCard>
      <SkillCard className="h-60">
        <img src={"/skills/nextjs.svg"} className="w-full h-full"></img>
        <p className="py-4 text-xl">Next.js</p>
      </SkillCard>
      <SkillCard className="h-60">
          <img src={"/skills/solidity.svg"} className="w-full h-full"></img>
          <p className="py-4 text-xl">Solidity</p>
      </SkillCard>
      <SkillCard className="h-60">
        <img src={"/skills/hardhat.svg"} className="w-full h-full"></img>
        <p className="py-4 text-xl">Hardhat</p>
      </SkillCard>
      <SkillCard className="h-60">
        <img src={"/skills/subgraphs.svg"} className="w-full h-full"></img>
        <p className="py-4 text-xl">Subgraphs</p>
      </SkillCard>
      <SkillCard className="h-60">
        <img src={"/skills/ethers.svg"} className="w-full h-full"></img>
        <p className="py-4 text-xl">Ethers.js</p>
      </SkillCard>
      <SkillCard className="h-60">
        <FontAwesomeIcon
          icon={faReact}
          className="w-full h-full"
        ></FontAwesomeIcon>
        <p className="py-4 text-xl">React.js</p>
      </SkillCard>
      <SkillCard className="h-60">
        <FontAwesomeIcon
          icon={faCss3}
          className="w-full h-full"
        ></FontAwesomeIcon>
        <p className="py-4 text-xl">CSS</p>
      </SkillCard>
      <SkillCard className="h-60">
        <FontAwesomeIcon
          icon={faHtml5}
          className="w-full h-4/5"
        ></FontAwesomeIcon>
        <p className="py-4 text-xl">HTML</p>
      </SkillCard>
      <SkillCard className="h-60">
        <FontAwesomeIcon
          icon={faJs}
          className="w-full h-full"
        ></FontAwesomeIcon>
        <p className="py-4 text-xl">Javascript</p>
      </SkillCard>
      <SkillCard className="h-60">
        <FontAwesomeIcon
          icon={faPython}
          className="w-full h-full"
        ></FontAwesomeIcon>
        <p className="py-4 text-xl">Python</p>
      </SkillCard>
    </div>
  );
};
