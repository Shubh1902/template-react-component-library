import React from "react";
import "./Input.css";
import TextField from "@mui/material/TextField";

interface Props {
  label: string;
  size?: "small" | "medium";
}
const CustomInput = ({ size = "medium", label }: Props) => {
  return (
    <TextField label={label} size={size}>
    </TextField>
  );
};

export default CustomInput;
