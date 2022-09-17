import React from "react";
import { Header } from "shared-components/header";
import { Routes, Route } from "react-router-dom";
import Example14 from "pages/example14";
import PageContents from "pages/contents";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<PageContents />} />
        <Route path="/example-14" element={<Example14 />} />
      </Routes>
    </div>
  );
}

export default App;
