import "./style.css"

export default function Seats(props) {
    return (
        <>
            <section className="Seats">
                {
                    props.seats.map(seat=>{
                        const {name, id, isAvailable} = seat
                        const status = isAvailable ? '' : 'unavailable'
                        return <div id={id} className={`Seat ${status}`}>{name}</div>
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
        </>
    )
}