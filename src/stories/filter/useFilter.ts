import { useState } from "react";

export const useFilter = () => {
  const [selectedItems, setSelected] = useState<string[]>([]);

  const onFilter = (item: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(item)) {
        return prevSelected.filter((i) => i !== item);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  const isSelected = (item: string) => {
    return selectedItems.includes(item);
  };

  return { isSelected, onFilter };
};
