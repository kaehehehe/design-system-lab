import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";
import { ChevronRight } from "lucide-react";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Playground: Story = (args: any) => {
  const items = ["Page1", "Page2", "Page3", "Page4", "Page5"];

  return (
    <Breadcrumb separator={<ChevronRight size={16} />}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </Breadcrumb>
  );
};

Playground.args = {};
