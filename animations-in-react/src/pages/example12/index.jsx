import React, { Fragment } from "react";
import {
  star,
  heart,
  hand,
  plane,
  lightning,
  note,
} from "pages/example12/paths";

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
  return (
    <Fragment>
      <h1 className="page-title"> Animation Challenge 4 </h1>
      <div className="example12-wrapper">
        <svg width="400" height="400">
          <g transform="translate(10 10) scale(17 17)">
            <path fill="#ee4444" d={heart} />
          </g>
        </svg>
      </div>
    </Fragment>
  );
};

export default Example12;
