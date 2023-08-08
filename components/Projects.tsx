"use client";
import { Project } from "@/projects";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects?.map((projects, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-around p-4 md:py-48 h-screen"
          >
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl md:my-8 my-20">
              Projects
            </h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
