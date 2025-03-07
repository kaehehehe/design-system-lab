/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Colors } from "../../constants/colors";
import { DialogHeader } from "./DialogHeader";
import { DialogFooter } from "./DialogFooter";
import { DialogBody } from "./DialogBody";

type DialogProps = {
  children: ReactNode;
  open: boolean;
  customStyle?: SerializedStyles;
};

export function Dialog({ open, children, customStyle }: DialogProps) {
  if (!open) return null;

  return createPortal(
    <>
      <div css={DialogOverlayStyle} />
      <div css={[DialogStyle, customStyle]}>{children}</div>
    </>,
    document.body
  );
}

Dialog.DialogHeader = DialogHeader;
Dialog.DialogBody = DialogBody;
Dialog.DialogFooter = DialogFooter;

const DialogOverlayStyle = css`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DialogStyle = css`
  z-index: 1001;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background-color: ${Colors.basic.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;
