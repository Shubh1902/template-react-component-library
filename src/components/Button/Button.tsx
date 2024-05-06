import React from "react";
import "./Button.css";
interface Props {
  label: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}
const Button = ({ size = "medium", variant = "primary", ...props }: Props) => {
  return (
    <button className={[`size-${size}`, `button-${variant}`].join(" ")}>
      {props.label}
    </button>
  );
};

export default Button;
