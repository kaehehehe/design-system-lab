import { ReactElement } from "react";
import { createPortal } from "react-dom";
import { DialogHeader } from "./DialogHeader";
import { DialogFooter } from "./DialogFooter";
import { DialogBody } from "./DialogBody";
import { DialogCloseButton } from "./DialogCloseButton";
import { DialogTitle } from "./DialogTitle";
import * as styles from "./Dialog.css";
import { clsx } from "clsx";

export type DialogSizeType = "XS" | "S" | "M" | "L";

type DialogProps = {
  children: ReactElement<typeof Dialog>[];
  open: boolean;
  customStyle?: string;
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
      <div className={styles.overlay} />
      <div className={clsx(styles.dialogRecipe({ size }), customStyle)}>
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
