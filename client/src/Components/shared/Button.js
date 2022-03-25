import React from "react";
import { classNames } from "./Utils";

export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-500",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 disabled:opacity-30 dark:bg-gray-900 dark:border-gray-800",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
