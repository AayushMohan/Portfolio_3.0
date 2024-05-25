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
      <h3 className="text-center md:absolute top-24 mt-10 mb-3 md:-ml-36 uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-3xl md:text-4xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/p31j23cd/production/214b077f7a78bf10d1dd8c47afd9748583c60d51-3008x4624.jpg?w=2000&fit=max&auto=format&dpr=2"
        className="md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 xl:w-[350px] xl:h-[500px]"
        alt="User Profile Pic"
      />

      <div className="space-y-10 px-0 md:px-16 md:text-left text-center">
        <h4 className="font-bold text-xl md:text-4xl my-4 md:my-10 text-gray-200">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base leading-[22px] md:leading-loose text-gray-300">
          Web developer with a passion for AI and ML, pursuing B.Tech in AI/ML.
          I offer professional web development services with expertise in
          JavaScript, TypeScript, React, and Node.js. Alongside my development
          work, I am actively exploring deep learning and its applications. I
          thrive in fast-paced environments, enjoy tackling challenging
          projects, and believe in continuous learning. Let&apos;s connect to
          create innovative web solutions and explore the future of technology
          together!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
