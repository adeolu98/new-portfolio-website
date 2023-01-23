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
      className={`${className} border rounded-3xl flex flex-col hover:shadow-lg hover:bg-slate-200 justify-left px-10 py-12 ${cardOpacity}`}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      {children}
    </div>
  );
};
