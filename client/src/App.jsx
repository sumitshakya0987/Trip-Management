// src/App.jsx

import React from "react";
import Navbar from "./components/Navbar";
import RoutesComponent from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <RoutesComponent />
    </>
  );
}

export default App; // ✅ Must be at top-level (not inside function)
