import { X } from "lucide-react";
import * as styles from "./Dialog.css";

type DialogCloseButtonProps = {
  onClose: () => void;
};

export function DialogCloseButton({ onClose }: DialogCloseButtonProps) {
  return <X onClick={onClose} className={styles.closeButton} size={20} />;
}
