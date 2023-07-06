"use client"

import { memo, useEffect, useRef } from "react";

export const Event = memo((props) => {
  const ref = useRef();

  const { setSize } = props;

  useEffect(() => {
    const width = ref.current.offsetWidth;

    if (setSize && width) {
      setSize(s => s + width);
    }
  });

  return (
    <li ref={ref} className={"event" + (props.slim ? " event_slim" : "")}>
      <button className="event__button">
        <span
          className={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && (
          <span className="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
});

Event.displayName = "Event";
