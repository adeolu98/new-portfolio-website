import React, { FunctionComponent, ReactNode } from "react";

export interface ExperienceCardProps {
  onMouseLeave?: () => void;
  onMouseOver?: () => void;
  className?: string;
  cardOpacity?: string;
  children?: ReactNode;
}

export const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  onMouseOver,
  onMouseLeave,
  className = "",
  cardOpacity = "",
  children,
}) => {
  return (
    <div
      className={`${className} w-full h-full border rounded-3xl flex flex-col hover:shadow-lg hover:bg-slate-200 justify-left p-7 md:p-10 ${cardOpacity}`}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      {children}
    </div>
  );
};
