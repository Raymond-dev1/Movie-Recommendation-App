import { useMovieContext } from "../context/MovieContext"

export default function MovieCard ({movie}){
    const {isFavorite, addToFavorite , removeFromFavorite } = useMovieContext()
    const favorite = isFavorite(movie.id) 

    function onFavoriteClick(e){
        e.preventDefault()
        if(favorite) removeFromFavorite(movie.id)
            else addToFavorite(movie)
    }

    return<div className="p-8 m-1 shadow-xl/20 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
        <div className = "">
            <img className="rounded-xl" src ={`https://image.tmdb.org/t/p/w500${movie.poster_path   }`} alt={movie.title} /> 
            <div className="overlay">
                <button className={`favorite `} onClick={onFavoriteClick} >
                   {favorite ? "❤️" : "🤍"}
                </button>
            </div>
            <div className=" movie-title  ">
               <span className="title lg:text-2xl  text-sm" ><h3> {movie.title}</h3></span>
               <p>{movie.release_date.split('-')[0]}</p>
            </div>
        </div>
    </div>
}