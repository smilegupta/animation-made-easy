import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "pages/example10/styles.css";

const Example10 = () => {
  const [current, setCurrent] = useState(0);
  
  return (
    <div className="wrapper">
      <div className="controls">
      <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          Prev
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          Next
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring" }}
          key={current}
        >
          {current}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Example10;