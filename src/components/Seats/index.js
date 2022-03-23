import "./style.css"

export default function Seats() {
    return (
        <>
            <section className="Seats">
                <div className="Seat">1</div>
                <div className="Seat selected">1</div>
                <div className="Seat selected">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat unavailable">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat ">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
                <div className="Seat">1</div>
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