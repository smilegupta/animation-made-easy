import React, { Fragment } from "react";
import { motion } from "framer-motion";

import "pages/example7/styles.css";

const Example7 = () => {
  return (
    <Fragment>
      <h1 className="page-title"> Say Hello to Framer Gestures </h1>
      <div className="example7-wrapper">
        <motion.div className="example7-box" />
      </div>
    </Fragment>
  );
};

export default Example7;
