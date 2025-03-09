import type { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useState } from "react";
import { TextInput } from "./TextInput";

const meta = {
  title: "Components/input/TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Playground: Story = (args: any) => {
  const [inputText, setInputText] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <TextInput value={inputText} setValue={setInputText} onChange={onChange} />
  );
};

Playground.args = {};
