import React, { useEffect } from "react";

type OutsideClickHandler = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: OutsideClickHandler
) => {
  useEffect(() => {
    function handleEvent(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null;
      if (!ref.current || (target && ref.current.contains(target))) return;
      callback(event);
    }
    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);
    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [ref, callback]);
};
