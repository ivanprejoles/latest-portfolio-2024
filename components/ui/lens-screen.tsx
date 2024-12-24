"use client";
import { useState } from "react";
import { Lens } from "../ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LensScreen() {
  const [hovering, setHovering] = useState(false);

  return (
    <div>
      <div className="w-full relative rounded-xl overflow-hidden mx-auto ">
        {/* <Rays />
        <Beams /> */}
        <div className="relative z-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <Image
              src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? "blur(2px)" : "blur(0px)",
            }}
            className="py-4 relative z-20"
          >
            <h2 className=" text-2xl text-left font-bold">
              Apple Vision Pro
            </h2>
            <p className=" text-left  mt-4">
              The all new apple vision pro was the best thing that happened
              around 8 months ago, not anymore.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Sorry about this but it looks cool

