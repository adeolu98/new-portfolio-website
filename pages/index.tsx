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
    <div className="bg-slate-100 pt-10 lg:pt-10 w-screen min-h-screen">
      <div className="px-8 md:pb-8 lg:pb-0 lg:px-32">
        <ContactLinks />
        <Intro className="h-screen"></Intro>
      </div>
      <Nav className="-mt-60 mb-20 h-12"></Nav>
      <div
        id="experience"
        className="lg:h-screen w-full px-8 lg:px-32 flex flex-col items-center"
      >
        <p className="absolute text-4xl mt-20 lg:mt-24 text-center font-bold">
          Work Experience
        </p>
        <Experience className="mt-20 lg:mt-28 w-full h-full"></Experience>
      </div>
      <div
        id="skills"
        className="w-full px-8 lg:px-32 flex flex-col justify-center py-16"
      >
        <p className="mt-12 text-4xl text-center  font-bold">Skills</p>
        <Skills className="mt-20"></Skills>
      </div>

      <div
        id="projects"
        className="w-full gap-24 lg:gap-10 flex w-full flex-col py-20 justify-center px-8 lg:px-32 lg:py-32"
      >
        <p className="text-center text-4xl font-bold">Projects</p>
        <Projects className="w-full h-full"></Projects>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div className="py-3">
        <p className="text-center"> copyright &copy; 2022 ADEOLUADEWOLE</p>
      </div>
      <ScrollToTop
        style={{ backgroundColor: "transparent" }}
        className="flex justify-center items-center animate-bounce"
      ></ScrollToTop>
    </div>
  );
}
