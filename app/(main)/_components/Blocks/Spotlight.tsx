import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AboutMe } from "./AboutMe";
import { Github, LinkedinIcon } from "lucide-react";

export function SpotlightPreview() {

    const words = [
        {
          text: "Hi,",
        },
        {
          text: "I",
        },
        {
          text: "am",
        },
        {
          text: "Ivan.",
          className: "dark:text-cyan-400 text-zinc-900",
        },
    ];

  return (
    <div className="h-auto md:h-[40rem] w-full flex flex-col md:flex-row md:items-center md:justify-between px-[2px] md:px-[40px] lg:px-[100px] bg-[#FAF9F6] dark:bg-black/[0.96] bg-grid-black/[0.04] dark:bg-grid-white/[0.04] antialiased relative z-40">
      <div className="h-full flex flex-col md:items-center lg:items-center justify-center pt-[40px] md:pt-[180px] gap-[100px] md:gap-[130px]">
        <Spotlight
          className="left-[100px] -top-[78px] md:left-0 md:-top-0 lg:left-20 lg:-top-0"
          fill="white"
        />
        <div className="p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col md:flex-row">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-neutral-800 dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50 lx:top-50">
            Web Developer <br /> <TypewriterEffect words={words} />
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-4 md:gap-[60px] w-full items-center">
          <a href="https://github.com/ivanprejoles">
            <button 
              className="
                gap-[10px] 
                inline-flex 
                h-12 
                animate-shimmer 
                items-center 
                justify-center
                rounded-2xl 
                border 
                border-slate-800
                dark:border-cyan-800
                bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] 
                px-6 
                font-medium 
                text-slate-400
                dark:text-cyan-400 
                transition-colors 
                focus:outline-none 
                focus:ring-2
                focus:ring-slate-400 
                dark:focus:ring-cyan-400 
                focus:ring-offset-2 
                focus:ring-offset-slate-50
                dark:focus:ring-offset-cyan-50"
            >
              <Github />
              My Github
            </button>
          </a>
          <a href="https://www.linkedin.com/in/ivan-patrick-prejoles-688469248/">
            <button className="relative inline-flex h-12 overflow-hidden rounded-2xl  p-[1px] focus:outline-none focus:ring-2 dark:focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-cyan-50">
              <span className="absolute inset-[-1000%] dark:animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="gap-[10px] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl dark:bg-black px-6 py-1 text-sm font-medium dark:text-cyan-400 backdrop-blur-3xl border-2 bordersl dark:border-none">
                <LinkedinIcon />
                My LinkedIn
              </span>
            </button>
          </a>
        </div>
      </div>
      <AboutMe />
    </div>
  );
}


