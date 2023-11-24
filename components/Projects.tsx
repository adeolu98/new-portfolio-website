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
          align={"center"}
          slidesToScroll={mobile ? 1 : 2}
          sx={
            mobile
              ? {
                  width: "100%",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "80px",
                }
              : {
                  width: "100%",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  paddingBottom: "80px",
                }
          }
          mx="auto"
          withIndicators
          withControls={useControl}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={classes}
        >
          <Carousel.Slide>
            <div className="mt-16 w-full">
              <ProjectCard
                imageSrc="/projects/project1.jpeg"
                projectLink="https://www.textmeanon.com/"
              >
                <>
                  <p className="text-sm xl:text-lg">Text-Me Anon</p>
                  <p className="text-xs xl:text-base">
                    Messaging app for the EVM.
                  </p>
                </>
              </ProjectCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="mt-16 w-full">
              <ProjectCard
                imageSrc="/projects/project2.jpeg"
                projectLink="https://github.com/adeolu98/token-bridge-layerzero"
              >
                <>
                  <p className="text-sm xl:text-lg">L1-L2 Token Bridge</p>
                  <p className="text-xs xl:text-base">
                    Cross-chain bridging of token asset from L1 to L2 and back. 
                  </p>
                </>
              </ProjectCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="mt-16 w-full">
              <ProjectCard
                imageSrc="/projects/project3.jpeg"
                projectLink="https://github.com/adeolu98/governance-nft-contract"
              >
                <>
                  <p className="text-sm xl:text-lg">Goverance contract for voting on-chain</p>
                  <p className="text-xs xl:text-base">
                  Implemetation of a goverance contract that gives holders of an NFT token governance rights.
                  </p>
                </>
              </ProjectCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="mt-16 w-full">
              <ProjectCard
                imageSrc="/projects/project4.jpeg"
                projectLink="https://github.com/adeolu98/deployer-tracker"
              >
                <>
                  <p className="text-sm xl:text-lg">Deploy Tracker</p>
                  <p className="text-xs xl:text-base">
                    Tracks new contract deployments for a target address.
                  </p>
                </>
              </ProjectCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="mt-16 w-full">
              <ProjectCard
                imageSrc="/projects/project5.jpeg"
                projectLink="https://github.com/adeolu98/ethernaut-game"
              >
                <>
                  <p className="text-sm xl:text-lg">Ethernaut Game Solutions</p>
                  <p className="text-xs xl:text-base">
                    My solutions to the ethernaut solidity trivia games
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
