/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "./Filter";
import { useFilter } from "./useFilter";

const meta = {
  title: "Components/Filter",
  component: Filter,
} satisfies Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof Filter>;

export const Playground: Story = (args: any) => {
  const items = ["Filter1", "Filter2", "Filter3"];

  const { isSelected, onFilter } = useFilter();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
      `}
    >
      <Filter>
        {items.map((item, index) => (
          <Filter.RoundFillChip
            key={index}
            label={item}
            selected={isSelected(item)}
            onClick={() => onFilter(item)}
          />
        ))}
      </Filter>

      <Filter>
        {items.map((item, index) => (
          <Filter.RoundStrokeChip
            key={index}
            label={item}
            selected={isSelected(item)}
            onClick={() => onFilter(item)}
          />
        ))}
      </Filter>

      <Filter>
        {items.map((item, index) => (
          <Filter.SquareFillChip
            key={index}
            label={item}
            selected={isSelected(item)}
            onClick={() => onFilter(item)}
          />
        ))}
      </Filter>

      <Filter>
        {items.map((item, index) => (
          <Filter.SquareStrokeChip
            key={index}
            label={item}
            selected={isSelected(item)}
            onClick={() => onFilter(item)}
          />
        ))}
      </Filter>
    </div>
  );
};

Playground.args = {};
