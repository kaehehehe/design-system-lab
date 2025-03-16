import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta = {
  title: "Components/DropdownMenu",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof Popover>;

export const Playground: Story = (args: any) => {
  const menu = ["Apple", "Banana", "Orange", "Pineapple"];
  return (
    <>
      <Popover>
        {menu.map((item) => (
          <Popover.MenuItem key={item}>
            <div>{item}</div>
          </Popover.MenuItem>
        ))}
      </Popover>
    </>
  );
};

Playground.args = {};
