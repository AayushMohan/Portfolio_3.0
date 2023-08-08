import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectCarousel from "@/components/Projects";
import projects, { Project } from "../projects";
import Projects from "@/components/Projects";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aayush Mohan's Portfolio",
  description: "A Web Developer & Machine Learning Engineer",
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
        <Projects projects={projects} />
        {/* Blogs */}
        {/* Contact Me*/}
        {children}
      </body>
    </html>
  );
}
