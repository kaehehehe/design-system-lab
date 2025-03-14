/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactElement } from "react";

type DialogBodyProps = {
  children: ReactElement;
};

export function DialogBody({ children }: DialogBodyProps) {
  return <div css={DialogBodyStyle}>{children}</div>;
}

const DialogBodyStyle = css({
  display: "flex",
  padding: "16px 24px",
});
