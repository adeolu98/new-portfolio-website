import { ContactLinks } from "../components/ContactLinks";
import { Intro } from "../components/Intro";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { About } from "../components/About";
import { Nav } from "../components/Nav";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <div className="bg-slate-100  pt-5 sm:pt-10 w-screen min-h-screen">
      <div className="px-8 md:pb-8 lg:pb-0 lg:px-32">
        <ContactLinks />
        <Intro className="min-h-screen"></Intro>
      </div>
      <Nav className="-mt-40 xs:-mt-56 sm:-mt-60"></Nav>
      <div
        id="experience"
        className="h-max w-full px-8 lg:px-32 mt-20 flex flex-col items-center"
      >
        <p className="relative md:absolute xxs:text-4xl mt-20 lg:mt-24 text-center font-bold">
          Work Experience
        </p>
        <Experience className="mt-6 sm:mt-28  w-full h-full"></Experience>
      </div>

      <div
        id="skills"
        className="w-full px-8 lg:px-32 flex flex-col justify-center py-16"
      >
        <p className="mt-12 xxs:text-4xl text-center  font-bold">Skills</p>
        <Skills className="mt-20"></Skills>
      </div>
      <div
        id="projects"
        className="w-full gap-24 lg:gap-10 w-full  py-20 justify-center px-8 lg:px-32 lg:py-32"
      >
        <p className="text-center xxs:text-4xl font-bold">Projects</p>
        <Projects className="w-full h-full"></Projects>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div className=" text-xs py-3">
        <p className="text-center"> copyright &copy; 2022 ADEOLUADEWOLE</p>
      </div>
      <ScrollToTop
        style={{ backgroundColor: "transparent"}} //has to be defined to override the default
        className="animate-bounce flex justify-center items-center"
      ></ScrollToTop>
    </div>
  );
}
