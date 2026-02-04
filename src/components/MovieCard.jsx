import { useState } from "react"


export default function MovieCard ({movie}){
    const [like, setToFavorite] =useState('◊')

    function addToFavorite(){
        setToFavorite(like==='◊'? '◆':'◊')
    }

    return<div className="bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 ">
        <div className = "text-blue-300 font-bold">
            <img src ={movie.url} alt={movie.title} />
            <div className="overlay">
                <button className="favorite" onClick={addToFavorite}>
                    {like}
                </button>
            </div>
            <div className="movie-title">
               <h3> {movie.title}</h3>
               <p>{movie.release_date}</p>
            </div>
        </div>
    </div>
}