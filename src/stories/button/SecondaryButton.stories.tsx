import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from "./Button";
import { Flexbox } from "../../components/layouts/Flexbox";
import { Bell } from "lucide-react";

const meta = {
  title: "Components/button/SecondaryButton",
  component: SecondaryButton,
} satisfies Meta<typeof SecondaryButton>;

export default meta;

type Story = StoryObj<typeof SecondaryButton>;

export const Playground: Story = (args: any) => {
  return (
    <Flexbox flexDirection="column" gap={10}>
      <Flexbox gap={10}>
        <SecondaryButton label="Secondary" size="small" onClick={() => {}} />
        <SecondaryButton
          label="Secondary"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SecondaryButton
          label="Secondary"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <SecondaryButton
          disabled
          label="Secondary"
          size="small"
          onClick={() => {}}
        />
        <SecondaryButton
          disabled
          label="Secondary"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SecondaryButton
          disabled
          label="Secondary"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <SecondaryButton label="Secondary" onClick={() => {}} />
        <SecondaryButton
          label="Secondary"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SecondaryButton
          label="Secondary"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <SecondaryButton disabled label="Secondary" onClick={() => {}} />
        <SecondaryButton
          disabled
          label="Secondary"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SecondaryButton
          disabled
          label="Secondary"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <SecondaryButton label="Secondary" size="large" onClick={() => {}} />
        <SecondaryButton
          label="Secondary"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SecondaryButton
          label="Secondary"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <SecondaryButton
          disabled
          label="Secondary"
          size="large"
          onClick={() => {}}
        />
        <SecondaryButton
          disabled
          label="Secondary"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SecondaryButton
          disabled
          label="Secondary"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>
    </Flexbox>
  );
};

Playground.args = {};
