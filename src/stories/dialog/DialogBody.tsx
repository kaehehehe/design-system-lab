/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

type DialogBodyProps = {
  children: ReactNode;
};

export function DialogBody({ children }: DialogBodyProps) {
  return <div css={DialogBodyStyle}>{children}</div>;
}

const DialogBodyStyle = css`
  display: flex;
  padding: 16px 24px;
`;
