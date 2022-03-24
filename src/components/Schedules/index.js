import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css"

import Schedule from "../Schedule"

export default function Schedules() {
    const { id } = useParams()
    const [schedule, setSchedule] = useState({})


    useEffect(() => {
        const SCHEDULES_API = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
        const promise = axios.get(SCHEDULES_API)
        promise.then(response => {
            const { data } = response
            setSchedule(data)
        })

    }, [])

    const { title, posterURL, overview, days  } = schedule
  
    return (
        <>
            <main>
                <h1 className="Schedules-h1">
                    Selecione o horário
                </h1>

                <section className="Schedules">
                {
                   
                       days && days.map((day, index) => {
                            const {weekday, date, showtimes} = day
                            
                            return <Schedule key={id+index} weekday={weekday} date={date} showtimes={showtimes}/>
                        })
                    }
                </section>
            </main>

            <footer>
                <div className="Schedule-movie-info">
                    <img className="Schedule-movie-thumbnail" alt={overview} key={id} src={posterURL} />
                    <h3 className="Schedule-movie-h3">{title}</h3>
                </div>
            </footer>
        </>
    )
}