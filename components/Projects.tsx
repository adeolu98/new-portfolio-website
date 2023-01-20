import React, { FunctionComponent } from "react";

import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ProjectCard } from "../components/Cards/ProjectCard";

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  control: {
    "&[data-inactive]": {
      opacity: 0,
      cursor: "default",
    },

    scale: "1.5",
  },

  indicator: {
    width: "20px",
    height: "20px",
    border: "1px solid #000000",

    "&[data-active]": {
      backgroundColor: "#000000",
    },
  },

  root: {
    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

export interface ProjectsProps {
  onClick?: () => void;
  className?: string;
}

export const Projects: FunctionComponent<ProjectsProps> = ({
  onClick,
  className = "",
}) => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const { classes } = useStyles();

  return (
    <div className={className}>
      <div className="w-full h-full hidden md:block">
        <Carousel
          sx={{
            width: "100%",
            paddingLeft: "60px",
            paddingRight: "60px",
            paddingBottom: "80px",
          }}
          mx="auto"
          withIndicators
          withControls
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={classes}
        >
          <Carousel.Slide>
            <div className="lg:mt-16 flex flex-col w-full md:flex-row gap-8">
              <ProjectCard imageSrc="/project1.jpg">
                <>
                  <p className="text-sm xl:text-lg">Project Title</p>
                  <p className="text-xs xl:text-base">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>
                </>
              </ProjectCard>
              <ProjectCard imageSrc="/project2.jpg">
                <>
                  <p className="text-sm xl:text-lg">Project Title</p>
                  <p className="text-xs xl:text-base">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>
                </>
              </ProjectCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="lg:mt-16 flex flex-col w-full md:flex-row gap-8">
              <ProjectCard imageSrc="/project1.jpg">
                <>
                  <p className="text-sm xl:text-lg">Project Title</p>
                  <p className="text-xs xl:text-base">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>
                </>
              </ProjectCard>
              <ProjectCard imageSrc="/project2.jpg">
                <>
                  <p className="text-sm xl:text-lg">Project Title</p>
                  <p className="text-xs xl:text-base">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>
                </>
              </ProjectCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="lg:mt-16 flex flex-col w-full md:flex-row gap-8">
              <ProjectCard imageSrc="/project1.jpg">
                <>
                  <p className="text-sm xl:text-lg">Project Title</p>
                  <p className="text-xs xl:text-base">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>
                </>
              </ProjectCard>
              <ProjectCard imageSrc="/project2.jpg">
                <>
                  <p className="text-sm xl:text-lg">Project Title</p>
                  <p className="text-xs xl:text-base">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>
                </>
              </ProjectCard>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="w-full h-full block md:hidden">
        <Carousel
          sx={{
            width: "100%",
            paddingLeft: "60px",
            paddingRight: "60px",
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
          mx="auto"
          withIndicators
          withControls
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={classes}
        >
          <Carousel.Slide>
            <ProjectCard imageSrc="/project1.jpg" disableHover = {true}></ProjectCard>
            <div className="text-center mt-6">
              <p className="text-lg">Project Title</p>
              <p className="text-sm">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <ProjectCard imageSrc="/project1.jpg" disableHover = {true}></ProjectCard>
            <div className="text-center mt-6">
              <p className="text-lg">Project Title</p>
              <p className="text-sm">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};
