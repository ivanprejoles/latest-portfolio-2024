import NavBar from "@/app/(main)/_components/NavBar";
import React from "react";
import Ripple from "@/components/ui/ripple";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import portfolio from "@/lib/constant/portfolio";

const MainPage = () => {
  return (
    <div className=" h-auto w-full">
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
        <section className="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
          <div className="relative z-20 w-full mx-auto lg:mx-0 mb-14">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
              About Me
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {
                " Hello 👋 I'm Ivan, a full stack web developer from Philippines with expertise in Next.js, React.js, and Typescript. I thrive on creating automation tools and exploring innovative technologies. Driven by a passion for continuous learning, I’m excited to take on projects that enhance efficiency and deliver meaningful impact."
              }
            </p>
          </div>
          <div className=" z-30 w-full h-[15rem] md:h-[30rem] relative rounded-xl overflow-hidden">
            <Image
              layout="fill"
              alt="About Me"
              className="object-cover rounded-xl"
              src="/images/about.png"
            />
          </div>
          <h2 className="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6 dark:text-neutral-200">
            Experience
          </h2>
          <div className="px-5 pt-10">
            {Object.entries(portfolio).map(([key, value], index) => (
              <div
                key={index}
                className="pb-10 border-l last:border-none border-gray-200 dark:border-neutral-700"
              >
                <div className="relative flex flex-col justify-start pl-12">
                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <img
                      src={`/category/${value.type}.png`}
                      alt={value.post}
                      className="w-8 h-8 rounded-lg"
                    />
                  </div>
                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
                    {value.date}
                  </p>
                  <div className="space-y-0 mb-3">
                    <h3 className="text-lg font-bold dark:text-neutral-100">
                      {value.skill}
                    </h3>
                    <p className="text-base font-medium dark:text-neutral-300">
                      {value.post}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="grid auto-rows-max grid-cols-[64px_1fr] gap-3 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                      <span className="block text-neutral-400 dark:text-neutral-500 text-right">
                        Action:
                      </span>
                      <span className="flex">{value.description}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6 dark:text-neutral-200">
            {`Let's Connect`}
          </h2>
          <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
            {"If you want to stay up to date with my work be sure to "}
            <a href="https://github.com/ivanprejoles" target="_blank" className="text-indigo-600 underline">
              follow me on github
            </a>
            {
              ", or want to discuss a project? You can schedule a 1-on-1 meeting with me."
            }
            <a href="https://www.linkedin.com/in/ivan-patrick-prejoles-688469248/" className="w-max mt-5 btn-rounded no-underline">
              My Linkedin
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
