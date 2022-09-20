import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "shared-components/header";
import PageContents from "pages/contents";
import Example1 from "pages/example1";
import Example2 from "pages/example2";
import Example3 from "pages/example3";
import Example8 from "pages/example8";
import Example9 from "pages/example9";
import Example10 from "pages/example10";
import Example14 from "pages/example14";


function App() {
  return (
    <div className="container">
      <Header />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<PageContents />} />
          <Route path="/example-1" element={<Example1 />} />
          <Route path="/example-2" element={<Example2 />} />
          <Route path="/example-3" element={<Example3 />} />
          <Route path="/example-8" element={<Example8 />} />
          <Route path="/example-9" element={<Example9 />} />
          <Route path="/example-10" element={<Example10 />} />
          <Route path="/example-14" element={<Example14 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
