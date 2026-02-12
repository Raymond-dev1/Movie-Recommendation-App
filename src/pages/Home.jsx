import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Error loading movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);


  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const searchResults = await searchMovies(searchQuery);
      if (searchResults < 1 ){
        setError('Movie Not Found!!')
      }
      setMovies(searchResults);
      
    } catch (err) {
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }

    // reset 1sec after work is done
    // setTimeout(() => {
    //   setLoading(false);
    // }, 700);
  };
  return (
    <div className="Home  ">
      <form
        onSubmit={handleSearch}
        className="class-form m-1 p-3 rounded-full "
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
          className={`search-button m-2  hover:text-black  bg-blue-500 rounded-sm px-2 py-2 text-white font-semibold transition duration-300 ease-in-out ${loading ? "cursor-progress" : "cursor-pointer"}`}
          disabled={loading}
        >
          Search
          {/* {loading ? "Searching..." : "Search"} */}
        </button>
      </form>

      {error && <div className="text-red-500 p-1 m-5">{error}</div>}

      {loading ? (
        <div className="">Loading...</div>
      ) : (
        <div className="movie-card inline-grid grid-cols-1 gap-4 md:grid-cols-3 shadow-xl">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
