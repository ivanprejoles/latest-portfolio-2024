"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./Navigation/DarkModeToggle";
import Logo from "./Navigation/Logo";
import { cn, menus } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const scrolled = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn("top-0 z-[100] w-full fixed transition-all duration-300", 
        scrolled ? "h-14" : "h-20"
      )}
    >
      <div
        className={cn(
          `flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 select-none lg:border-r lg:border-l lg:rounded-b-xl border-transparent z-[100] transition-all duration-300`,
          scrolled
            ? "border-transparent border-slate-600 bg-white/50 backdrop-blur-md shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-950/50 dark:shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            : "border-transparent"
        )}
      >
        <Logo />
        <nav className="relative items-center z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-neutral-600 dark:text-neutral-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8 dark:text-neutral-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 8h16M4 16h16"></path>
              </svg>
            )}
          </button>
          <div
            className={cn(
              "fixed top-[75px] left-0 w-full h-auto sm:relative sm:top-0 sm:flex sm:w-auto sm:h-auto",
              "flex-col items-end justify-start text-sm sm:text-base sm:flex-row",
              "transition-all duration-300 ease-in-out",
              "sm:flex",
              isMobileMenuOpen ? "flex" : "hidden"
            )}
          >
            <div className="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
              <div className="relative w-full h-full bg-white border border-solid border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"></div>
            </div>
            {menus.map((menu, index) => (
              <Link
              key={index}
              href={menu.url}
              className={`relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto 
                ${pathname === menu.url 
                  ? 'text-neutral-900 dark:text-white' 
                  : 'hover:text-neutral-900 dark:hover:text-white'
                }
                before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:origin-left before:scale-x-0 before:transform before:rounded-full before:bg-neutral-900 before:transition-all before:duration-200 before:ease-in-out dark:before:bg-white
                ${pathname === menu.url ? 'before:scale-x-100' : 'hover:before:scale-x-100'}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {menu.name}
            </Link>
            ))}
          </div>
          <ModeToggle />
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-20 w-screen h-screen bg-white/90 dark:bg-neutral-950/90 sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default NavBar;

