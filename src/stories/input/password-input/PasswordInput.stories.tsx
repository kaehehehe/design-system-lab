import type { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useState } from "react";
import { PasswordInput } from "./PasswordInput";

const meta = {
  title: "Components/input/PasswordInput",
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Playground: Story = (args: any) => {
  const [inputText, setInputText] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <PasswordInput
      value={inputText}
      setValue={setInputText}
      onChange={onChange}
    />
  );
};

Playground.args = {};
