"use client";

import React, { useEffect, useState } from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";
import portfolio, { portfolioValues } from "@/lib/constant/portfolio";

interface GridProps {
  items: { [key: string]: { title: string; link: string; thumbnail: string; description: string} };
  page: string;
}
const PortfolioGrid = ({ items, page }: GridProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return false;

  return (
    <>
      {Object.entries(items)
        .slice(0, Object.entries(items).length >= 4 ? 4 : 2) // Get first 4 or 2 items
        .map(([link, data], key) => (
          <div
            className="relative mx-auto h-60 w-[270px] mb-10 md:mb-0"
            key={key}
          >
            <PinContainer title={data.title} href={link} page={page} containerClassName="w-24">
              <div className="p-4 flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 h-56 md:h-60 w-[250px] md:w-[270px]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {data.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 line-clamp-1 lg:line-clamp-2">
                    {data.description}
                  </span>
                </div>
                <div className="flex flex-1 relative overflow-hidden w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                    alt={data.title}
                    src={data.thumbnail}
                    layout="fill"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
    </>
  );
};

export default PortfolioGrid;
