import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "App";
import { Refresh } from "shared-components/refresh";

import "common-styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppWithUI />
  </BrowserRouter>
);

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Refresh onClick={() => setCount(count + 1)} />
      <App key={count} />
    </Fragment>
  );
}
