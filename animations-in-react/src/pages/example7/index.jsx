import React, { Fragment } from "react";
import { motion } from "framer-motion";

import "pages/example7/styles.css";

const Example7 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <Fragment>
      <h1 className="page-title"> Animation Challege 3</h1>
      <div className="example7-wrapper">
        <motion.div
          className="example7-box"
          variants={boxVariant}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((item) => {
            return (
              <motion.li
                key={item}
                className="small-box"
                variants={listVariant}
              />
            );
          })}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Example7;
