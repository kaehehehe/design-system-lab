import type { Meta, StoryObj } from "@storybook/react";

import { NoneFooterDialog } from "./NoneFooterDialog";
import { useDialog } from "../useDialog";
import { Flexbox } from "../../../components/layouts/Flexbox";
import { PrimaryButton } from "../../button";

const meta = {
  title: "Components/dialog/NonFooterDialog",
  component: NoneFooterDialog,
} satisfies Meta<typeof NoneFooterDialog>;

export default meta;

type Story = StoryObj<typeof NoneFooterDialog>;

export const Playground: Story = (args: any) => {
  const { open, onOpen, onClose } = useDialog();

  return (
    <Flexbox flexDirection="column" gap={15}>
      <PrimaryButton label="Click Me" onClick={onOpen} />
      <NoneFooterDialog
        title="None Footer Dialog"
        open={open}
        onClose={onClose}
      />
    </Flexbox>
  );
};

Playground.args = {};
