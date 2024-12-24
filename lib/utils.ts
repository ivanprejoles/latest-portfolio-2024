import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PortfolioTypes, portfolioValues } from "./constant/portfolio";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const menus = [
  {
    name: "Home",
    url: "/",
},
  // {
  // 	"name": "Blog",
  // 	"url": "/blog"
  // },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Side Projects",
    url: "/project",
  },
  {
    name: "About",
    url: "/about",
  },
];

export function groupPortfolioByType(portfolioData: {
[key: string]: portfolioValues;
}) {
  // Create a new container for the grouped portfolio
  const groupedPortfolio: { [key: string]: any[] } = {};

  // Iterate over the values of the input object
  Object.entries(portfolioData).forEach(([key, item]) => {
    const capitalizedType =
      item.type.charAt(0).toUpperCase() + item.type.slice(1);

    // Ensure a container array exists for the type
    if (!groupedPortfolio[capitalizedType]) {
      groupedPortfolio[capitalizedType] = [];
    }

    // Add the item to the corresponding array
    groupedPortfolio[capitalizedType].push({...item, name: key});
  });

  return groupedPortfolio;
}
