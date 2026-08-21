import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Physics from "./Physics";
import Chemistry from "./Chemistry";
import Biology from "./Biology";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* SUBJECTS */}
        <Route path="/physics" element={<Physics />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/biology" element={<Biology />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;