import { Flexbox } from "../../../components/layouts/Flexbox";
import { Dialog } from "../Dialog";
import * as styles from "./NonFooterDialog.css";

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
          <p className={styles.content}>Children will be located here</p>
        </Dialog.DialogBody>
      </Dialog>
    </Flexbox>
  );
}
