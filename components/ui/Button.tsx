import React from "react";

const Button = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex w-full flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden border-2 border-red bg-red p-5 text-base font-bold text-white outline-none transition-all duration-300 ease-in-out hover:bg-transparent hover:text-red md:mt-10 md:w-60"
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default Button;
