import type { Meta, StoryObj } from "@storybook/react";
import { useDialog } from "../useDialog";
import { PrimaryButton } from "../../button";
import { AlertDialog } from "./AlertDialog";
import { Flexbox } from "../../../components/layouts/Flexbox";

const meta = {
  title: "Components/dialog/AlertDialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Playground: Story = (args: any) => {
  const {
    open: openConfirmDialog,
    onOpen: onOpenConfirmDialog,
    onClose: onCloseCOnfirmDialog,
  } = useDialog();

  const {
    open: openWarningDialog,
    onOpen: onOpenWarningDialog,
    onClose: onCloseWarningDialog,
  } = useDialog();

  return (
    <Flexbox flexDirection="column" gap={15}>
      <PrimaryButton label="Click Me" onClick={onOpenConfirmDialog} />
      <AlertDialog
        open={openConfirmDialog}
        title="Confirm Dialog"
        onClose={onCloseCOnfirmDialog}
        onConfirm={onCloseCOnfirmDialog}
        variant="confirm"
      />

      <PrimaryButton label="Click Me" onClick={onOpenWarningDialog} />
      <AlertDialog
        open={openWarningDialog}
        title="Warning Dialog"
        onClose={onCloseWarningDialog}
        onConfirm={onCloseWarningDialog}
        variant="warning"
      />
    </Flexbox>
  );
};

Playground.args = {};
