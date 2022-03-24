import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css"

import Seats from "../Seats"

export default function Session() {
    const {session_id} = useParams()

    const [session, setSession] = useState({seats:[], name:"", day:"", movie:""})


    useEffect(() => {
        const SESSIONS_API = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${session_id}/seats`
        const promise = axios.get(SESSIONS_API)
        promise.then(response => {
            const { data } = response
            setSession(data)
        })

    }, [])

    const { name, day, movie, seats  } = session
    return (
        <>
            <main>
                <h1 className="Seats-h1">
                    Selecione o(s) assento(s)
                </h1>

                <Seats seats={seats}/>

                <form>
                    <label>
                       <p>Nome do comprador:</p>
                        <input type="text" name="name" placeholder="Digite seu nome..." />
                    </label>
                    <label>
                        <p>CPF do comprador:</p>
                        <input type="number" name="cpf" placeholder="Digite seu CPF..."/>
                    </label>
                    <div>
                    <input className="" type="submit" value="Reservar assentos" />
                    </div>
                </form>
            </main>

            <footer>
                <div className="Schedule-movie-info">
                    <img className="Schedule-movie-thumbnail" src={movie.posterURL} alt={movie.overview}/>
                    <div>
                        <h3 className="Schedule-movie-h3">{movie.title}</h3>
                        <h4>{day.weekday} - {name}</h4>
                    </div>
                </div>
            </footer>

        </>
    )
}