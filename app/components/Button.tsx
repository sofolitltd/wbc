import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  label: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, label, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {/* icon */}
      {icon && <Image src={icon} alt={label} width={24} height={24} />}

      {/* label */}
      <label className="bold-16 whitespace-nowrap">{label}</label>
    </button>
  );
};

export default Button;
