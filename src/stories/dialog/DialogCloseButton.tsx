/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { X } from "lucide-react";

type DialogCloseButtonProps = {
  onClose: () => void;
};

export function DialogCloseButton({ onClose }: DialogCloseButtonProps) {
  return <X onClick={onClose} css={DialogCloseButtonStyle} size={20} />;
}

const DialogCloseButtonStyle = css({
  cursor: "pointer",
});
