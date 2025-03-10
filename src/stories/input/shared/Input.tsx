/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { InputHTMLAttributes } from "react";
import { Colors } from "../../../constants/colors";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export function Input({ ...props }: InputProps) {
  return <input {...props} css={InputStyle} />;
}

const InputStyle = css({
  border: "none",
  outline: "none",
  width: "100%",
  backgroundColor: Colors.basic.white,
});
