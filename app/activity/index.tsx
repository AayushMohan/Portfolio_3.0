import Blogs from "@/components/Blogs";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen pt-10 m-10 flex flex-col space-y-3"
      >
        <h1 className="text-4xl mt-10">Social Media Activity</h1>
        <p>Access to All of My Social Media Post at a Single Place</p>

        {/* Medium Blogs */}
        <div className="flex flex-row h-auto w-auto justify-between">
          <Blogs />
        </div>
        <div></div>
      </motion.div>
    </div>
  );
};

export default index;
