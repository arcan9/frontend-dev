import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// My components
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
}
