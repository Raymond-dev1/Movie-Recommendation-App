import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const movies = [
    {
      id: 0,
      title: "Big One",
      release_date: "2021",
      url: "https://images.unsplash.com/photo-1768938896473-fa08fb0f20ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 1,
      title: "Big Old One",
      release_date: "2022",
      url: "https://images.unsplash.com/photo-1764069138714-bcc6783b8e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      title: "Geek One",
      release_date: "2025",
      url: "https://images.unsplash.com/photo-1765677707084-d2ac28ad4bf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Real  one",
      release_date: "2022",
      url: "https://images.unsplash.com/photo-1769107418962-ec5ecd084014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setLoading(true)

// reset 1sec after work is done
    setTimeout(() => {
      setLoading(false);  
    }, 700);

  };
  return (
    <div className="Home  ">
      <form
        onSubmit={handleSearch}
        className="class-form m-1 p-8 rounded-full   "
      >
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input border-2 rounded-sm px-2 py-2  text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className={`search-button m-1 hover:text-black  bg-blue-500 rounded-sm px-2 py-2 text-white font-semibold transition duration-300 ease-in-out ${loading ? "cursor-progress" : "cursor-pointer" }`}
          disabled={loading}
        >
          {loading? "Searching..." : "Search"}
          {/* <span className=" text-center "></span>Search */}
        </button>
      </form>
      <div className="movie-card inline-grid grid-cols-3 gap-4 shadow-xl ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
