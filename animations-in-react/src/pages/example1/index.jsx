import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";

import "pages/example1/styles.css";

const Example1 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <Fragment>
      <h1 className="page-title"> Getting Started with Animation Basics </h1>
      <div className="example1-wrapper">
        <motion.div
          className="example1-box"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
        <div className="inputs-wrapper">
          <Input value={x} set={setX}>
            x
          </Input>
          <Input value={y} set={setY}>
            y
          </Input>
          <Input value={rotate} set={setRotate} min={-180} max={180}>
            rotate
          </Input>
        </div>
      </div>
    </Fragment>
  );
};

export default Example1;

function Input({ value, children, set, min = -200, max = 200 }) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}
