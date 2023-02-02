import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// My components
import Main from "./views/Main";
import About from "./components/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
