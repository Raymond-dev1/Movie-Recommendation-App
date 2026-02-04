import { useState } from "react";
import Home from "./pages/Home";
import Favorite from "./pages/favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <main className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}
