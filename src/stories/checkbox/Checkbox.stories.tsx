import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Flexbox } from "../../components/layouts/Flexbox";
import { useSwitch } from "../switch/useSwitch";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = (args: any) => {
  const { isOn: checked, toggle } = useSwitch();

  return (
    <Flexbox flexDirection="column" gap={10}>
      <Checkbox label="Checkbox" checked={checked} onToggle={toggle} />
    </Flexbox>
  );
};

Playground.args = {};
