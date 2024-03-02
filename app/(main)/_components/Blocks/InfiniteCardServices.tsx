"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="md:h-[22rem] flex flex-col antialiased bg-[#FAF9F6] dark:bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "Proficient in Web Designing, with practical experience in server-side technologies like Node.js, NextJs and PHP. Familiar with socket.io for implementing real-time communication using WebSockets.",
    name: "Card1",
    title: "Web Design",
  },
  {
    quote: "Proficient in creating interactive and dynamic user interface for users using Javascript, CSS, HTML, Bootstrap, and other library especially in React.",
    name: "Card2",
    title: "Front-end Design",
  },
  {
    quote: "Knowledgeable in API usage for fetch and interaction with MySQL databases. Familiar with designing tokens using JWT and creating services using NGINX, socket.io, and Redis for WebSocket functionality.",
    name: "Card3",
    title: "Back-end Design",
  },
];
