import React from "react";
import SquareLine from "./square-line";

const SquareLines = () => {
  return (
    <div className="absolute w-full h-auto z-[1]">
      <div className="absolute top-0 left-0 w-1/2 h-auto bg-neutral-100 dark:bg-neutral-800">
        <div className="absolute inset-0 z-30 w-full h-full pointer-events-none bg-gradient-to-tl from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent"></div>
        <div className="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-neutral-700 border-neutral-300 dark:border-neutral-900">
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-auto bg-neutral-100 dark:bg-neutral-800">
        <div className="absolute inset-0 z-30 w-full h-full pointer-events-none bg-gradient-to-tr from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent"></div>
        <div className="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-neutral-700 border-neutral-300 dark:border-neutral-900">
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
        </div>
      </div>
    </div>
  );
};

export default SquareLines;
