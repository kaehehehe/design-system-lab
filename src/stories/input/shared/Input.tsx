/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { forwardRef, InputHTMLAttributes } from "react";
import { Colors } from "../../../constants/colors";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <input {...props} css={InputStyle} ref={ref} />;
  }
);

const InputStyle = css`
  border: none;
  outline: none;
  width: 100%;
  background-color: ${Colors.basic.white};
`;
