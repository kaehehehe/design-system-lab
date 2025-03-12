/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactElement } from "react";
import { BaseInput } from "../base-input/BaseInput";

type InputContainerProps = {
  children: (ReactElement<typeof BaseInput> | null)[];
};

export function InputContainer({ children }: InputContainerProps) {
  return <div css={InputContainerStyle}>{children}</div>;
}

const InputContainerStyle = css({
  display: "flex",
  flexDirection: "column",
});
