import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import { useRef } from "react";
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

   scale:'1.5'
  },

  indicator: {
    opacity: 10000,
    width:'20px',
    height:'20px',
    border: '1px solid #000000',

    "&[data-active]": {
      backgroundColor:'#000000',
     // backgroundColor:'#FFFFFF',
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
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  const { classes } = useStyles();
  return (
    <div className="bg-slate-100 px-8 py-10 lg:px-32 lg:py-20 w-screen min-h-screen">
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <FontAwesomeIcon
              style={{ width: "20px", height: "30px" }}
              icon={faLinkedin}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              style={{ width: "20px", height: "30px" }}
              icon={faDiscord}
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
        <div className="flex justify-center items-center mt-52 lg:-mt-60">
          <motion.div
            transition={{
              duration: 8,
              ease: "circInOut",
              repeat: Infinity,
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.3 }}
            className="w-72 h-72 absolute lg:relative lg:w-[900px] lg:h-[900px] p-5 lg:p-20 rounded-full border border-slate-300"
          >
            <div className="w-full h-full p-5 lg:p-20 rounded-full border border-slate-300">
              <div className="w-full h-full p-5 lg:p-20 rounded-full border border-slate-300">
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

          <div className="absolute flex flex-col gap-8 items-center mt-96">
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
      <div className="w-full mt-96 lg:mt-0 flex justify-center">
        <div className=" flex flex-col w-full items-center ">
          <p className=" absolute text-4xl  font-bold">Work Experience</p>
          <Carousel
            sx={{ width:'100%', padding: '60px'}}
            mx="auto"
            withIndicators
            withControls
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            classNames={classes}

          >
            <Carousel.Slide>
              <div className="mt-32 flex flex-col w-full lg:flex-row gap-8">
                <div className="  border rounded-3xl flex flex-col justify-left px-10 py-12">
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
                <div className="  border rounded-3xl flex flex-col justify-left px-10 py-12">
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
              <div className="mt-32 flex flex-col w-full lg:flex-row gap-8">
                <div className="  border rounded-3xl flex flex-col justify-left px-10 py-12">
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
                <div className="  border rounded-3xl flex flex-col justify-left px-10 py-12">
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
              <div className="mt-32 flex flex-col w-full lg:flex-row gap-8">
                <div className="  border rounded-3xl flex flex-col justify-left px-10 py-12">
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
                <div className="  border rounded-3xl flex flex-col justify-left px-10 py-12">
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
    </div>
  );
}
