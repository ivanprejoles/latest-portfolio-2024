"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AboutMeNav } from "../AboutMeNav";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import createGlobe from "cobe";

export function AboutMe() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width matches the mobile breakpoint
      const mobileMediaQuery = window.matchMedia("(max-width: 600px)");
      setIsMobile(mobileMediaQuery.matches);
    };

    // Call handleResize initially and whenever the window is resized
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-3xl border">
        <CardItem translateZ="100" className="w-full mt-4">
          <BackgroundGradient className="rounded-[22px] flex flex-col items-center">
            <Image
              src="/images/journey.jpg"
              height={isMobile ? "100" : "500"}
              width={isMobile ? "100" : "500"}
              className="h-40 md:h-60 w-full object-cover rounded-[22px] group-hover/card:shadow-xl block dark:hidden"
              alt="thumbnail"
            />
            <Image
              src="/images/night-journey.jpg"
              height={isMobile ? "100" : "500"}
              width={isMobile ? "100" : "500"}
              className="h-40 md:h-60 w-full object-cover rounded-[22px] group-hover/card:shadow-xl hidden dark:block"
              alt="thumbnail"
            />
          </BackgroundGradient>
        </CardItem>
        {/* <div className="flex justify-between items-center mt-10"> */}
          <CardItem
            translateZ={60}
            as="div"    
            className="rounded-xl dark:text-white text-neutral-600 text-xs font-bold w-full flex ml-0  mt-10 "
          >
            <BackgroundGradient
              className="rounded-[22px]"
              containerClassName="w-full"
            >
              <div className="bg-slate-400 group-hover/card:shadow-xl w-full text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-[22px] flex items-center">
                <div className="flex-auto flex items-center justify-evenly">
                  <button type="button" aria-label="Add to favorites">
                    <svg width="24" height="24">
                      <path
                        d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="hidden sm:block lg:hidden xl:block"
                    aria-label="Previous"
                  >
                    <svg width="24" height="24" fill="none">
                      <path
                        d="m10 12 8-6v12l-8-6Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6 6v12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" aria-label="Rewind 10 seconds">
                    <svg width="24" height="24" fill="none">
                      <path
                        d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5 5v3.111c0 .491.398.889.889.889H9"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
                  aria-label="Pause"
                >
                  <svg width="30" height="32" fill="currentColor">
                    <rect x="6" y="4" width="4" height="24" rx="2"></rect>
                    <rect x="20" y="4" width="4" height="24" rx="2"></rect>
                  </svg>
                </button>
                <div className="flex-auto flex items-center justify-evenly">
                  <button type="button" aria-label="Skip 10 seconds">
                    <svg width="24" height="24" fill="none">
                      <path
                        d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="hidden sm:block lg:hidden xl:block"
                    aria-label="Next"
                  >
                    <svg width="24" height="24" fill="none">
                      <path
                        d="M14 12 6 6v12l8-6Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M18 6v12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500"
                  >
                    1x
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            {/* <AboutMeNav/> */}
          </CardItem>
        {/* </div> */}
      </CardBody>
    </CardContainer>
  );
}
