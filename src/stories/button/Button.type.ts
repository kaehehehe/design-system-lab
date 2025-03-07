import { ButtonHTMLAttributes } from "react";
import { Size } from "../../types/size";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  size?: Size;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};
