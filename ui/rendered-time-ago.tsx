"use client";

import ms from "ms";
import { useEffect, useRef, useState } from "react";

const useInterval = (callback: Function, delay: number | null) => {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export function RenderedTimeAgo({ timestamp }: { timestamp: number }) {
  const [msAgo, setMsAgo] = useState<number>(0);

  useEffect(() => {
    setMsAgo(Date.now() - timestamp);
  }, [timestamp]);

  useInterval(() => {
    setMsAgo(Date.now() - timestamp);
  }, 1000);

  return (
    <>
      <div
        className="items-center w-20 h-6 px-2 text-sm leading-6 text-center bg-gray-100 roounded-full"
        title={new Date(timestamp).toLocaleString()}
      >
        {msAgo ? (
          <>
            <span
              suppressContentEditableWarning={true}
              className="font-semibold text-gray-900 tabular-nums"
            >
              {msAgo >= 1000 ? ms(msAgo) : "0s"}
            </span>{" "}
            <span className="text-gray-800">전</span>
          </>
        ) : null}
      </div>
    </>
  );
}
