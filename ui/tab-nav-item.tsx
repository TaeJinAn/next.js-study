import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const TabNavItem = ({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <>
      <Link
        href={href}
        className={clsx("rounded-lg px-3 py-1 text-sm font-medium", {
          "bg-gray-200 text-gray-500 hover:bg-gray-500 hover:text-white":
            !isActive,
          "bg-vercel-blue text-white": isActive,
        })}
      >
        {children}
      </Link>
    </>
  );
};
