import "./style.css"

import Schedule from "../Schedule"

export default function Schedules(){
    return (
        <>
            <main>
                <h1 className="Schedules-h1">
                    Selecione o horário
                </h1>

                <section className="Schedules">
                    <Schedule/>
                    <Schedule/>
                    <Schedule/>
                </section>
            </main>

            <footer>
                <div className="Schedule-movie-info">
                <div className="Schedule-movie-thumbnail"></div>
                <h3 className="Schedule-movie-h3">Enola Gay</h3>
                </div>
            </footer>
        </>
    )
}