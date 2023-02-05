import React, { FunctionComponent, useEffect, useState } from "react";

import { Carousel } from "@mantine/carousel";
import { createStyles, useMantineTheme } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ProjectCard } from "../components/Cards/ProjectCard";
import { useMediaQuery } from "@mantine/hooks";

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
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const [useControl, setUseControl] = useState(true);

  useEffect(() => {
    window.screen.width > theme.breakpoints.sm
      ? setUseControl(true)
      : setUseControl(false);
  }, []);

  return (
    <div className={className}>
      <div className="w-full h-full">
        <Carousel
          slideSize="50%"
          breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
          slideGap="xl"
          align={'center'}
          slidesToScroll={mobile ? 1 : 2}
          sx={{
            width: "100%",
            paddingLeft: "60px",
            paddingRight: "60px",
            paddingBottom: "80px",
          }}
          mx="auto"
          withIndicators
          withControls ={useControl}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={classes}
        >
          <Carousel.Slide>
            <div className="mt-16 w-full">
            <ProjectCard imageSrc="/projects/project2.jpg">
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
            <div className="mt-16 w-full">
              <ProjectCard imageSrc="/projects/project1.jpg">
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
            <div className="mt-16 w-full">
              <ProjectCard imageSrc="/projects/project2.jpg">
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
    </div>
  );
};
