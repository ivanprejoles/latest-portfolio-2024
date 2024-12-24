"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="group relative z-30 flex items-center space-x-1.5 font-semibold"
    >
      <span className="flex items-center text-xl transition-all duration-300 ease-in-out group-hover:-rotate-12 group-hover:scale-[1.2]">
        <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">✦</span>
      </span>
      <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 ease-in-out group-hover:opacity-80">
        Ivan
      </span>
    </Link>
  );
};

export default Logo;
