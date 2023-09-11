import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import projects from "../projects";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import ContactMe from "@/components/ContactMe";
import socials from "@/socials";
import SocialActivity from "../components/Activity/SocialActivity";

export default function Home({ post }: any) {
  return (
    <main className="bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-end">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="blogs" className="snap-center">
        <Blogs />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </main>
  );
}
