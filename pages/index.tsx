import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ContactLinks } from "../components/ContactLinks";
import { Intro } from "../components/Intro";
import { ExperienceCard } from "../components/Cards/ExperienceCard";
import { SkillCard } from "../components/Cards/SkillCard";
import { Skills } from "../components/Skills";
import { ProjectCard } from "../components/Cards/ProjectCard";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { About } from "../components/About";


export default function Home() {

  return (
    <div className="bg-slate-100 pt-10 lg:pt-10 w-screen min-h-screen">
      <div className="px-8 pb-8 lg:pb-0 lg:px-32">
        <ContactLinks />
        <Intro className="h-screen"></Intro>
      </div>
      <div className="h-screen w-full px-8 lg:px-32 flex flex-col items-center">
        <p className="absolute text-4xl mt-6 text-center font-bold">
          Work Experience
        </p>
      <Experience className="mt-20 w-full h-full"></Experience>
      </div>
      <div className="w-full px-8 lg:px-32 flex flex-col justify-center py-16">
        <p className="text-4xl text-center  font-bold">Skills</p>
        <Skills className="mt-20"></Skills>
      </div>

      <div className="w-full gap-36 lg:gap-10 h-screen flex w-full flex-col pt-20 justify-center px-8 lg:px-32 lg:py-32">
        <p className="text-center text-4xl font-bold">Projects</p>
        <Projects className="w-full h-full"></Projects>
      </div>
<About></About>

      <div className="py-3">
        <p className="text-center"> copyright &copy; 2022 ADEOLUADEWOLE</p>
      </div>
    </div>
  );
}
