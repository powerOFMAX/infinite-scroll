import React, { useRef, useCallback } from "react";

export default function useRefElement(
  isFetching: boolean,
  callback: React.Dispatch<React.SetStateAction<boolean>>
) {
  const observer = useRef<any>();

  return useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) callback(true);
      });
      if (node) observer.current.observe(node);
    },
    [isFetching, callback]
  );
}
