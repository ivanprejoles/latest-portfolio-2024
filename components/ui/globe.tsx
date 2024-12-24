"use client";

import createGlobe from "cobe";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export const GlobeScreen = () => {
  return (
    <>
      <div className="h-full w-full md:h-[400px] flex items-center justify-center relative bg-transparent dark:bg-transparent">
        <span className="absolute pointer-events-none select-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Globe
        </span>
        <Globe />
      </div>
    </>
  );
};

export const Globe: any = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        setWidth(canvasRef.current.parentElement.clientWidth);
        setHeight(canvasRef.current.parentElement.clientHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: 0,
      theta: 0,
      dark: theme === "dark" ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [width, height, theme]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};
