import { Separator } from "@/components/ui/separator";
import portfolio from "@/lib/constant/portfolio";
import { cn, groupPortfolioByType } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const groupedPortfolio = groupPortfolioByType(portfolio);

const PortfolioPage = () => {
  return (
    <section className="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0 mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          Portfolio
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
          Explore my freelance journey, where I deliver tailored solutions for
          clients. From feature-packed applications to automation tools that
          solve real-world problems
        </p>
      </div>
      {Object.entries(groupedPortfolio).map(([name, values], key) => (
        <div key={key}>
          <div className="relative my-20 text-neutral-500 dark:text-neutral-400 font-semibold">
            <div className="relative w-full pl-5 overflow-x-hidden md:pl-0">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>
              <div className="w-full h-px border-t border-solid border-neutral-300 dark:border-neutral-600"></div>
            </div>
            <div className="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 left-0 md:ml-0 ml-5 md:left-1/2 shadow-sm border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-center mr-1 w-5 h-5 p-1 rounded-md overflow-hidden translate-x-1 relative">
                <Image
                  alt="Category Icon"
                  src={`/category/${name}.png`}
                  layout="fill"
                />
              </div>
              <p className="leading-none">{name}</p>
              <div className="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-200 dark:border-neutral-800">
                <ArrowDown className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Map over each item, apply divide-y to individual items */}
          {values.map((value, valueKey) => (
            <div
              key={valueKey}
              className="divide-y divide-neutral-200 dark:divide-neutral-800"
            >
              <div className={cn("py-4", valueKey === 0 && "pt-0")}>
                <Link
                  href={`/portfolio/${value.name}`}
                  className="relative flex flex-col w-full items-stretch group rounded-xl transition-all duration-700 ease-out"
                >
                  <div className="w-full h-full rounded-xl flex flex-row-reverse gap-3 justify-between">
                    {/* Thumbnail */}
                    <div className="block w-full object-cover overflow-hidden rounded-xl h-48 md:h-44 relative">
                      <Image
                        alt={value.title}
                        src={value.thumbnail}
                        layout="fill"
                        className="object-cover object-top"
                      />
                    </div>
                    {/* Project Details */}
                    <div className="block w-full divide-y-4 divide-transparent">
                      <div className="flex relative gap-2 items-start justify-start mb-0 font-semibold tracking-tight text-neutral-800 hover:text-black dark:text-neutral-100 dark:hover:text-white text-lg">
                        <div
                          className="line-clamp-2"
                          title={value.title}
                        >
                          {value.title}
                        </div>
                      </div>
                      <div className="text-sm text-neutral-900 font-medium dark:text-neutral-400">
                        {value.type}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-4 md:line-clamp-3 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                        {value.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {valueKey !== values.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default PortfolioPage;
