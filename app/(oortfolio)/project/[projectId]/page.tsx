"use client";

import icons from "@/lib/constant/icons";
import sideProject from "@/lib/constant/side-project";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PortfolioPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const params = useParams();

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const id = params.projectId as string;

  const data = sideProject[id];

  if (!data) return redirect("/not-found");

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <main className="relative z-30  max-w-4xl pb-1 mx-auto mt-10  md:rounded-t-md text-neutral-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="relative flex flex-col px-5 pb-6 md:pb-0 pt-6 border-t border-b-0 md:border-r md:border-l md:pt-20 lg:px-0 justify-stretch md:rounded-t-2xl border-neutral-200 dark:border-neutral-800 bg-transparent">
          <div className="absolute top-0 left-0 hidden w-px h-full mt-1 -translate-x-px md:block bg-gradient-to-b from-transparent to-white dark:to-neutral-950"></div>
          <div className="absolute top-0 right-0 hidden w-px h-full mt-1 translate-x-px md:block bg-gradient-to-b from-transparent to-white dark:to-neutral-950"></div>
          <div className="flex flex-col items-start gap-7 mx-auto w-full max-w-2xl md:mb-12">
            <h1 className="text-3xl bg-transparent font-bold leading-tight tracking-tighter text-left md:text-4xl dark:text-neutral-100 lg:text-5xl md:leading-none">
              {data.title}
            </h1>
            <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {data.description}
            </p>
          </div>
        </div>
        <article className="w-full max-w-2xl mx-auto mb-20 prose-sm prose px-7 sm:px-0 lg:prose-lg dark:prose-invert">
          <figure className="text-center text-xs lg:-mx-32 mt-1">
            {/* <div className="flex bg-transparent flex-col items-start gap-7 mx-auto w-full max-w-2xl md:mb-12"> */}
            <div className="text-center w-auto aspect-video text-xs bg-gradient-to-r from-indigo-400 to-pink-300 rounded-md overflow-hidden prose-sm prose px-0 lg:prose-lg dark:prose-invert">
              <Image
                width={1920}
                height={1000}
                alt={data.title}
                src={data.thumbnail}
                className="object-cover"
              />
            </div>
            {/* </div> */}
          </figure>
          <h2 className="font-extrabold text-3xl mt-[1.8666667em] mb-[1.0666667em] leading-[1.3333333] text-white">
            Technology Stack and Libraries
          </h2>
          <div className="flex flex-wrap items-start justify-start gap-8">
            {data.stacks.map((stack, key) => (
              <div key={key} className="shrink-0 flex flex-col items-center gap-1">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">{icons[stack]}</div>
                <div className="w-min text-center text-xs capitalize text-slate-600 dark:text-slate-400">
                  {stack}
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
};

export default PortfolioPage;
