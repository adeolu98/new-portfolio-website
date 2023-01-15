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

export default function Home() {
  const [cardOneOpacity, setCardOneOpacity] = useState("");
  const [cardTwoOpacity, setCardTwoOpacity] = useState("");
  const [showProjectInfo, setShowProjectInfo] = useState("");
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

  const handleDisplayProjectInfo = (action: string) => {
    action === "show"
      ? setShowProjectInfo("visible")
      : setShowProjectInfo("invisible");
  };

  return (
    <div className="bg-slate-100 pt-10 lg:pt-10 w-screen min-h-screen">
      <div className="px-8 pb-8 lg:pb-0 lg:px-32">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <FontAwesomeIcon
              style={{ width: "20px", height: "30px" }}
              icon={faLinkedin}
              className={
                "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              }
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              style={{ width: "20px", height: "30px" }}
              icon={faDiscord}
              className={
                "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              }
            ></FontAwesomeIcon>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon
              style={{ width: "20px", height: "30px" }}
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <p className="">Send a mail</p>
          </div>
        </div>
        <div className="flex justify-center h-screen items-center">
          <motion.div
            transition={{
              duration: 8,
              ease: "circInOut",
              repeat: Infinity,
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.3 }}
            className="w-72 -mt-44 lg:-mt-60 h-72 absolute lg:relative lg:w-[900px] lg:h-[900px] p-5 lg:p-20 rounded-full border border-slate-300"
          >
            <div className="w-full h-full p-5 lg:p-20 rounded-full  border border-slate-300">
              <div className="w-full h-full p-5 lg:p-20 rounded-full  border border-slate-300">
                <div className="w-full h-full p-5 lg:p-32 rounded-full border border-slate-300">
                  <div className="w-full h-full rounded-full">
                    <img
                      alt="image"
                      src="/deolu.jpg"
                      className="w-full object-cover h-full rounded-full"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute flex flex-col gap-8 items-center mt-56 lg:mt-32">
            <div className="text-center">
              <p className="text-xl tracking-[.24em] ">SOFTWARE ENGINEER</p>
              <p className="mt-2 font-black text-4xl">ADEOLU ADEWOLE</p>
            </div>

            <div className="flex flex-row gap-4 lg:gap-8 text-xs md:text-base items-center justify-between h-12">
              <button className="px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black">
                <p>EXPERIENCE</p>
              </button>
              <button className="px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200  hover:border-2 hover:border-black focus:border-2 focus:border-black">
                <p> SKILLS</p>
              </button>
              <button className="px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black">
                <p>PROJECTS</p>
              </button>
              <button className="px-2 lg:px-6 rounded-3xl py-2 hover:bg-slate-200 hover:border-2 hover:border-black focus:border-2 focus:border-black">
                <p>ABOUT</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full px-8 lg:px-32 flex flex-col items-center">
        <p className="absolute text-4xl mt-6 text-center font-bold">
          Work Experience
        </p>
        <div className="w-full h-full hidden md:block mt-20">
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
                <div
                  className={`border rounded-3xl flex flex-col hover:shadow-xl hover:bg-slate-200 justify-left px-10 py-12 ${cardOneOpacity}`}
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
                </div>
                <div
                  className={`border rounded-3xl hover:bg-slate-200 flex flex-col justify-left px-10 py-12 hover:shadow-xl  ${cardTwoOpacity}`}
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
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="flex flex-col w-full md:flex-row gap-8 p-10">
                <div
                  className={`border rounded-3xl flex flex-col hover:shadow-xl hover:bg-slate-200 justify-left px-10 py-12 ${cardOneOpacity}`}
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
                </div>
                <div
                  className={`border rounded-3xl flex flex-col justify-left px-10 py-12 hover:shadow-xl hover:bg-slate-200  ${cardTwoOpacity}`}
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
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="flex flex-col w-full md:flex-row gap-8 p-10">
                <div
                  className={`border rounded-3xl flex flex-col hover:shadow-xl hover:bg-slate-200 justify-left px-10 py-12 ${cardOneOpacity}`}
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
                </div>
                <div
                  className={`border rounded-3xl flex flex-col justify-left px-10 py-12 hover:shadow-xl hover:bg-slate-200 ${cardTwoOpacity}`}
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
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
        <div className="block md:hidden w-full h-full mt-20">
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
              <div className="w-full gap-8 p-10">
                <div
                  className={`border rounded-3xl flex flex-col justify-left hover:bg-slate-200 px-10 py-12 shadow-xl`}
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
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="w-full gap-8 p-10">
                <div
                  className={`border rounded-3xl flex flex-col hover:bg-slate-200 justify-left px-10 py-12 shadow-xl`}
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
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="w-full gap-8 p-10">
                <div
                  className={`border rounded-3xl flex flex-col justify-left px-10 py-12 hover:bg-slate-200 shadow-xl`}
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
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>
      <div className="h-screen w-full px-8 lg:px-32 flex flex-col justify-center">
        <p className="text-4xl text-center  font-bold">Skills</p>
        <div className="mt-20 grid gap-4 grid-cols-3  md:grid-cols-6">
          <div className="flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className="pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
          <div className="  flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border">
            <FontAwesomeIcon
              style={{ width: "100%", height: "100%" }}
              icon={faReact}
            ></FontAwesomeIcon>
            <p className=" pt-4 text-xl">React</p>
          </div>
        </div>
      </div>

      <div className="w-full gap-10 h-screen flex w-full flex-col justify-center px-8 lg:px-32 lg:py-32">
        <p className="text-center text-4xl font-bold">Projects</p>
        <Carousel
          className="hidden md:block"
          sx={{
            width: "100%",
            paddingLeft: "60px",
            paddingRight: "60px",
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
            <div className="mt-16 flex flex-col w-full md:flex-row gap-8 p-10">
              <div
                className={`border rounded-3xl flex flex-col justify-left  bg-black`}
              >
                <img
                  src={"/project1.jpg"}
                  className="w-full h-full rounded-3xl hover:opacity-30"
                  onMouseOver={() => handleDisplayProjectInfo("show")}
                  onMouseLeave={() => handleDisplayProjectInfo("hide")}
                  alt={"project"}
                ></img>
                <div
                  className={`absolute text-white bottom-16 px-10 ${showProjectInfo}`}
                >
                  <p>Project Title</p>
                  <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
              </div>
              <div
                className={`border rounded-3xl flex flex-col justify-left bg-black`}
                onMouseOver={() => handleDisplayProjectInfo("show")}
                onMouseLeave={() => handleDisplayProjectInfo("hide")}
              >
                <img
                  src={"/project1.jpg"}
                  className="w-full h-full rounded-3xl hover:opacity-30"
                  alt={"project"}
                ></img>
                <div
                  className={`absolute text-white bottom-16 px-10 ${showProjectInfo}`}
                >
                  <p>Project Title</p>
                  <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="mt-16 flex flex-col w-full md:flex-row gap-8 p-10">
              <div
                className={`border rounded-3xl flex flex-col justify-left  bg-black`}
              >
                <img
                  src={"/project1.jpg"}
                  className="w-full h-full rounded-3xl hover:opacity-30"
                  onMouseOver={() => handleDisplayProjectInfo("show")}
                  onMouseLeave={() => handleDisplayProjectInfo("hide")}
                  alt={"project"}
                ></img>
                <div
                  className={`absolute text-white bottom-16 px-10 ${showProjectInfo}`}
                >
                  <p>Project Title</p>
                  <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
              </div>
              <div
                className={`border rounded-3xl flex flex-col justify-left bg-black`}
                onMouseOver={() => handleDisplayProjectInfo("show")}
                onMouseLeave={() => handleDisplayProjectInfo("hide")}
              >
                <img
                  src={"/project1.jpg"}
                  className="w-full h-full rounded-3xl hover:opacity-30"
                  alt={"project"}
                ></img>
                <div
                  className={`absolute text-white bottom-16 px-10 ${showProjectInfo}`}
                >
                  <p>Project Title</p>
                  <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
        <Carousel
          className="block md:hidden"
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
            <div
              className={`border rounded-3xl flex flex-col justify-center bg-black`}
              onMouseOver={() => handleDisplayProjectInfo("show")}
              onMouseLeave={() => handleDisplayProjectInfo("hide")}
            >
              <img
                src={"/project1.jpg"}
                className="w-full h-96 object-contain rounded-3xl hover:opacity-30"
                alt={"project"}
              ></img>
              <div
                className={`absolute text-white bottom-6 px-6  ${showProjectInfo}`}
              >
                <p>Project Title</p>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div
              className={`border rounded-3xl flex flex-col justify-center bg-black`}
              onMouseOver={() => handleDisplayProjectInfo("show")}
              onMouseLeave={() => handleDisplayProjectInfo("hide")}
            >
              <img
                src={"/project1.jpg"}
                className="w-full h-96 object-contain rounded-3xl hover:opacity-30"
                alt={"project"}
              ></img>
              <div
                className={`absolute text-white bottom-6 px-6  ${showProjectInfo}`}
              >
                <p>Project Title</p>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="bg-slate-200 h-screen p-8 py-8 lg:p-0 w-full flex gap-10 lg:gap-44 flex-col lg:flex-row items-center justify-center">
        <img
          className=" h-96 lg:h-[600px] border-black rounded-xl"
          src={"/deolu-2.jpg"}
        ></img>
        <div className=" lg:w-2/6 flex flex-col gap-4 justify-center lg:justify-left lg:gap-8 ">
          <p className="text-4xl font-bold text-center lg:text-left">About </p>
          <p className="text-sm text-center md:px-16 lg:px-0 lg:text-left">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum.
          </p>
        </div>
      </div>

      <div className="py-3">
        <p className="text-center"> copyright &copy; 2022 ADEOLUADEWOLE</p>
      </div>
    </div>
  );
}
