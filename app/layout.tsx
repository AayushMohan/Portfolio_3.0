import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        {" "}
        {/* Header */}
        <Header />
        {/* Hero */}
        <Hero />
        {/* About */}
        <About />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Blogs */}
        {/* Contact Me*/}
        {children}
      </body>
    </html>
  );
}
