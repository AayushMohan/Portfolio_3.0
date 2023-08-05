"use client";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {};

const projects = [
  {
    title: "NewsApp",
    description: "A news app built with React",
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
];

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="flex flex-row">
        <Project projects={projects} />
      </div>
    </motion.div>
  );
};

export default Projects;
