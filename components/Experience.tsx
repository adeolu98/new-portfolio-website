import React, { FunctionComponent } from "react";

import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ExperienceCard } from "../components/Cards/ExperienceCard";

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
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const { classes } = useStyles();

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
      <div className="w-full h-full hidden md:block">
        <Carousel
          sx={{
            width: "100%",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "40px",
            paddingBottom: "40px",
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
            <div className="flex flex-col w-full md:flex-row gap-8 p-10">
              <ExperienceCard
                className="w-1/2"
                cardOpacity={cardOneOpacity}
                onMouseLeave={() => handleOpacityCardTwo("reset")}
                onMouseOver={() => handleOpacityCardTwo("reduce")}
              >
                <p className="lg:text-4xl font-bold">
                  Full stack Blockchain Developer
                </p>
                <p className=" mt-2 lg:text-2xl font-bold">Autonomy Network</p>
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
              <ExperienceCard
                className="w-1/2"
                cardOpacity={cardTwoOpacity}
                onMouseLeave={() => handleOpacityCardOne("reset")}
                onMouseOver={() => handleOpacityCardOne("reduce")}
              >
                <p className="lg:text-4xl font-bold">
                  Full stack Blockchain Developer
                </p>
                <p className=" mt-2 lg:text-2xl font-bold">The Well</p>
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
                    Development of smart contracts on L2's and other Ethereum
                    compatible blockchains to minimize gas costs for users.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col w-full md:flex-row gap-8 p-10">
              <ExperienceCard
                className="w-1/2"
                cardOpacity={cardOneOpacity}
                onMouseLeave={() => handleOpacityCardTwo("reset")}
                onMouseOver={() => handleOpacityCardTwo("reduce")}
              >
                <p className="lg:text-4xl font-bold"> Blockchain Developer</p>
                <p className=" mt-2 lg:text-2xl font-bold">Freelance</p>
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
              <ExperienceCard
                className="w-1/2"
                cardOpacity={cardTwoOpacity}
                onMouseLeave={() => handleOpacityCardOne("reset")}
                onMouseOver={() => handleOpacityCardOne("reduce")}
              >
                <p className="lg:text-4xl font-bold"> Graduate Intern</p>
                <p className=" mt-2 lg:text-2xl font-bold">JEF TECH LIMITED</p>
                <p className="mt-4 text-xs lg:text-sm">08/2019 - 05/2020</p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    I and the inspection team delivered quality evaluation
                    reports to clients in due time.
                  </li>
                  <li className="pt-2">
                    Received feedback from various clients on jobs done and
                    communicated them to necessary individuals promptly for
                    review.
                  </li>
                  <li className="pt-2">
                    Took part in the inspection of drill pipes, drill collars,
                    subs and high-pressure hoses to determine if they are still
                    fit for use on oil rigs.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="block md:hidden w-full h-full">
        <Carousel
          sx={{
            width: "100%",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
          mx="auto"
          withIndicators
          withControls={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={classes}
        >
          <Carousel.Slide>
            <div className="w-full px-3 py-10">
              <ExperienceCard>
                <p className="text-lg font-bold">
                  Full stack Blockchain Developer
                </p>
                <p className=" mt-2 font-bold">Autonomy Network</p>
                <p className="mt-4 text-xs">09/2021 - 12/2022</p>
                <ul className="list-disc text-xs mt-6">
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
            <div className="w-full px-3 py-10">
              <ExperienceCard>
                <p className="text-lg font-bold">
                  Full stack Blockchain Developer
                </p>
                <p className=" mt-2 font-bold">The Well</p>
                <p className="mt-4 text-xs">01/2021 - 09/2021</p>
                <ul className="list-disc text-xs mt-6">
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
                    Development of smart contracts on L2's and other Ethereum
                    compatible blockchains to minimize gas costs for users.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="w-full px-3 py-10">
              <ExperienceCard>
                <p className="text-lg font-bold"> Blockchain Developer</p>
                <p className=" mt-2 font-bold">Freelance</p>
                <p className="mt-4 text-xs">06/2020 - 01/2021</p>
                <ul className="list-disc text-xs mt-6">
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
          <Carousel.Slide>
            <div className="w-full px-3 py-10">
              <ExperienceCard>
              <p className="text-lg font-bold"> Graduate Intern</p>
                <p className=" mt-2 font-bold">JEF TECH LIMITED</p>
                <p className="mt-4 text-xs">08/2019 - 05/2020</p>
                <ul className="list-disc text-xs mt-6">
                  <li>
                    I and the inspection team delivered quality evaluation
                    reports to clients in due time.
                  </li>
                  <li className="pt-2">
                    Received feedback from various clients on jobs done and
                    communicated them to necessary individuals promptly for
                    review.
                  </li>
                  <li className="pt-2">
                    Took part in the inspection of drill pipes, drill collars,
                    subs and high-pressure hoses to determine if they are still
                    fit for use on oil rigs.
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
