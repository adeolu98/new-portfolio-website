import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export interface ContactLinksProps {
  onClick?: () => void;
  className?: string;
}

export const ContactLinks: FunctionComponent<ContactLinksProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <div className={`${className} flex flex-row justify-between`}>
      <div className="flex flex-row gap-4">
        <FontAwesomeIcon
          size="lg"
          icon={faLinkedin}
          className={
            "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          }
          onClick={onClick}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          size="lg"
          icon={faDiscord}
          className={
            "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          }
          onClick={onClick}
        ></FontAwesomeIcon>
      </div>
      <div
        className="flex flex-row gap-4 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        onClick={onClick}
      >
        <FontAwesomeIcon
          size="lg"
          icon={faEnvelope}
        ></FontAwesomeIcon>
        <p className="">Send a mail</p>
      </div>
    </div>
  );
};
