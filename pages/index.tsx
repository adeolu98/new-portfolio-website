import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMailReply } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-slate-100 px-32 py-20 w-screen h-screen">
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
      <div className="flex justify-center items-center -mt-60">
        <motion.div
          transition={{
            duration: 8,
            ease: "circInOut",
            repeat: Infinity,
          }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.3 }}
          className="w-[900px] h-[900px] p-20 rounded-full border border-slate-300"
        >
          <div className="w-full h-full p-20 rounded-full border border-slate-300">
            <div className="w-full h-full p-20 rounded-full border border-slate-300">
              <div className="w-full h-full p-32 rounded-full border border-slate-300">
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
        
      <div className="absolute flex flex-col items-center bottom-44">
        <div className="text-center">
          <p className="text-xl tracking-[.24em] ">SOFTWARE ENGINEER</p>
          <p className="mt-2 font-black text-4xl">ADEOLU ADEWOLE</p>
        </div>
        <div className="mt-8 flex flex-row  gap-8 items-center justify-center">
          <button className="px-6 rounded-3xl py-2 border-2 border-black">
            <p>EXPERIENCE</p>
          </button>
          <button>
            <p> SKILLS</p>
          </button>
          <button>
            <p>PROJECTS</p>
          </button>
          <button>
            <p>ABOUT</p>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
