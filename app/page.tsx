import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import projects from "../utils/projects";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import ContactMe from "@/components/ContactMe";
import socials from "@/utils/socials";
import SEO from "@/components/SEO";

export default function Home({ post }: any) {
  return (
    <>
      <SEO
        title="Aayush Mohan – Full-Stack Developer & ML Engineer"
        description="Explore Aayush Mohan's end-to-end product work across web, AI, and immersive interfaces—built with React, Next.js, TypeScript, and modern ML tooling."
        keywords="Aayush Mohan, portfolio, web developer, machine learning engineer, Next.js, React, TypeScript"
        url="https://aayushmohan.dev"
        image="https://aayushmohan.dev/images/AayushMohan.jpg"
        imageAlt="Aayush Mohan speaking at a developer meetup"
        type="profile"
        breadcrumbs={[
          { name: "Home", url: "https://aayushmohan.dev" },
          { name: "Portfolio", url: "https://aayushmohan.dev/#hero" },
        ]}
      />

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
    </>
  );
}
