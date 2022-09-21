import React, {Fragment} from "react";
import { motion } from "framer-motion";

import "pages/example8/styles.css";

const cardVariants = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

function Card({ emoji }) {
  return (
    <motion.div
      className="card-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const animals = ["🐨", "🐻‍", "🐶", "🐱", "🐰"];

const Example8 = () => {
  return (
    <Fragment>
      <h1 className="page-title">On Scroll Animation Example 1</h1>
      <Fragment>
        {animals.map((emoji) => (
          <Card emoji={emoji} key={emoji} />
        ))}
      </Fragment>
    </Fragment>
  );
};

export default Example8;
