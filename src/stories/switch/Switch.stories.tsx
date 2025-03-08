import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { Flexbox } from "../../components/layouts/Flexbox";
import { useSwitch } from "./useSwitch";

const meta = {
  title: "Components/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = (args: any) => {
  const { isOn: firstSwitchState, toggle: toggleFirstSwitch } = useSwitch();
  const { isOn: secondSwitchState, toggle: toggleSecondSwitch } = useSwitch();

  return (
    <Flexbox flexDirection="column" gap={10}>
      <Switch
        label="Toggle"
        isOn={firstSwitchState}
        onToggle={toggleFirstSwitch}
      />

      <Switch
        label="Toggle"
        isOn={secondSwitchState}
        onToggle={toggleSecondSwitch}
        disabled
      />
    </Flexbox>
  );
};

Playground.args = {};
