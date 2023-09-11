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
        <h1>Social Media Activity</h1>
      </motion.div>
    </div>
  );
};

export default index;
