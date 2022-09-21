import React, {Fragment} from "react";
import { motion } from "framer-motion";

import "pages/example2/styles.css";

const Example2 = () => {
  return (
    <Fragment>
      <h1 className="page-title"> Making your first animation </h1>
      <div className="example2-wrapper">
        <motion.div
          className="example2-box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        />
      </div>
    </Fragment>
  );
};

export default Example2;
