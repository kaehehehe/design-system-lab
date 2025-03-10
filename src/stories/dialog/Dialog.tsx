/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { ReactElement } from "react";
import { createPortal } from "react-dom";
import { Colors } from "../../constants/colors";
import { DialogHeader } from "./DialogHeader";
import { DialogFooter } from "./DialogFooter";
import { DialogBody } from "./DialogBody";
import { DialogCloseButton } from "./DialogCloseButton";
import { DialogTitle } from "./DialogTitle";

export type DialogSizeType = "XS" | "S" | "M" | "L";

type DialogProps = {
  children: (
    | ReactElement<typeof DialogHeader>
    | ReactElement<typeof DialogBody>
    | ReactElement<typeof DialogFooter>
  )[];
  open: boolean;
  customStyle?: SerializedStyles;
  size?: DialogSizeType;
};

export function Dialog({
  open,
  children,
  customStyle,
  size = "S",
}: DialogProps) {
  if (!open) return null;

  return createPortal(
    <>
      <div css={DialogOverlayStyle} />
      <div css={[DialogStyle, DialogSizeStyle[size], customStyle]}>
        {children}
      </div>
    </>,
    document.body
  );
}

Dialog.DialogHeader = DialogHeader;
Dialog.DialogBody = DialogBody;
Dialog.DialogFooter = DialogFooter;
Dialog.DialogCloseButton = DialogCloseButton;
Dialog.DialogTitle = DialogTitle;

const DialogOverlayStyle = css({
  zIndex: 1000,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const DialogStyle = css({
  zIndex: 1001,
  position: "fixed",
  top: "50%",
  left: "50%",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
  backgroundColor: Colors.basic.white,
  boxShadow: `
    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px
  `,
});

const DialogSizeStyle = {
  XS: css({
    width: "526px",
  }),

  S: css({
    width: "773px",
  }),

  M: css({
    width: "834px",
  }),

  L: css({
    width: "1038px",
  }),
};
