import type { Meta, StoryObj } from "@storybook/react";
import { SuccessButton } from "./Button";
import { Flexbox } from "../../components/layouts/Flexbox";
import { Bell } from "lucide-react";

const meta = {
  title: "Components/button/SuccessButton",
  component: SuccessButton,
} satisfies Meta<typeof SuccessButton>;

export default meta;

type Story = StoryObj<typeof SuccessButton>;

export const Playground: Story = (args: any) => {
  return (
    <Flexbox flexDirection="column" gap={10}>
      <Flexbox gap={10}>
        <SuccessButton label="Success" size="small" onClick={() => {}} />
        <SuccessButton
          label="Success"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SuccessButton
          label="Success"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <SuccessButton
          disabled
          label="Success"
          size="small"
          onClick={() => {}}
        />
        <SuccessButton
          disabled
          label="Success"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SuccessButton
          disabled
          label="Success"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <SuccessButton label="Success" onClick={() => {}} />
        <SuccessButton
          label="Success"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SuccessButton
          label="Success"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <SuccessButton disabled label="Success" onClick={() => {}} />
        <SuccessButton
          disabled
          label="Success"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SuccessButton
          disabled
          label="Success"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <SuccessButton label="Success" size="large" onClick={() => {}} />
        <SuccessButton
          label="Success"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SuccessButton
          label="Success"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <SuccessButton
          disabled
          label="Success"
          size="large"
          onClick={() => {}}
        />
        <SuccessButton
          disabled
          label="Success"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <SuccessButton
          disabled
          label="Success"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>
    </Flexbox>
  );
};

Playground.args = {};
