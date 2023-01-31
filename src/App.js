import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// My components
import Main from "./views/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
