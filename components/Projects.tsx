"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/utils/projects";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const totalProjects = projects.length;

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
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-around p-4 h-screen"
          >
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl md:my-8 my-20">
              Projects
            </h3>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={projects.imageUrl}
              alt={projects.name}
              width="100%"
              height="100%"
              className="md:mr-0 rounded-lg md:w-[40%] md:[h-50%]"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl md:pb-4">
              <h4 className="text-xl md:text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {totalProjects} :{" "}
                </span>
                {projects.name}
              </h4>

              <div></div>
              <p className="text-md py-4 px-2 leading-relaxed text-center md:mx-16">
                {projects.description}
              </p>

              <div className="flex items-center justify-evenly">
                {projects.liveUrl && (
                  <a
                    href={projects.liveUrl}
                    target="_blank"
                    className="px-4 py-2 bg-[#F7AB0A]/30 text-white rounded hover:bg-[#F7AB0A]/80 link_btn"
                  >
                    Live Demo
                  </a>
                )}
                {projects.codebaseUrl && (
                  <a
                    href={projects.codebaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-700/50 text-white rounded hover:bg-gray-600 link_btn"
                  >
                    Codebase
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
