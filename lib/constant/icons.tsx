import Image from "next/image";
import StackIcon from "tech-stack-icons";

const icons: Record<string, JSX.Element> = {
  React: <StackIcon name="reactjs" />,
  NodeJs: <StackIcon name="nodejs" />,
  MongoDB: <StackIcon name="mongodb" />,
  Prisma: <StackIcon name="prisma" />,
  Gitlab: <StackIcon name="gitlab" />,
  Github: <StackIcon name="github" className="bg-white" />,
  TailwindCSS: <StackIcon name="tailwindcss" />,
  Typescript: <StackIcon name="typescript" />,
  NextJs: <StackIcon name="nextjs" className="bg-white" />,
  Redux: <StackIcon name="redux" />,
  ClerkJs: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/ClerkJs.png"
        className="object-cover"
      />
    </div>
  ),
  Javascript: <StackIcon name="js" />,
  CSS: <StackIcon name="css3" />,
  HTML: <StackIcon name="html5" />,
  PDFMe: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/PDFMe.png"
        className="object-cover"
      />
    </div>
  ),
  Vite: <StackIcon name="vitejs" />,
  Framer: <StackIcon name="framer" className="bg-white" />,
  Express: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Express.png"
        className="object-cover"
      />
    </div>
  ),
  Aceternity: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Aceternity.png"
        className="object-cover"
      />
    </div>
  ),
  Flowbite: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Flowbite.png"
        className="object-cover"
      />
    </div>
  ),
  Cloudinary: <StackIcon name="cloudinary" />,
  Leaflet: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Leaflet.png"
        className="object-cover"
      />
    </div>
  ),
  Shadcn: <StackIcon name="shadcnui" className="bg-white" />, // Assuming no dedicated icon, using TailwindCSS as a proxy
  Zustand: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Zustand.png"
        className="object-cover"
      />
    </div>
  ), // Zustand is React-based; using React icon as proxy
  Postgresql: <StackIcon name="postgresql" />,
  Firebase: <StackIcon name="firebase" />,
  NextAuth: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Nextauth.png"
        className="object-cover"
      />
    </div>
  ),
  Lucide: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Lucide.png"
        className="object-cover"
      />
    </div>
  ),
  JsPDF: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/JsPDF.png"
        className="object-cover"
      />
    </div>
  ),
  WebSpeechAPI: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/WebSpeechAPI.png"
        className="object-cover"
      />
    </div>
  ),
  Neon: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Neon.png"
        className="object-cover"
      />
    </div>
  ),
  Gemini: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Gemini.png"
        className="object-cover"
      />
    </div>
  ),
  Serper: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Serper.png"
        className="object-cover"
      />
    </div>
  ),
  Tomtom: (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <Image
        alt="Stack Icon"
        layout="fill"
        src="/icons/Tomtom.png"
        className="object-cover"
      />
    </div>
  ),
};

export default icons;
