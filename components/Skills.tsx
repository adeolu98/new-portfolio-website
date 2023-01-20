import React, { FunctionComponent } from "react";
import { SkillCard } from "./Cards/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
} from "@fortawesome/free-brands-svg-icons";


export interface SkillsProps {
  className?: string;
}

export const Skills: FunctionComponent<SkillsProps> = ({ className = "" }) => {
  return (
    <div className={`${className} grid gap-4 grid-cols-3  md:grid-cols-6`}>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className="pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
      <SkillCard>
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faReact}
        ></FontAwesomeIcon>
        <p className=" pt-4 text-xl">React</p>
      </SkillCard>
    </div>
  );
};
