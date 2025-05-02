import { ButtonHTMLAttributes, ReactElement } from "react";
import { Size } from "../../types/size";
import { buttonRecipe } from "./Button.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  size?: Size;
  variant?: "primary" | "secondary" | "warning" | "success";
  disabled?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

export function Button({
  label,
  size,
  variant,
  disabled = false,
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonRecipe({ size, variant })}
      disabled={disabled}
      {...rest}
    >
      {startIcon ? startIcon : null}
      <span>{label}</span>
      {endIcon ? endIcon : null}
    </button>
  );
}
