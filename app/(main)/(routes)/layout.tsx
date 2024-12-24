import NavBar from "../_components/NavBar";
import React from "react";
import Footer from "@/components/ui/footer";
import SquareLines from "@/components/ui/square-lines";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen h-auto w-full z-10">
        <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>
        {/* Navigation */}
        <NavBar />
        <div className="w-full h-auto z-50">
          <div className="absolute w-full h-auto top-0 z-[1]">
            <SquareLines />
          </div>
          {/* GRID DESIGN */}
          {/* <div className="w-full absolute top-0 left-0 h-[180px] sm:h-[270px] md:h-[360px] xl:h-[528px] dark:bg-grid-cyan-400/[0.2] bg-grid-black/[0.2]">
          <div className="absolute top-40  pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_100%)]"></div>
          </div> */}
          {/* CHILDREN */}
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
