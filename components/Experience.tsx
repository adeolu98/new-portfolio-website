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
                cardOpacity={cardOneOpacity}
                onMouseLeave={() => handleOpacityCardTwo("reset")}
                onMouseOver={() => handleOpacityCardTwo("reduce")}
              >
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                </ul>
              </ExperienceCard>
              <ExperienceCard
                cardOpacity={cardTwoOpacity}
                onMouseLeave={() => handleOpacityCardOne("reset")}
                onMouseOver={() => handleOpacityCardOne("reduce")}
              >
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col w-full md:flex-row gap-8 p-10">
              <ExperienceCard
                cardOpacity={cardOneOpacity}
                onMouseLeave={() => handleOpacityCardTwo("reset")}
                onMouseOver={() => handleOpacityCardTwo("reduce")}
              >
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                </ul>
              </ExperienceCard>
              <ExperienceCard
                cardOpacity={cardTwoOpacity}
                onMouseLeave={() => handleOpacityCardOne("reset")}
                onMouseOver={() => handleOpacityCardOne("reduce")}
              >
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col w-full md:flex-row gap-8 p-10">
              <ExperienceCard
                cardOpacity={cardOneOpacity}
                onMouseLeave={() => handleOpacityCardTwo("reset")}
                onMouseOver={() => handleOpacityCardTwo("reduce")}
              >
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                </ul>
              </ExperienceCard>
              <ExperienceCard
                cardOpacity={cardTwoOpacity}
                onMouseLeave={() => handleOpacityCardOne("reset")}
                onMouseOver={() => handleOpacityCardOne("reduce")}
              >
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
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
          withControls
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={classes}
        >
          <Carousel.Slide>
            <div className="w-full py-10">
              <ExperienceCard>
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="w-full py-10">
              <ExperienceCard>
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="w-full py-10">
              <ExperienceCard>
                <p className="lg:text-4xl font-bold"> Job Position</p>
                <p className=" mt-2 lg:text-2xl font-bold">Company Name</p>
                <p className="mt-4 text-xs lg:text-sm">
                  DATE STARTED - PRESENT
                </p>
                <ul className="list-disc text-xs lg:text-base mt-6">
                  <li>
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
                  </li>
                  <li className="pt-2">
                    Involved in the developement of decentralized webapps for
                    users of autonomy protocol.
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
