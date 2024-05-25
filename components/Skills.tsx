"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { CardContainer } from "./ui/3d-cards";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row w-screen max-w-[2000px] xl:px-10 h-screen justify-center xl:space-y-10 items-center pb-10 mt-20"
    >
      <h3 className="absolute top-28 items-center uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl ">
        Skills
      </h3>

      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm mx-8">
        Hover over a skill for current proficiency
      </h3> */}
      <div>
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
