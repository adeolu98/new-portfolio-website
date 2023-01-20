import { ContactLinks } from "../components/ContactLinks";
import { Intro } from "../components/Intro";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { About } from "../components/About";

export default function Home() {
  return (
    <div className="bg-slate-100 pt-10 lg:pt-10 w-screen min-h-screen">
      <div className="px-8 md:pb-8 lg:pb-0 lg:px-32">
        <ContactLinks />
        <Intro className="h-screen"></Intro>
      </div>
      <div className="lg:h-screen w-full px-8 lg:px-32 flex flex-col items-center">
        <p className="absolute text-4xl md:mt-6 text-center font-bold">
          Work Experience
        </p>
        <Experience className="mt-20 w-full h-full"></Experience>
      </div>
      <div className="w-full px-8 lg:px-32 flex flex-col justify-center py-16">
        <p className="text-4xl text-center  font-bold">Skills</p>
        <Skills className="mt-20"></Skills>
      </div>

      <div className="w-full gap-24 lg:gap-10 flex w-full flex-col py-20 justify-center px-8 lg:px-32 lg:py-32">
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
