import React from "react";

const ButtonSecondary = ({
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
      className="relative inline-flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden border-2 border-white bg-transparent p-5 text-base font-bold text-white outline-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black md:mt-10 md:w-60"
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default ButtonSecondary;
