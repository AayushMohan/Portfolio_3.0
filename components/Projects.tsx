"use client";
import { motion } from "framer-motion";
// import Image from "next/image";
// import NewsApp from "./Projects/NewsApp";
// import OpenSea from "./Projects/OpenSea";
// import Readerse from "./Projects/Readerse";
// import Natours from "./Projects/Natours";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="flex flex-row">
        {/* <NewsApp />
        <OpenSea />
        <Readerse />
        <Natours /> */}
      </div>
    </motion.div>
  );
};

export default Projects;
