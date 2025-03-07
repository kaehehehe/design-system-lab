import type { Meta, StoryObj } from "@storybook/react";
import { WarningButton } from "./Button";
import { Bell } from "lucide-react";
import { Flexbox } from "../../components/layouts/Flexbox";

const meta = {
  title: "Components/button/WarningButton",
  component: WarningButton,
} satisfies Meta<typeof WarningButton>;

export default meta;

type Story = StoryObj<typeof WarningButton>;

export const Playground: Story = (args: any) => {
  return (
    <Flexbox flexDirection="column" gap={10}>
      <Flexbox gap={10}>
        <WarningButton label="Warning" size="small" onClick={() => {}} />
        <WarningButton
          label="Warning"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <WarningButton
          label="Warning"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <WarningButton
          disabled
          label="Warning"
          size="small"
          onClick={() => {}}
        />
        <WarningButton
          disabled
          label="Warning"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <WarningButton
          disabled
          label="Warning"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <WarningButton label="Warning" onClick={() => {}} />
        <WarningButton
          label="Warning"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <WarningButton
          label="Warning"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <WarningButton disabled label="Warning" onClick={() => {}} />
        <WarningButton
          disabled
          label="Warning"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <WarningButton
          disabled
          label="Warning"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <WarningButton label="Warning" size="large" onClick={() => {}} />
        <WarningButton
          label="Warning"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <WarningButton
          label="Warning"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <WarningButton
          disabled
          label="Warning"
          size="large"
          onClick={() => {}}
        />
        <WarningButton
          disabled
          label="Warning"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <WarningButton
          disabled
          label="Warning"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>
    </Flexbox>
  );
};

Playground.args = {};
