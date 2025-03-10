/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";
import { Colors } from "../../constants/colors";

type DialogHeaderProps = {
  children: ReactNode;
  customStyle?: SerializedStyles;
};

export function DialogHeader({ customStyle, children }: DialogHeaderProps) {
  return <header css={[DialogHeaderStyle, customStyle]}>{children}</header>;
}

const DialogHeaderStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  borderBottom: `1px solid ${Colors.light[200]}`,
});
