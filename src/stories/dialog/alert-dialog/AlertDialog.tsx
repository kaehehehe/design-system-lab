import { Dialog } from "../Dialog";
import { Flexbox } from "../../../components/layouts/Flexbox";
import { Button } from "../../button/Button";
import * as styles from "./AlertDialog.css";

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
          <p className={styles.content}>Children will be located here</p>
        </Dialog.DialogBody>

        <Dialog.DialogFooter customStyle={styles.footer}>
          <Button variant="secondary" label="Cancel" onClick={onClose} />
          {variant === "confirm" ? (
            <Button variant="primary" label="OK" onClick={onConfirm} />
          ) : (
            <Button variant="warning" label="OK" onClick={onConfirm} />
          )}
        </Dialog.DialogFooter>
      </Dialog>
    </Flexbox>
  );
}
