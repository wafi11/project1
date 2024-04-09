import { Icons } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  disabled,
  onClick,
  outline,
}) => {
  return (
    <button
      className="px-4 py-2 backdrop-blur-sm w-full  text-black bg-lime-300 mx-auto text-center rounded relative"
      onClick={onClick}>
      {/* <span>More Info →</span> */}
      {/* {Icon && <Icon size={24} className="absolute left-4 top-3" />} */}
      {label}
      {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" /> */}
    </button>
  );
};

export default Button;
