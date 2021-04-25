import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

const AddMovie = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) =>{
        setName(e.target.value)
    }

    const updatePrice = (e) =>{
        setPrice(e.target.value)
    }

    const addMovie = e =>{
        e.preventDefault(); // It stops the page to get refreshed once user clicked on submit.
        setMovies(preMovies => [...preMovies, {name: name, price: price}]);
    }
    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}></input>
            <input type="text" name="price" value={price} onChange={updatePrice}></input>
            <butt>Submit</butt>
        </form>
    )
}


export default AddMovie