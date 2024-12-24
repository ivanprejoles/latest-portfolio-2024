import NavBar from "@/app/(main)/_components/NavBar";
import {
  BookmarkIcon,
  MoonIcon,
  PauseIcon,
  RefreshCwIcon,
  RotateCcwIcon,
  SkipBackIcon,
  SkipForwardIcon,
  TextIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import React from "react";
import Ripple from "@/components/ui/ripple";
import Footer from "@/components/ui/footer";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-auto w-full">
      <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>
      {/* Navigation */}
      <header id="id" className="top-0 z-[100] w-full fixed h-14">
        <NavBar />
      </header>
      <div className="w-full h-auto">
        {/* GRID DESIGN */}
        <div className="w-full h-[180px] sm:h-[270px] md:h-[360px] xl:h-[200px] ">
          {/* <div className="absolute top-40  pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_100%)]"></div> */}
          <Ripple />
        </div>
        {/* CHILDREN */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioLayout;
