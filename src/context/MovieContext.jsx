import { useContext, useState, createContext, useEffect  } from "react";


const MovieContext =  createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {

    const[ favorites , setFavorites ] = useState

    useEffect ( () => {
        const storedFavs = localStorage.setItem("favorites")

        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect (()=>{
        localStorage.getItem( "favorites" , JSON.stringify(favorites))
    } ,[favorites])

     const addToFavorite = (movie) => {
        setFavorites(prev =>[...prev , movie])
    }
    const removeFavorite =(movieId) =>{
         setFavorites(prev=>prev.filter(movie =>movie.id !== movieId))
    }
    const isFavorite = (movieId) =>{
        return favorites.some(movie => movie.id===movieId)
    }

    const value = {
        addToFavorite,
        removeFavorite,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}