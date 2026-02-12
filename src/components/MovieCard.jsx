import { useMovieContext } from "../context/MovieContext"

export default function MovieCard ({movie}){
    const {isFavorite, addToFavorite , removeFromFavorite } = useMovieContext()
    const favorite = isFavorite(movie.id) 

    function onFavoriteClick(e){
        e.preventDefault()
        if(favorite) removeFromFavorite(movie.id)
            else addToFavorite(movie)
    }

    return<div className="p-8 m-1 shadow-xl/20 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
        <div className = "">
            <img className="rounded-xl" src ={`https://image.tmdb.org/t/p/w500${movie.poster_path   }`} alt={movie.title} /> 
            <div className="overlay absolute top-2 right-2">
                <button className=" favorite  bg-black/50 rounded-full p-2" onClick={onFavoriteClick} >
                   {favorite ? "❤️" : "🤍"}
                </button>
            </div>
            <div className=" movie-title mt-2">
               <span className="title text-2xl lg:text-2xl  md:text-sm font-bold" ><h3> {movie.title}</h3></span>
               <p className="text-sm text-white">{movie.release_date.split('-')[0]}</p>
            </div>
        </div>
    </div>
}