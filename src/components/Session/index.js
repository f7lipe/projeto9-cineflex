import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css"

import Seat from "../Seat"


export default function Session() {
    const { session_id } = useParams()

    const [session, setSession] = useState({ seats: [], name: "", day: "", movie: "" })
    //const [selectedIDs, setselectedIDs] = useState([])
    const selectedSeatsIDs = new Set([])
    const [userName, setUsernName] = useState("")
    const [cpf, setCPF] = useState("")
    function manageSelection(id) {
        //setselectedIDs([...selectedIDs, id])
        selectedSeatsIDs.has(id) ? selectedSeatsIDs.delete(id) : selectedSeatsIDs.add(id)
    }

    const navigate = useNavigate()


    useEffect(() => {
        const SESSIONS_API = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${session_id}/seats`
        const promise = axios.get(SESSIONS_API)
        promise.then(response => {
            const { data } = response
            setSession(data)
        })

    }, [])

    const { name, day, movie, seats } = session

    function submit(event){
        const POST_API = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many'
        const post = {
            ids: [...selectedSeatsIDs], 
            name: userName, 
            cpf: cpf}
        event.preventDefault()
        if(selectedSeatsIDs.size === 0){
            alert("Você precisa selecionar ao menos um assento")
        } else {
            const promise = axios.post(POST_API, post)
            promise.then(() =>{
                alert("Reserva feita com sucesso")
                const data = {name: userName, cpf: cpf, movie: movie.title, seats: [...selectedSeatsIDs], date: day.weekday, time:name}
                navigate(`/sucess/${JSON.stringify(data)}`)  
            })
        }

    }

    return (
        <>
            <main>
                <h1 className="Seats-h1">
                    Selecione o(s) assento(s)
                </h1>

                <section className="Seats">
                    {
                        seats.map(seat => {
                            const { name, id, isAvailable } = seat
                            return (
                                <div key={id} onClick={() => manageSelection(id)}>
                                    <Seat key={id} name={name} status={isAvailable} />
                                </div>
                            )
                        })
                    }
                </section>

                <section className="Seat-descriptions">
                    <div className="Seat-description">
                        <div className="Seat selected" />
                        <p>Selecionado</p>
                    </div>

                    <div className="Seat-description">
                        <div className="Seat" />
                        <p>Disponível</p>
                    </div>

                    <div className="Seat-description">
                        <div className="Seat unavailable" />
                        <p>Indisponível</p>
                    </div>
                </section>

                <form onSubmit={submit}>
                    <label>
                        <p>Nome do comprador:</p>
                        <input type="text" name="name" placeholder="Digite seu nome..." value={userName} onChange={event => setUsernName(event.target.value)} required />
                    </label>
                    <label>
                        <p>CPF do comprador:</p>
                        <input type="number" name="cpf" placeholder="Digite seu CPF..." value={cpf} onChange={event => setCPF(event.target.value)} required />
                    </label>
                    <div>
                        <input className="Seat-button" type="submit" value="Reservar assentos" />
                    </div>
                </form>
            </main>

            <footer>
                <div className="Schedule-movie-info">
                    <img className="Schedule-movie-thumbnail" src={movie.posterURL} alt={movie.overview} />
                    <div>
                        <h3 className="Schedule-movie-h3">{movie.title}</h3>
                        <h4>{day.weekday} - {name}</h4>
                    </div>
                </div>
            </footer>

        </>
    )
}