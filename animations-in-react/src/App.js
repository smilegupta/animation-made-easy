import React from "react";
import { Header } from "shared-components/header";
import { Routes, Route } from "react-router-dom";
import Example14 from "pages/example14";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<div> Hello!!!</div>} />
        <Route path="/example-14" element={<Example14 />} />
      </Routes>
    </div>
  );
}

export default App;
