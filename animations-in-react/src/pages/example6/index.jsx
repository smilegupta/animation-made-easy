import React, { Fragment } from "react";

import "pages/example6/styles.css";

const Example6 = () => {
  return (
    <Fragment>
      <h1 className="page-title">Animation Challege 2</h1>
      <div className="example6-wrapper">
        <div className="mb-5 pb-5">
          <button className="btn btn-solid-secondary mr-2">Move Right</button>
          <button className="btn btn-solid-secondary mr-2">Move Left</button>
          <button className="btn btn-solid-secondary mr-2">Circle</button>
          <button className="btn btn-solid-secondary mr-2">Square</button>
          <button className="btn btn-solid-secondary mr-2">Stop</button>
        </div>
        <div className="example6-box" />
      </div>
    </Fragment>
  );
};

export default Example6;
