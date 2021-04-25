import React, {useState, createContext} from 'react'
import Nav from './Nav';

export const MovieContext = createContext();

export const movieProvider = (props)=> {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$30',
            id: 23125
        },
        {
            name: 'Inception',
            price: '$20',
            id: 23126
        },
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>

            {/* one way to provide */}
            {props.children}

            {/* one way 
            <Nav />
            <Movie /> */}
        </MovieContext.Provider>
    )
}
