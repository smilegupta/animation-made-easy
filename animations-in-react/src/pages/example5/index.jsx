import React, { Fragment, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import "pages/example5/styles.css";

const Example5 = () => {
  const control = useAnimation();

  return (
    <Fragment>
      <h1 className="page-title">Animation Challege 3</h1>
      <div className="example5-wrapper">
        <div className="mb-5 pb-5">
          <button
            onClick={() => {
              control.start({
                x: 800,
                transition: {
                  duration: 2,
                },
              });
            }}
            className="btn btn-solid-secondary mr-2"
          >
            Move Right
          </button>
          <button
            className="btn btn-solid-secondary mr-2"
            onClick={() => {
              control.start({
                x: 0,
                transition: {
                  duration: 2,
                },
              });
            }}
          >
            Move Left
          </button>
          <button
            className="btn btn-solid-secondary mr-2"
            onClick={() => {
              control.start({
                borderRadius: "50%",
                transition: {
                  duration: 1,
                },
              });
            }}
          >
            Circle
          </button>
          <button
            onClick={() => {
              control.start({
                borderRadius: 0,
                transition: {
                  duration: 1,
                },
              });
            }}
            className="btn btn-solid-secondary mr-2"
          >
            Square
          </button>
          <button
            onClick={() => {
              control.stop();
            }}
            className="btn btn-solid-secondary mr-2"
          >
            Stop
          </button>
        </div>
        <motion.div className="example5-box" animate={control} />
      </div>
    </Fragment>
  );
};

export default Example5;
