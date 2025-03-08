import type { Meta, StoryObj } from "@storybook/react";

import { BasicInput } from "./BasicInput";
import { ChangeEvent, useState } from "react";

const meta = {
  title: "Components/input/BasicInput",
  component: BasicInput,
} satisfies Meta<typeof BasicInput>;

export default meta;

type Story = StoryObj<typeof BasicInput>;

export const Playground: Story = (args: any) => {
  const [inputText, setInputText] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onClear = () => {
    setInputText("");
  };

  return <BasicInput value={inputText} onChange={onChange} onClear={onClear} />;
};

Playground.args = {};
