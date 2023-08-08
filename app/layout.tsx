import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import projects from "../projects";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import ContactMe from "@/components/ContactMe";
import socials from "@/socials";

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
        <section className="bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
          <Header socials={socials} />

          <section id="Hero" className="snap-start">
            <Hero />
          </section>

          <section id="About" className="snap-center">
            <About />
          </section>

          <section id="Skills" className="snap-end">
            <Skills />
          </section>

          <section id="Projects" className="snap-start">
            <Projects projects={projects} />
          </section>

          <section id="Blogs" className="snap-center">
            <Blogs />
          </section>

          <section id="Contact" className="snap-end">
            <ContactMe />
          </section>
          {children}
        </section>
      </body>
    </html>
  );
}
