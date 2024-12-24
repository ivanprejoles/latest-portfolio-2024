import portfolio from "@/lib/constant/portfolio";
import sideProject from "@/lib/constant/side-project";
import { groupPortfolioByType } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectPage = () => {
  return (
    <section className="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0 mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          Side Projects
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
          Step into a world of experimentation and skill-building. My side
          projects focus on automation tools, exploring new tech stacks, and
          pushing boundaries to create complex, cutting-edge applications.
        </p>
      </div>
      {Object.entries(sideProject).map(([name, value], key) => (
        <div
          key={key}
          className="divide-y divide-neutral-200 dark:divide-neutral-800"
        >
          <div className="py-4 first:pt-0">
            <Link
              href={`/project/${name}`}
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
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-4 md:line-clamp-3 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                    {value.description}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectPage;
