interface ProjectTypes {
  [key: string]: projectValues
}

export interface projectValues {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  stacks: string[];
}



const sideProject: ProjectTypes = {
  Automate: {
    title: "Automate",
    link: "https://ivan-hause.onrender.com/",
    thumbnail: "/project/automate.png",
    description: "Developed a task manager app with list, kanban, and date views to organize tasks. It includes plugins like a whiteboard and CMS for added functionality. The app groups projects based on tasks, streamlining project management. Users can easily manage multiple projects and track progress. Designed to improve task organization and efficiency.",
    stacks: ['React', 'ClerkJs', 'Javascript', 'NodeJs', 'MongoDB', 'Prisma', 'Express', 'Gitlab', 'Shadcn', 'TailwindCSS', 'CSS']
  },
  PdfGen: {
    title: "PDF Gen",
    link: "https://github.com/ivanprejoles/transaction-memorizer",
    thumbnail: "/project/pdf-gen.png",
    description: "Developed an Excel-to-PDF generation and editing tool that automates the conversion of Excel data into neatly formatted PDFs. This VBA-powered application streamlines document creation by enabling batch PDF generation, ensuring consistent data insertion, and allowing for custom layouts. Users can quickly generate and edit PDFs directly in their browser, saving time and improving efficiency in document management.",
    stacks: ['PDFMe', 'Redux', 'NextJs', 'ClerkJs', 'React', 'Typescript', 'MongoDB', 'Prisma', 'Github', 'Shadcn', 'Aceternity', 'TailwindCSS', 'CSS']
  },
  Airbnb: {
    title: "Airbnb Clone",
    link: "https://ivanprejoles.github.io/hardbill/",
    thumbnail: "/project/airbnb-clone.png",
    description: "Developed an Airbnb clone, offering a platform for users to browse, book, and list properties with ease. The application features a responsive design, intuitive search functionality, and user authentication, allowing hosts and guests to interact seamlessly. Integrated with a map for location-based searches and user reviews, the platform ensures a smooth and reliable booking experience. Built with a focus on scalability and performance, it delivers an exceptional user experience across devices.",
    stacks: ['NextJs', 'Zustand', 'React', 'Typescript', 'MongoDB', 'Prisma', 'NextAuth', 'Leaflet', 'Cloudinary']
  },
  IvanHomePage: {
    title: "Ivan HomePage",
    link: "https://ivan-hause-c1tn.vercel.app/",
    thumbnail: "/project/ivan-homepage.png",
    description: "Developed a customizable home page with various design layouts, serving as a reference for sourcing specific components needed for projects. The platform provides easy access to a variety of pre-built design elements, enabling users to quickly extract and implement components from the source code for their own projects. This approach streamlines the design process, offering flexibility and efficiency in building unique, responsive websites",
    stacks: ['React', 'Flowbite', 'Framer', 'TailwindCSS', 'Vite', 'Typescript']
  },
};

export default sideProject;
