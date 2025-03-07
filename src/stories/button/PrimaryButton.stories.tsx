import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from "./Button";
import { Flexbox } from "../../components/layouts/Flexbox";
import { Bell } from "lucide-react";

const meta = {
  title: "Components/button/PrimaryButton",
  component: PrimaryButton,
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Playground: Story = (args: any) => {
  return (
    <Flexbox flexDirection="column" gap={10}>
      <Flexbox gap={10}>
        <PrimaryButton label="Primary" size="small" onClick={() => {}} />
        <PrimaryButton
          label="Primary"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <PrimaryButton
          label="Primary"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <PrimaryButton
          disabled
          label="Primary"
          size="small"
          onClick={() => {}}
        />
        <PrimaryButton
          disabled
          label="Primary"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <PrimaryButton
          disabled
          label="Primary"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <PrimaryButton label="Primary" onClick={() => {}} />
        <PrimaryButton
          label="Primary"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <PrimaryButton
          label="Primary"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <PrimaryButton disabled label="Primary" onClick={() => {}} />
        <PrimaryButton
          disabled
          label="Primary"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <PrimaryButton
          disabled
          label="Primary"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <PrimaryButton label="Primary" size="large" onClick={() => {}} />
        <PrimaryButton
          label="Primary"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <PrimaryButton
          label="Primary"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <PrimaryButton
          disabled
          label="Primary"
          size="large"
          onClick={() => {}}
        />
        <PrimaryButton
          disabled
          label="Primary"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <PrimaryButton
          disabled
          label="Primary"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>
    </Flexbox>
  );
};

Playground.args = {};
