import React, { Fragment } from "react";

import "pages/example7/styles.css";

const Example7 = () => {
  return (
    <Fragment>
      <h1 className="page-title"> Animation Challege 3</h1>
      <div className="example7-wrapper">
        <div className="example7-box">
          {[1, 2, 3].map((item) => {
            return <li key={item} className="small-box" />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Example7;
