import React from "react";
import Square from "./square";

const SquareLine = () => {
  return (
    <div className="relative flex w-full divide-x h-[30px] sm:h-[45px] md:h-[60px] xl:h-[88px] divide-neutral-300 dark:divide-neutral-700 divide-dashed">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

export default SquareLine;