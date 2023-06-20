import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export interface ContactLinksProps {
  onClick?: () => void;
  className?: string;
}

export const ContactLinks: FunctionComponent<ContactLinksProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`${className} flex flex-col gap-6 xxs:flex-row justify-between`}
    >
      <div className="flex flex-row gap-4">
        <a
          href="https://www.linkedin.com/in/adeolu-adewole-5552a2163/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            size="lg"
            icon={faLinkedin}
            className={
              "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={onClick}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://github.com/adeolu98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            size="lg"
            icon={faGithub}
            className={
              "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={onClick}
          ></FontAwesomeIcon>
        </a>
      </div>
      <a
        href="mailto: adeoluadewole98@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="flex flex-row gap-4 items-start xs:items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={onClick}
        >
          <FontAwesomeIcon size="lg" icon={faEnvelope}></FontAwesomeIcon>
          <p className="text-xs xxs:text-base">Send a mail</p>
        </div>
      </a>
    </div>
  );
};
