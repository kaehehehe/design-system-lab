/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

type InputContainerProps = {
  children: ReactNode;
};

export function InputContainer({ children }: InputContainerProps) {
  return <div css={InputContainerStyle}>{children}</div>;
}

const InputContainerStyle = css({
  display: "flex",
  flexDirection: "column",
});
