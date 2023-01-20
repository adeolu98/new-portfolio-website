import React, { FunctionComponent, ReactNode } from "react";

export interface SkillCardProps {
  className?: string;
  children?: ReactNode;
}

export const SkillCard: FunctionComponent<SkillCardProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`${className} flex flex-col pt-6 py-8 px-8 items-center opacity-70 rounded-2xl hover:shadow-xl  hover:opacity-100 hover:bg-slate-200 border`}>
      {children}
    </div>
  );
};
