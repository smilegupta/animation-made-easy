import React, { useState, Fragment } from "react";

import "pages/example10/styles.css";

const Example10 = () => {
  const [current, setCurrent] = useState(0);

  return (
    <Fragment>
      <h1 className="page-title"> Exit Animation Example </h1>
      <div className="example10-wrapper">
        <div className="controls">
          <button
            onClick={() => {
              setCurrent(current - 1);
            }}
            className="btn btn-solid-secondary"
          >
            Prev
          </button>
          <button
            onClick={() => {
              setCurrent(current + 1);
            }}
            className="btn btn-solid-secondary"
          >
            Next
          </button>
        </div>

        <div className="example10-box" key={current}>
          {current}
        </div>
      </div>
    </Fragment>
  );
};

export default Example10;
