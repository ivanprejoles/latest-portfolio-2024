import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/provider/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ivan",
    template: "%s | Ivan",
  },
  description: "Full Stack Web Developer Portfolio.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-white dark:bg-black")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme-name"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
