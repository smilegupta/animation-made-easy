import React from "react";
import { motion } from "framer-motion";

import "pages/example2/styles.css";

const Example2 = () => {

  return (
    <main className="wrapper">
     <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
    />
    </main>
  );
};

export default Example2;
