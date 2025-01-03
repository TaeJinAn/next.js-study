"use client";
import React, { useState } from "react";

export default function BuggyButton() {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    throw new Error("문제가 발생했습니다.");
  }
  return (
    <>
      <Button
        onClick={() => {
          setClicked(true);
        }}
        kind="error"
      >
        강제로 에러 발생 시키기
      </Button>
    </>
  );
}

const Button = ({
  children,
  onClick,
  kind,
}: {
  children: React.ReactNode;
  onClick: () => void;
  kind: string;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg whitespace-nowrap tabular-nums hover:bg-gray-500 hover:text-white"
      >
        {children}
      </button>
    </>
  );
};
