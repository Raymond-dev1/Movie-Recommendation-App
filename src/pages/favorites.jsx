import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

export default function favorite() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    console.log("favorites from fav page:", favorites);
    return (
      <div className="m-2 min-h-screen bg-black  ">
        <h2 className="bg-white rounded-ee-2xl  p-2 shadow-3xl font-bold m-1 absolute top-19 left-0">Your Favorites</h2>
        <div className="movie-card inline-grid grid-cols-3 gap-4 shadow-xl p-3">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty  font-extrabold   px-5 py-5 rounded-2xl m-2 h-32 w-64 bg-white/30 backdrop-blur-sm ">
      <h3 className="text-red-600">No favorties yet!!</h3>
      <p className="text-white">Start adding movies to your favorites.</p>
    </div>
  );
} 
