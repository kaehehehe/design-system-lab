import { useState } from "react";

export function useDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return {
    open: isOpen,
    onOpen,
    onClose,
  };
}
