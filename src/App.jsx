import { useState } from "react";
import Home from "./pages/Home";
import Favorite from "./pages/favorites";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
  );
}
