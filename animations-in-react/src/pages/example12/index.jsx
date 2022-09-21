import React, { useState, useEffect, Fragment } from "react";
import {
  star,
  heart,
  hand,
  plane,
  lightning,
  note,
} from "pages/example12/paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { interpolate } from "flubber";

import "pages/example12/styles.css";

const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
  "#ff0055",
  "#ee4444",
  "#ffcc00",
  "#00cc88",
];

const Example12 = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <Fragment>
      <h1 className="page-title"> Animation Challenge 4 </h1>
      <div className="example12-wrapper">
        <svg width="400" height="400">
          <g transform="translate(10 10) scale(17 17)">
            <motion.path fill={fill} d={path} />
          </g>
        </svg>
      </div>
    </Fragment>
  );
};

export default Example12;

const getIndex = (_, index) => index;

function useFlubber(progress, paths) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}
