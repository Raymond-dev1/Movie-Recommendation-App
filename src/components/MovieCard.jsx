import { useState } from "react"


export default function MovieCard ({movie}){
    const [like, setToFavorite] =useState('◊')

    function addToFavorite(){
        // e.preventDefualt()
        setToFavorite(like==='◊'? '◆':'◊')
    }

    return<div className="p-8 m-1 shadow-xl/20 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
        <div className = "">
            <img className="rounded-xl" src ={`https://image.tmdb.org/t/p/w500${movie.poster_path   }`} alt={movie.title} /> 
            <div className="overlay">
                <button className="favorite" onClick={addToFavorite}>
                    {like}
                </button>
            </div>
            <div className=" movie-title  ">
               <span className="title  text-2xl" ><h3> {movie.title}</h3></span>
               <p>{movie.release_date.split('-')[0]}</p>
            </div>
        </div>
    </div>
}