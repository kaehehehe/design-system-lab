/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dialog } from "../Dialog";
import { Flexbox } from "../../../components/layouts/Flexbox";
import {
  PrimaryButton,
  SecondaryButton,
  WarningButton,
} from "../../button/Button";

type AlertDialogProps = {
  open: boolean;
  title: string;
  onConfirm: () => void;
  onClose: () => void;
  variant: "confirm" | "warning";
};

export function AlertDialog({
  title,
  open,
  onConfirm,
  onClose,
  variant,
}: AlertDialogProps) {
  return (
    <Flexbox flexDirection="column" gap={10}>
      <Dialog open={open} size="XS">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle title={title} />
          <Dialog.DialogCloseButton onClose={onClose} />
        </Dialog.DialogHeader>

        <Dialog.DialogBody>
          <p css={ConfirmDialogStyle.content}>Children will be located here</p>
        </Dialog.DialogBody>

        <Dialog.DialogFooter customStyle={ConfirmDialogStyle.footer}>
          <SecondaryButton label="Cancel" onClick={onClose} />
          {variant === "confirm" ? (
            <PrimaryButton label="OK" onClick={onConfirm} />
          ) : (
            <WarningButton label="OK" onClick={onConfirm} />
          )}
        </Dialog.DialogFooter>
      </Dialog>
    </Flexbox>
  );
}

const ConfirmDialogStyle = {
  content: css({
    padding: "8px 12px",
  }),

  footer: css({
    justifyContent: "flex-end",
  }),
};
