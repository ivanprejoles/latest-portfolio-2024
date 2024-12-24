import NavBar from "@/app/(main)/_components/NavBar";
import Footer from "@/components/ui/footer";
import SquareLines from "@/components/ui/square-lines";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-auto w-full">
      <SquareLines />
      <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>
      <NavBar />
      <div className="w-full h-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
