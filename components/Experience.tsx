import React, { FunctionComponent, useEffect } from "react";

import { useRef, useState } from "react";
import { ExperienceCard } from "../components/Cards/ExperienceCard";
import { Carousel } from "@mantine/carousel";
import { createStyles, useMantineTheme } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
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

export interface ExperienceProps {
  onClick?: () => void;
  className?: string;
}

export const Experience: FunctionComponent<ExperienceProps> = ({
  onClick,
  className = "",
}) => {
  const [cardOneOpacity, setCardOneOpacity] = useState("");
  const [cardTwoOpacity, setCardTwoOpacity] = useState("");
  const [useControl, setUseControl] = useState(true);
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  useEffect(() => {
    window.screen.width >= theme.breakpoints.sm
      ? setUseControl(true)
      : setUseControl(false);
  }, []);

  const handleOpacityCardTwo = (action: string) => {
    action === "reset"
      ? setCardTwoOpacity("")
      : setCardTwoOpacity("opacity-25");
  };

  const handleOpacityCardOne = (action: string) => {
    action === "reset"
      ? setCardOneOpacity("")
      : setCardOneOpacity("opacity-25");
  };

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
              ? { width: "100%", padding: "10px 10px 30px" }
              : { width: "100%", padding: "40px" }
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
            <div className="w-full h-full px-3 md:px-10 py-10">
              <ExperienceCard
                cardOpacity={cardOneOpacity}
                onMouseLeave={() => handleOpacityCardTwo("reset")}
                onMouseOver={() => handleOpacityCardTwo("reduce")}
              >
                <p className="text-lg lg:text-4xl font-bold">
                  Lead Project Developer
                </p>
                <p className=" text-base mt-2 lg:text-2xl font-bold">
                  Text-Me Anon
                </p>
                <p className="mt-4 text-xs lg:text-sm">02/2023 - Present</p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>Lead creative UI design and technical processes.</li>
                  <li className="pt-2">
                    Helped launch project from ground zero to a public V1.
                  </li>
                  <li className="pt-2">
                    Developed and tested smart contracts that may be needed in
                    features on the project.
                  </li>
                  <li className="pt-2">Debugging of issues faced by users.</li>
                  <li className="pt-2">
                    Reasearched several methods/new means to improve app UX via
                    the UI features in the app.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="w-full h-full px-3 md:px-10 py-10">
              <ExperienceCard
                cardOpacity={cardOneOpacity}
                onMouseLeave={() => handleOpacityCardTwo("reset")}
                onMouseOver={() => handleOpacityCardTwo("reduce")}
              >
                <p className="text-lg lg:text-4xl font-bold">
                  Full stack Blockchain Developer
                </p>
                <p className=" text-base mt-2 lg:text-2xl font-bold">
                  Autonomy Network
                </p>
                <p className="mt-4 text-xs lg:text-sm">09/2021 - 12/2022</p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the development and testing of smart contracts
                    made for specific use cases of the autonomy core smart
                    contract protocol.
                  </li>
                  <li className="pt-2">Debugging of issues faced by users.</li>
                  <li className="pt-2">
                    Involved in making documentation/demos for devrel related
                    tasks and user support.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="w-full h-full px-3 md:px-10 py-10">
              <ExperienceCard
                cardOpacity={cardTwoOpacity}
                onMouseLeave={() => handleOpacityCardOne("reset")}
                onMouseOver={() => handleOpacityCardOne("reduce")}
              >
                <p className="text-lg lg:text-4xl font-bold">
                  Full stack Blockchain Developer
                </p>
                <p className=" mt-2 text-base lg:text-2xl font-bold">
                  The Well
                </p>
                <p className="mt-4 text-xs lg:text-sm">01/2021 - 09/2021</p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Writing smart contracts to be used by The Well Protocol, A
                    permissionless, interoperable NFT ecosystem for collectors,
                    curators and artists.
                  </li>
                  <li className="pt-2">
                    Development of decentralized applications with web3.js,
                    IPFS, react.js, HTML and CSS.
                  </li>
                  <li className="pt-2">
                    Development of smart contracts on L2`&apos;`s and other
                    Ethereum compatible blockchains to minimize gas costs for
                    users.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="w-full h-full  px-3 md:px-10 py-10">
              <ExperienceCard
                cardOpacity={cardOneOpacity}
                onMouseLeave={() => handleOpacityCardTwo("reset")}
                onMouseOver={() => handleOpacityCardTwo("reduce")}
              >
                <p className="text-lg lg:text-4xl font-bold">
                  Blockchain Developer
                </p>
                <p className="mt-2 text-base lg:text-2xl font-bold">
                  Freelance
                </p>
                <p className="mt-4 text-xs lg:text-sm">06/2020 - 01/2021</p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Worked with individuals looking to tokenize their projects,
                    deployed their erc20 token, verified the tokens and gave
                    quality advice with regards to current crypto trends.
                  </li>
                  <li className="pt-2">
                    Helped to fork and implement smart contracts for projects
                    looking to add them into their eco-system
                  </li>
                  <li className="pt-2">
                    Developed landing pages, token sale pages etc for new
                    projects about to launch.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};
