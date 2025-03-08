import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import { X } from "lucide-react";
import { Flexbox } from "../../../components/layouts/Flexbox";

const meta = {
  title: "Components/button/IconButton",
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Playground: Story = (args: any) => {
  return (
    <Flexbox flexDirection="column" gap={10}>
      <IconButton icon={<X />} />
      <IconButton icon={<X />} size="medium" />
      <IconButton icon={<X />} size="large" />
      <IconButton icon={<X />} size="large" disabled />
    </Flexbox>
  );
};

Playground.args = {};
