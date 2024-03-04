"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AboutMeNav } from "../AboutMeNav";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function AboutMe() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
        // Check if the screen width matches the mobile breakpoint
        const mobileMediaQuery = window.matchMedia('(max-width: 600px)');
        setIsMobile(mobileMediaQuery.matches);
        };

        // Call handleResize initially and whenever the window is resized
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <CardContainer className="inter-var mt-[100px]">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    My Programming Journey
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {isMobile ? (
                        <>{"Passionate about problem-solving through code, I've contributed to impactful project like personalized invoicing apps. Specializing in both Front-end and Backend development, I value collaboration and continuous learning, eager to create enduring applications together."}</>
                    ) : (
                        <>{"Starting with a passion for problem-solving through code and evolving into a lifelong commitment, I've contributed to impactful project like a personalized invoicing app, specializing in both Front-end and Backend development, valuing collaborative environments and continuous learning, eager to connect and create enduring applications together."}</>
                    )}     
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <BackgroundGradient className="rounded-[22px]">
                        <Image
                            src="/images/journey.jpg"
                            height={isMobile ? '100' : '500'}
                            width={isMobile ? '100' : '500'}
                            className="h-40 md:h-60 w-full object-cover rounded-[22px] group-hover/card:shadow-xl block dark:hidden"
                            alt="thumbnail"
                        />
                        <Image
                            src="/images/night-journey.jpg"
                            height={isMobile ? '100' : '500'}
                            width={isMobile ? '100' : '500'}
                            className="h-40 md:h-60 w-full object-cover rounded-[22px] group-hover/card:shadow-xl hidden dark:block"
                            alt="thumbnail"
                        />
                    </BackgroundGradient>
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={80}
                        as="article"
                        className="rounded-xl dark:text-white text-neutral-600 text-xs font-bold w-full flex justify-center"
                    >
                        <AboutMeNav/>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
