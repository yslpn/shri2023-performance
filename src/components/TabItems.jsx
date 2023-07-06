"use client"

import { memo, useMemo } from "react";
import { Event } from "./Event";

export const TabItems = memo(({ tabItems, setSize }) => {
  const items = useMemo(() => {
    return tabItems.map((item, index) => (
      <Event key={index} {...item} setSize={setSize} />
    ));
  }, [tabItems, setSize]);

  return items;
});

TabItems.displayName = "TabItems";
