import { useMemo } from "preact/hooks";
import { memo } from "preact/compat";
import { Event } from "./Event";

export const TabItems = memo(({ tabItems, onSize }) => {
  const items = useMemo(() => {
    return tabItems.map((item, index) => (
      <Event key={index} {...item} onSize={onSize} />
    ));
  }, [tabItems, onSize]);

  return items;
});

TabItems.displayName = "TabItems";
