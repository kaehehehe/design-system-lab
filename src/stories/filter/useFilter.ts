import { useState } from "react";

export function useFilter() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const onFilter = (item: string) => {
    setSelectedItems((prevSelected) => {
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

  return { selectedItems, isSelected, onFilter };
}
