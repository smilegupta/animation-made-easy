import React, { Fragment } from "react";

import "pages/example8/styles.css";

function Card({ emoji }) {
  return (
    <div className="card-container">
      <div className="card">{emoji}</div>
    </div>
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
