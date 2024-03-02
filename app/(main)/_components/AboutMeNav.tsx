"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components: { title: string; description: string }[] = [
  {
    title: "Web Development",
    description:
      "Designing Web Interface interactively.",
  },
  {
    title: "Database Design",
    description:
      "Designing Structured database.",
  },
  {
    title: "Backend Development",
    description:
      "Designing API and servers.",
  },
  {
    title: "React Fundamentals",
    description: "component-based architecture, state management, props, hooks, event handling, conditional rendering, and list rendering.",
  },
  {
    title: "Next.js Features",
    description:
      "server-side rendering, static site generation, client-side routing, API routes, data fetching, authentication, environment variables.",
  },
  {
    title: "Component Libraries",
    description:
      "skills in component customization, composition, responsive design, accessibility, documentation reading, and version control.",
  },
]

export function AboutMeNav() {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }
    
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-slate-800 dark:text-white border-2  rounded-md dark:hover:border-cyan-500 dark:border-cyan-300">
                        My Skills
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="text-sm grid w-[260px] gap-1 md:gap-3 p-2 md:p-4 md:w-[410px] md:grid-cols-2 lg:w-[410px] ">
                            {components.map((component) => (
                                <ListItem
                                key={component.title}
                                title={component.title}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" text-slate-800 dark:text-white border-2 rounded-md dark:hover:border-cyan-500 dark:border-cyan-300">My Experience</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[410px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                        <Image
                                            src={'/images/hardbill.png'}
                                            width={200}
                                            height={200}
                                            alt="Billing"
                                        />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Billing app
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed to solve billing problems
                                            </p>
                                    </div>
                                </NavigationMenuLink>
                            </li>
                            <ListItem title="Developed a business solution via a web">
                                Billing Application
                            </ListItem>
                            <ListItem title="Problem it solved">
                                Reduces errors through automated data entry.
                            </ListItem>
                            <ListItem>
                                Ensures accuracy with built-in data analysis, and bulk insertion.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:block">
                    <NavigationMenuTrigger className=" text-slate-800 dark:text-white border-2  rounded-md dark:border-cyan-300 dark:hover:border-cyan-500">My Education</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[390px] lg:w-[410px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <div
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    >
                                        <Image 
                                            src={'/images/bacoor.jpg'}
                                            width={200}
                                            height={200}
                                            alt="STI Bacoor"
                                        />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            College School
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Studied at STI Bacoor
                                        </p>
                                    </div>
                                </NavigationMenuLink>
                            </li>
                            <ListItem title="Grade Shool">
                                Studied at Molino 3 Elementary School.
                            </ListItem>
                            <ListItem title="Junior High School">
                                Studied at BNHS Villa Maria Annex.
                            </ListItem>
                            <ListItem title="Senior High School">
                                Studied at University of Perpetual Help System Dalta.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
