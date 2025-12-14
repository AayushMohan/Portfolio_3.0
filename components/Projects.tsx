"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import projects, { Project } from "@/utils/projects";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconArrowRight,
  IconBrandGithub,
} from "@tabler/icons-react";

const Projects: React.FC = () => {
  const totalProjects = projects.length;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((proj: Project, i: number) => {
          const sizeClasses =
            proj.mediaOrientation === "portrait"
              ? "h-[52vh] sm:h-[54vh] md:h-[55vh] w-auto max-w-[90vw] object-contain"
              : "h-[46vh] sm:h-[48vh] md:h-[50vh] w-auto max-w-[92vw] object-contain";

          return (
            <div
              key={i}
              className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-start gap-5 p-5 h-screen"
            >
              <h3 className="uppercase tracking-[16px] text-gray-400 text-2xl md:text-4xl md:mt-10 mt-8">
                Projects
              </h3>

              <div
                className="w-full flex items-center justify-center"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === i && (proj.gifUrl || proj.videoUrl) ? (
                  proj.videoUrl ? (
                    <video
                      src={proj.videoUrl}
                      className={sizeClasses}
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <img
                      src={proj.gifUrl as string}
                      alt={`${proj.name} preview`}
                      className={sizeClasses}
                      loading="lazy"
                    />
                  )
                ) : (
                  <img
                    src={proj.imageUrl}
                    alt={proj.name}
                    className={sizeClasses}
                    loading="lazy"
                  />
                )}
              </div>

              <div className="space-y-4 px-6 md:px-10 max-w-3xl md:pb-6 text-center">
                <h4 className="text-xl md:text-2xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {totalProjects}
                  </span>{" "}
                  : {proj.name}
                </h4>

                <p
                  className="text-sm md:text-base text-neutral-300 leading-relaxed md:leading-relaxed"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {proj.description}
                </p>

                {proj.techStack && proj.techStack.length > 0 && (
                  <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap text-neutral-300 mt-2 md:mt-3">
                    {proj.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10"
                      >
                        {tech === "react" && <IconBrandReact size={18} />}
                        {tech === "nextjs" && <IconBrandNextjs size={18} />}
                        {tech === "typescript" && (
                          <IconBrandTypescript size={18} />
                        )}
                        {tech === "tailwind" && <IconBrandTailwind size={18} />}
                        {tech === "react-native" && (
                          <IconDeviceMobile size={18} />
                        )}
                        {tech === "graphql" && <IconCode size={18} />}
                        {tech === "sanity" && <IconDatabase size={18} />}
                        {tech === "appwrite" && <IconDatabase size={18} />}
                        {tech === "html" && <IconCode size={18} />}
                        {tech === "css" && <IconCode size={18} />}
                        {tech === "scss" && <IconCode size={18} />}
                        {tech === "navigation" && (
                          <IconDeviceMobile size={18} />
                        )}
                        <span className="text-xs capitalize tracking-wide">
                          {tech.replace("-", " ")}
                        </span>
                      </span>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6 w-full max-w-md mx-auto">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      className="px-5 py-2.5 bg-[#F7AB0A]/40 text-white rounded-md hover:bg-[#F7AB0A]/80 link_btn w-full text-center inline-flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Live Demo</span>
                      <IconArrowRight size={18} />
                    </a>
                  )}
                  {proj.codebaseUrl && (
                    <a
                      href={proj.codebaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2.5 bg-slate-800/70 text-white rounded-md hover:bg-slate-700 link_btn w-full text-center inline-flex items-center justify-center gap-2 shadow-sm ${
                        !proj.liveUrl ? "sm:col-span-2" : ""
                      }`}
                    >
                      <IconBrandGithub size={18} />
                      <span>Codebase</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
