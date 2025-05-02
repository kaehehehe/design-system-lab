import type { Meta, StoryObj } from "@storybook/react";
import { Flexbox } from "../../components/layouts/Flexbox";
import { Bell } from "lucide-react";
import { Button } from "./Button";

const meta = {
  title: "Components/button/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = (args: any) => {
  return (
    <Flexbox flexDirection="column" gap={10}>
      <Flexbox gap={10}>
        <Button label="Primary" size="small" onClick={() => {}} />
        <Button
          label="Primary"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          label="Primary"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button disabled label="Primary" size="small" onClick={() => {}} />
        <Button
          disabled
          label="Primary"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          disabled
          label="Primary"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button label="Primary" onClick={() => {}} />
        <Button
          label="Primary"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          label="Primary"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button disabled label="Primary" onClick={() => {}} />
        <Button
          disabled
          label="Primary"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          disabled
          label="Primary"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button label="Primary" size="large" onClick={() => {}} />
        <Button
          label="Primary"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          label="Primary"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button disabled label="Primary" size="large" onClick={() => {}} />
        <Button
          disabled
          label="Primary"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          disabled
          label="Primary"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button
          variant="secondary"
          label="Secondary"
          size="small"
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          label="Secondary"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          label="Secondary"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button
          variant="secondary"
          disabled
          label="Secondary"
          size="small"
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          disabled
          label="Secondary"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          disabled
          label="Secondary"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button variant="secondary" label="Secondary" onClick={() => {}} />
        <Button
          variant="secondary"
          label="Secondary"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          label="Secondary"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button
          variant="secondary"
          disabled
          label="Secondary"
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          disabled
          label="Secondary"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          disabled
          label="Secondary"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button
          variant="secondary"
          label="Secondary"
          size="large"
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          label="Secondary"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          label="Secondary"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button
          variant="secondary"
          disabled
          label="Secondary"
          size="large"
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          disabled
          label="Secondary"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          disabled
          label="Secondary"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button
          variant="success"
          label="Success"
          size="small"
          onClick={() => {}}
        />
        <Button
          variant="success"
          label="Success"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="success"
          label="Success"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button
          variant="success"
          disabled
          label="Success"
          size="small"
          onClick={() => {}}
        />
        <Button
          variant="success"
          disabled
          label="Success"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="success"
          disabled
          label="Success"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button variant="success" label="Success" onClick={() => {}} />
        <Button
          variant="success"
          label="Success"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="success"
          label="Success"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button variant="success" disabled label="Success" onClick={() => {}} />
        <Button
          variant="success"
          disabled
          label="Success"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="success"
          disabled
          label="Success"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button
          variant="success"
          label="Success"
          size="large"
          onClick={() => {}}
        />
        <Button
          variant="success"
          label="Success"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="success"
          label="Success"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button
          variant="success"
          disabled
          label="Success"
          size="large"
          onClick={() => {}}
        />
        <Button
          variant="success"
          disabled
          label="Success"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="success"
          disabled
          label="Success"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button
          variant="warning"
          label="Warning"
          size="small"
          onClick={() => {}}
        />
        <Button
          variant="warning"
          label="Warning"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="warning"
          label="Warning"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button
          variant="warning"
          disabled
          label="Warning"
          size="small"
          onClick={() => {}}
        />
        <Button
          variant="warning"
          disabled
          label="Warning"
          size="small"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="warning"
          disabled
          label="Warning"
          size="small"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button variant="warning" label="Warning" onClick={() => {}} />
        <Button
          variant="warning"
          label="Warning"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="warning"
          label="Warning"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button variant="warning" disabled label="Warning" onClick={() => {}} />
        <Button
          variant="warning"
          disabled
          label="Warning"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="warning"
          disabled
          label="Warning"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />
      </Flexbox>

      <Flexbox gap={10}>
        <Button
          variant="warning"
          label="Warning"
          size="large"
          onClick={() => {}}
        />
        <Button
          variant="warning"
          label="Warning"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="warning"
          label="Warning"
          size="large"
          endIcon={<Bell size={16} />}
          onClick={() => {}}
        />

        <Button
          variant="warning"
          disabled
          label="Warning"
          size="large"
          onClick={() => {}}
        />
        <Button
          variant="warning"
          disabled
          label="Warning"
          size="large"
          startIcon={<Bell size={16} />}
          onClick={() => {}}
        />
        <Button
          variant="warning"
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
