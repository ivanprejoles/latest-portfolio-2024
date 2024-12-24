"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesScreen() {
  return (
    <div className="aspect-square relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-4xl text-3xl font-bold lg:text-6xl pointer-events-none select-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center  leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Sparkles
      </h1>
    </div>
  );
}
