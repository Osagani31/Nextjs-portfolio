import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Osagani Perera | Full Stack Developer",
  description:
    "Portfolio of Osagani Perera — Full Stack Developer specializing in React, Next.js, Node.js, and MERN stack. View projects, services, and get in touch.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "MERN Stack",
    "Web Developer",
    "Osagani Perera",
  ],
  openGraph: {
    title: "Osagani Perera | Full Stack Developer",
    description:
      "Passionate Full Stack Developer building modern, scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden bg-white text-gray-900 dark:bg-dark-theme dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
