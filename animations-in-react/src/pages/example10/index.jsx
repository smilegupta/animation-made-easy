import React, { useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "pages/example10/styles.css";

const Example10 = () => {
  const [current, setCurrent] = useState(0);

  return (
    <Fragment>
      <h1 className="page-title"> Exit Animation Example </h1>
      <div className="example10-wrapper">
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
            className="example10-box"
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
    </Fragment>
  );
};

export default Example10;
