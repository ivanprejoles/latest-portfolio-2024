import React from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

const GreetingsCard = () => {
  return (
    <>
      <div className="w-1/2 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Hello, I&apos;m Ivan.
        </h1>
        <div className="space-y-4 text-gray-400">
          <p className="text-xl">
            I&apos;m a front-end programmer living in Nanjing.
          </p>
          <p className="text-xl">I focus on Web development.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl text-white">I can help you out with:</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Vue.js Development</li>
            <li>React.js Development</li>
            <li>Node.js Development</li>
            <li>Website Design</li>
            <li>and more...</li>
          </ul>
        </div>
        <Button
          asChild
          variant="outline"
          className="bg-transparent text-white border-white hover:bg-white hover:text-black"
        >
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on 𝕏
          </Link>
        </Button>
      </div>
      <div className="w-1/2 relative">
        <div className="aspect-square max-w-2xl w-full relative">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Portrait illustration"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
          {/* <div className="absolute -top-4 -right-4 bg-black rounded-full p-2">
              <span className="text-2xl">👋</span>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default GreetingsCard;
