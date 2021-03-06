import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css"

import Seat from "../Seat"


export default function Session() {
    const { session_id } = useParams()

    const [session, setSession] = useState({ seats: [], name: "", day: "", movie: "" })
    const [selectedIDs, setselectedIDs] = useState(new Set())
    const [selectedSeatName, setSelectedSeatName] = useState(new Set())

    const [userName, setUsernName] = useState("")
    const [cpf, setCPF] = useState("")

    const selectedSeatsIDs = new Set(selectedIDs)
    const selectedSeatNames = new Set(selectedSeatName)

    function manageClick(id, name, isAvailable) {
       const seatNumberName = parseInt(name)
        if (isAvailable){
            selectedSeatsIDs.has(id) ? selectedSeatsIDs.delete(id) : selectedSeatsIDs.add(id)
            selectedSeatNames.has(seatNumberName) ? selectedSeatNames.delete(seatNumberName) : selectedSeatNames.add(seatNumberName)
            setselectedIDs(selectedSeatsIDs)
            setSelectedSeatName(selectedSeatNames)
        }
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

    function submit(event) {
        const POST_API = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many'
        const post = {
            ids: [...selectedSeatsIDs],
            name: userName,
            cpf: cpf
        }
        
      

        if (selectedSeatsIDs.size !== 0) {
            const promise = axios.post(POST_API, post)
            promise.then(() => {
                alert("Reserva feita com sucesso")
                const data = { name: userName, cpf: cpf, movie: movie.title, seats: [...selectedSeatNames], date: day.weekday, time: name }
                const stringifiedData = JSON.stringify(data)
                navigate(`/sucess/${stringifiedData}`)
            })
        } else {
            alert("Voc?? precisa selecionar ao menos um assento")
        }
        event.preventDefault()
 
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
                                <div key={id} onClick={() => manageClick(id, name,isAvailable)}>
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
                        <p>Dispon??vel</p>
                    </div>

                    <div className="Seat-description">
                        <div className="Seat unavailable" />
                        <p>Indispon??vel</p>
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