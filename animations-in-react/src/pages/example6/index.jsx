import React from "react";
import { motion } from "framer-motion";

import "pages/example6/styles.css";

const Example6 = () => {

  return (
    <main className="example6-wrapper">
     <motion.div
      className="example6-box"
      initial={{ opacity: 0.1 }}
      animate={{ x: 1150, opacity: 1, rotate: 360}}
      // spring cant be use with duration
      // decrease stiffness ->  slow
      // dampling -> again make it slow
      transition={{
        stiffness: 50,
        type: "spring",
        damping: 75
      }}
    />
    </main>
  );
};

export default Example6;
