import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";

import "pages/example6/styles.css";

const Example6 = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Fragment>
      <h1 className="page-title">Animation Challege 1</h1>
      <div className="example6-wrapper">
        <motion.div
          className="example6-box"
          initial={{ opacity: 0.1 }}
          animate={{
            x: isAnimating ? 1150 : 0,
            opacity: isAnimating ? 1 : 0.5,
            rotate: isAnimating ? 360 : 0,
          }}
          // spring cant be use with duration
          // decrease stiffness ->  slow
          // dampling -> again make it slow
          transition={{
            stiffness: 60,
            type: "spring",
            damping: 75,
          }}
          onClick={() => setIsAnimating(!isAnimating)}
        />
      </div>
    </Fragment>
  );
};

export default Example6;
