import MovieCard from "../components/MovieCard";
import { useFormStatus } from "react-dom";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 0, title: "big one", release_date: "2021" },
    { id: 1, title: "big old one", release_date: "2022" },
    { id: 2, title: "geek one", release_date: "2025" },
    { id: 3, title: "real  one", release_date: "2022" },
  ];
  //   const [pending, ]
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery("");
  };
  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="class-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value= {searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
