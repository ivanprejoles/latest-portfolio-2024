import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AboutMe } from "../_components/Blocks/AboutMe";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Timeline } from "@/components/ui/timeline";
import PortfolioGrid from "@/components/ui/portfolio-grid";
import portfolio from "@/lib/constant/portfolio";
import sideProject from "@/lib/constant/side-project";
import Screen from "@/components/ui/screen";
import { Spotlight } from "@/components/ui/Spotlight";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 auto-rows-max">
      <Spotlight
        className="left-[100px] -top-[78px] md:left-0 md:-top-0 lg:left-20 lg:-top-0"
        fill="white"
      />
      <section className="max-w-4xl mx-auto px-7 lg:px-0 mt-16 md:mt-24 lg:mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max items-start gap-4">
          {/* user info */}
          <div className="relative">
            <div className="relative justify-end flex-grow md:flex w-[40%] mb-5">
              <div className="relative z-50 w-full">
                <div className="absolute -bottom-6 -right-6 z-40 w-12 h-12 rounded-full">
                  <span className="relative z-20 flex items-center justify-center w-full h-full text-2xl border-4 border-white rounded-full dark:border-neutral-950 bg-neutral-100 dark:bg-neutral-900">
                    <span className="flex items-center justify-center w-full h-full bg-white border border-solid rounded-full dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700">
                      👋
                    </span>
                  </span>
                </div>
                <div className="relative z-30 px-1 h-40 w-40">
                  <Image
                    alt="Profile Image"
                    src="/profile/profile.png"
                    className="relative z-30 w-full md:max-w-md mx-auto dark:-translate-y-0.5 rounded-2xl contrast-120 dark:contrast-100"
                    layout="fill"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-20 w-full h-full lg:h-[108px] translate-x-0 -translate-y-px border border-solid rounded-2xl bg-gradient-to-r dark:from-neutral-950 dark:via-black dark:to-neutral-950 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700"></div>
              </div>
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-4xl lg:text-6xl dark:text-white">
              {"Hello,"}
              <br />
              {"I'm Ivan."}
            </h1>
            <h2 className="font-semibold mb-6 text-lg text-neutral-600 dark:text-neutral-400">
              {`Full Stack Web Developer | Automation Enthusiast`}
            </h2>
            <p className="mb-6 text-base text-neutral-600 dark:text-neutral-400">
              {`I'm a Full-Stack Web Developer passionate about creating scalable web applications and automation tools. I specialize in leveraging modern frameworks like Next.js and React.js to craft efficient, intuitive solutions that enhance workflows and user experiences.`}
            </p>
            <p className="mb-2 text-base text-neutral-600 dark:text-neutral-400">
              <span className="font-medium">
                {`Looking to streamline processes, automate tasks, or build innovative web applications?`}
                {`  Let’s work together.`}
              </span>
            </p>
            <ul className="py-2 space-y-[3px] text-sm list-disc text-neutral-500 dark:text-neutral-400 list-outside pl-3">
              <li>Custom Automation Tools and Workflows</li>
              <li>Scalable Web Applications with Next.js and MERN Stack</li>
              <li>Responsive and User-Friendly UI/UX Design</li>
              <li>Exploring Advanced Technologies to Solve Complex Problems</li>
              <li>and more...</li>
            </ul>
            <div className="flex items-center gap-2 py-5">
              <Link href="https://www.linkedin.com/in/ivan-patrick-prejoles-688469248/">
                <Button variant="default" size="sm" className="rounded-full">
                  My Linkedin
                </Button>
              </Link>

              <Link
                href="/Ivan_Patrick_Prejoles_FullStack_Resume_2024.pdf"
                passHref
                target="_blank"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  {/* <AceternityLogo /> */}
                  <span>Resume</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
          {/* design info */}
          <div className="relative hidden w-full h-full md:block scale-[80%]">
            <div className="relative w-full rounded-xlshadow-lg  my-auto xl:mt-18 ">
              <section>
                <Screen />

                <div className="relative  left-[5rem] -top-[5rem] z-20 rounded-xl  bg-transparent  w-full">
                  <AboutMe />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mx-auto px-7 lg:px-0  relative self-start">
        <div className="max-w-6xl mx-auto">
          <Timeline data={data} />
        </div>
      </section>
    </div>
  );
};

const data = [
  {
    title: "Portfolio",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Explore my freelance journey, where I deliver tailored solutions for
          clients. From feature-packed applications to automation tools that
          solve real-world problems
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 h-auto">
          <PortfolioGrid page="portfolio" items={portfolio} />
        </div>
        <div className="flex items-center justify-center w-full py-10">
          <Link href="/portfolio">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              {/* <AceternityLogo /> */}
              <span>View Full Portfolio</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Side Projects",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Step into a world of experimentation and skill-building. My side
          projects focus on automation tools, exploring new tech stacks, and
          pushing boundaries to create complex, cutting-edge applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 h-auto">
          <PortfolioGrid page="project" items={sideProject} />
        </div>
        <div className="flex items-center justify-center w-full py-10">
          <Link href="/project">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              {/* <AceternityLogo /> */}
              <span>View All Side Projects</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    ),
  },
  // {
  //   title: "",
  //   content: <div></div>,
  // },
];

export default HomePage;
