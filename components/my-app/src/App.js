// Add a new Route to the /counter path that renders the Counter component from useState 01.
import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter counter={0} />} />
    </Routes>
  );
}

export default App;
