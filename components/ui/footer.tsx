import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <section className="text-gray-700 bg-white border-t sm:mt-20 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 relative">
      <div className="container flex flex-col items-center py-8 mx-auto px-7 max-w-7xl sm:flex-row">
        <Link
          href="/"
          className="group relative z-30 flex items-center space-x-1.5 font-semibold"
        >
          <span className="flex items-center text-xl transition-all duration-300 ease-in-out group-hover:-rotate-12 group-hover:scale-[1.2]">
            <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
              ✦
            </span>
          </span>
          <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 ease-in-out group-hover:opacity-80">
            Ivan
          </span>
        </Link>
        <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
          © 2024 Ivan Prejoles. All rights are reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <Link href="https://www.linkedin.com/in/ivan-patrick-prejoles-688469248/">
            <Button variant="default" size="sm" className="rounded-full">
              My Linkedin
            </Button>
          </Link>
          <div className="flex items-center gap-5 ">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ivan-patrick-prejoles-688469248"
              className="bg-neutral-500 dark:bg-neutral-400 hover:text-neutral-900 p-1 rounded-full dark:hover:bg-white"
            >
              <Linkedin className="h-5 aspect-square text-white dark:text-neutral-900" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/ivanprejoles"
              className="bg-neutral-500 dark:bg-neutral-400 hover:text-neutral-900 p-1 rounded-full dark:hover:bg-white"
            >
              <Github className="h-5 aspect-square text-white dark:text-neutral-900" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
