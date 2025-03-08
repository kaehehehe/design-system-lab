import type { Meta, StoryObj } from "@storybook/react";

import { LoadingSpinner } from "./LoadingSpinner";

const meta = {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Playground: Story = (args: any) => {
  return <LoadingSpinner size={100} />;
};

Playground.args = {};
