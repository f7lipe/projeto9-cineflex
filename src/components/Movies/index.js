import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css"

import Movie from "../Movie"
import Loading from "../Loading...";

const MOVIES_API = "https://mock-api.driven.com.br/api/v5/cineflex/movies"



export default function Movies() {
const [movies, setMovies] = useState([])

useEffect(()=>{
    const promise = axios.get(MOVIES_API)
    promise.then(items=>{
        const item = items.data
        setMovies(item)
    })
},[])

    if (movies == null){
        return <Loading/>
    }

    return (
        <>
            <main>
                <h1 className="Movies-h1">
                    Selecione o filme
                </h1>

                <section className="Movies">

                    {
                        movies.map((movie) =>{
                            const {id, posterURL, overview} = movie
                            return <Movie key={id} id={id} posterURL={posterURL} alt={overview}/>
                        })
                    }

                </section>
            </main>
        </>
    )
}