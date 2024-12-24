"use client";

import React, { useState } from "react";
import {
  IconBadge4k,
  IconBrandGithub,
  IconBrandOpenai,
  IconBrandX,
  IconExchange,
  IconGlobe,
  IconHome,
  IconMoonStars,
  IconNewSection,
  IconTerminal2,
  IconZoomIn,
  IconZoomPan,
} from "@tabler/icons-react";
import { FloatingDock } from "./floating-dock";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Compare } from "./compare";
import { BackgroundGradient } from "./background-gradient";
import { AIStacks } from "./animated-stacks";
import { LensScreen } from "./lens-screen";
import { GlobeScreen } from "./globe";
import { SparklesScreen } from "./sparkles-screen";
import { PointerScreen } from "./pointer-screen";

const Screen = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);

  const links = [
    {
      title: "AI Stacks",
      icon: (
        <IconBrandOpenai
          stroke={2}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      component: <AIStacks />,
    },

    {
      title: "Code",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      component: (
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-full w-full md:h-[400px]"
          slideMode="hover"
        />
      ),
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      component: (
        <PointerScreen />
      ),
    },
    {
      title: "Lens",
      icon: (
      <IconZoomPan className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      component: (
        <LensScreen />
      ),
    },

    {
      title: "Globe",
      icon: (
        <IconGlobe className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      component: (
        <GlobeScreen />
      ),
    },
    {
      title: "Night Mode",
      icon: (
        <IconMoonStars className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      component: (
        <SparklesScreen />
      ),
    },
  ];
  return (
    <>
      <div className="bg-transparent grid text-sm leading-6 justify-center">
        <div className="flex items-center justify-center z-10 w-full">
          <FloatingDock
            onClick={setSelectedScreen}
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>
      </div>
      <div className="rounded-t-xl w-full p-1 dark:highlight-white/10">
        <HoverBorderGradient
          containerClassName="rounded-full w-full border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800"
          as="div"
          className="dark:bg-black rounded-3xl w-full bg-white text-black dark:text-white flex items-center space-x-2"
        >
          {links[selectedScreen].component}
        </HoverBorderGradient>
      </div>
    </>
  );
};

export default Screen;
