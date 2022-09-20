import React from "react";
import { motion } from "framer-motion";

import "pages/example11/styles.css";

const Example11 = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      };
    },
  };

  return (
    <div className="wrapper">
      <motion.svg width="400" height="400" initial="hidden" animate="visible">
      <g transform="translate(10 10) scale(17 17)">
        <motion.path variants={draw} fill="none"  stroke="#de2b64" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </g>
    </motion.svg>
    </div>
  );
};

export default Example11;
