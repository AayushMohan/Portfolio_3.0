"use client";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 py-10 justify-evenly mx-auto items-center mt-40"
    >
      <h3 className="text-center md:absolute top-24 md:-ml-36 uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-4xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/p31j23cd/production/214b077f7a78bf10d1dd8c47afd9748583c60d51-3008x4624.jpg?w=2000&fit=max&auto=format&dpr=2"
        className="md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 xl:w-[350px] xl:h-[500px]"
        alt="User Profile Pic"
      />

      <div className="space-y-10 px-0 md:px-16 md:text-left text-center">
        <h4 className="font-bold text-4xl m my-10">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base leading-relaxed md:leading-loose">
          Web developer with a passion for AI and ML, pursuing B.Tech in AI/ML.
          Strong foundation in web development with expertise in JavaScript,
          HTML, CSS, React, Node.js. Actively expanding knowledge in AI and ML.
          Thrives in fast-paced environments, enjoys challenging projects, and
          believes in continuous learning. Let&apos;s connect to shape the
          future of technology with AI and ML!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
