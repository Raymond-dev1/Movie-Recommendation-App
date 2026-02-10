import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

export default function favorite() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    console.log("favorites from fav page:", favorites);
    return (
      <div className="m-2 min-h-screen bg-black ">
        <h2 className="bg-white rounded-full p-2">Your Favorites</h2>
        <div className="movie-card inline-grid grid-cols-3 gap-4 shadow-xl ">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty bg-black p-8 m-2 min-h-screen ">
      <h3 className="text-red-600">No favorties yet!!</h3>
      <p>Start adding movies to your favorites.</p>
    </div>
  );
} 
