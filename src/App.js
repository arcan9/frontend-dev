import "./styles/App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// My components
import Main from "./views/Main";
import About from "./views/About";
import ProjectOne from "./views/ProjectOne";
import ProjectTwo from "./views/ProjectTwo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/project-one' element={<ProjectOne />} />
        <Route path='/project-two' element={<ProjectTwo />} />
      </Routes>
    </BrowserRouter>
  );
}
