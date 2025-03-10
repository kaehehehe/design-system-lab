/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Flexbox } from "../../../components/layouts/Flexbox";
import { Dialog } from "../Dialog";

type NoneFooterDialogProps = {
  open: boolean;
  title: string;
  onClose: () => void;
};

export function NoneFooterDialog({
  open,
  title,
  onClose,
}: NoneFooterDialogProps) {
  return (
    <Flexbox flexDirection="column" gap={10}>
      <Dialog open={open} size="XS">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle title={title} />
          <Dialog.DialogCloseButton onClose={onClose} />
        </Dialog.DialogHeader>

        <Dialog.DialogBody>
          <p css={NoneFooterDialogStyle.content}>
            Children will be located here
          </p>
        </Dialog.DialogBody>
      </Dialog>
    </Flexbox>
  );
}

const NoneFooterDialogStyle = {
  container: css({
    width: "744px",
  }),

  content: css({
    height: "72px",
    padding: "16px 24px",
  }),
};
