import { useState } from "react";
import Home from "./pages/Home";
import Favorite from "./pages/favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <main className="font-serif text-blue-600 min-h-screen  bg-black scroll-smooth md:scroll-auto ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}
