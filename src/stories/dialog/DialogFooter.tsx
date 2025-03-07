/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";
import { Colors } from "../../constants/colors";

type DialogFooterProps = {
  children: ReactNode;
  customStyle?: SerializedStyles;
};

export function DialogFooter({ customStyle, children }: DialogFooterProps) {
  return <footer css={[DialogFooterStyle, customStyle]}>{children}</footer>;
}

const DialogFooterStyle = css`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 16px 24px;
  border-top: 1px solid ${Colors.light[200]};
`;
