import { useState } from "react"


export default function MovieCard ({movie}){
    const [like, setToFavorite] =useState('◊')

    function addToFavorite(){
        setToFavorite(like=== '◆')
    }

    return<div className="card">
        <div className = "poster">
            <img src ={movie.url} alt={movie.title} />
            <div className="overlay">
                <button className="favorite" onClick={addToFavorite}>
                    ◊
                </button>
            </div>
            <div className="movie-title">
               <h3> {movie.title}</h3>
               <p>{movie.release_date}</p>
            </div>
        </div>
    </div>
}