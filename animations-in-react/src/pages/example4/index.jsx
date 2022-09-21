import React, { Fragment } from "react";
import { motion } from "framer-motion";

import "pages/example4/styles.css";

const Example4 = () => {
  return (
    <Fragment>
      <h1 className="page-title"> Say Hello to Framer Gestures </h1>
      <div className="example4-wrapper">
        <motion.div
          className="example4-box"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          drag
          dragConstraints={{
            right: 20,
            left: -20,
            top: 10,
            bottom: 10,
          }}
        />
      </div>
    </Fragment>
  );
};

export default Example4;
