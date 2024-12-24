import { Github } from 'lucide-react';
export interface PortfolioTypes {
  [key: string]: portfolioValues;
}

export interface portfolioValues {
  title: string;
  link: string;
  type: string;
  thumbnail: string;
  description: string;
  stacks: string[];
  date: string;
  post: string;
  skill: string;
}

const portfolio: PortfolioTypes = {
  Careerly: {
    title: "Careerly",
    link: "https://try-careerly.vercel.app/",
    type: "Uplift",
    thumbnail: "/portfolio/careerly.png",
    description: "Developed a comprehensive platform for Careerly, integrating three essential tools to empower job seekers: effortless resume creation, AI-powered interview practice with feedback, and tailored job matching, delivering a seamless and confidence-boosting user experience.",
    stacks: ["React", "TailwindCSS", "NodeJs", "MongoDB", 'Express', 'Lucide', 'JsPDF', 'WebSpeechAPI', 'Gemini', 'Serper', 'Tomtom'],
    date: 'NOV 2024 · NOV 2024',
    post: 'Uplift Student',
    skill: 'Full Stack Web Developer (Node.js, React.js)'
  },
  EMApartment: {
    title: "EM Hotel",
    link: "https://ivan-hause-c1tn.vercel.app/",
    type: "Freelance",
    thumbnail: "/portfolio/em-hotel.png",
    description: "Built an apartment booking platform with dynamic features for both users and admins. Users can browse rooms with high-quality images, check real-time availability, and book specific rooms with ease. The system also provides users with detailed booking information, payment statuses, and invoice generation. Admins can manage room statuses, view user data, and track services, ensuring smooth operations and enhanced user experience.",
    stacks: ['NextJs', 'Zustand' , 'Redux', 'React', 'Typescript', 'MongoDB', 'Prisma', 'Aceternity', 'Firebase', 'Framer','Lucide', 'TailwindCSS'],
    date: 'SEPT 2024 · NOV 2024',
    post: 'Freelance',
    skill: 'Full Stack Web Developer (Next.js, React.js)'
  },
  ExtremeBloom: {
    title: "Extreme Bloom",
    link: "https://github.com/ivanprejoles/transaction-memorizer",
    type: "Freelance",
    thumbnail: "/portfolio/extreme-bloom.png",
    description: "Developed a web-based ordering system that offers a seamless and convenient customer experience, while integrating a real-time inventory system that updates stock levels upon order placement and fulfillment. Implemented role-based access control for administrators, staff, and customers, ensuring tailored access to features and information based on user roles.",
    stacks: ['NextJs', 'Zustand' , 'Redux', 'React', 'ClerkJs','Typescript', 'MongoDB', 'Prisma', 'Aceternity', 'Firebase', 'Framer','Lucide', 'TailwindCSS'],
    date: 'SEPT 2024 · NOV 2024',
    post: 'Freelance',
    skill: 'Full Stack Web Developer (Next.js, React.js)'
  },
  JamsFootwear: {
    title: "Jams Footwear",
    link: "https://github.com/ivanprejoles/transaction-memorizer",
    type: "Freelance",
    thumbnail: "/portfolio/jams-footwear.png",
    description: "Developed an inventory management system with comprehensive record-keeping functionality, enabling efficient tracking of stock, streamlined ordering processes for customer convenience, and a fully integrated online information system.",
    stacks: ['NextJs', 'Zustand', 'React','ClerkJs','Typescript', 'Postgresql', 'Neon', 'Prisma', 'Aceternity', 'Cloudinary', 'Framer','Lucide', 'TailwindCSS'],
    date: 'SEPT 2024 · NOV 2024',
    post: 'Freelance',
    skill: 'Full Stack Web Developer (Next.js, React.js)'
  },
  HardBill: {
    title: "HardBill",
    link: "https://ivanprejoles.github.io/hardbill/",
    type: "Freelance",
    thumbnail: "/portfolio/hard-bill.png",
    description: "Developed a specialized invoice-making app that enables users to quickly create invoices in bulk, saving time and reducing errors compared to manually creating them in a spreadsheet. The app offers an intuitive interface for easy customization and fast generation of multiple invoices.",
    stacks: ["HTML", "CSS", "Javascript", "Github"],
    date: 'AUG 2023 · OCT 2023',
    post: 'Freelance',
    skill: 'Web Developer'
  },
};

export default portfolio;
