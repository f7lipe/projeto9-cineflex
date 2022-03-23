import "./style.css"

import Seats from "../Seats"

export default function Session() {
    return (
        <>
            <main>
                <h1 className="Movies-h1">
                    Selecione o(s) assento(s)
                </h1>

                <Seats />

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
                    <input className="Submit" type="submit" value="Reservar assentos" />
                    </div>
                </form>
            </main>

            <footer>
                <div className="Schedule-movie-info">
                    <div className="Schedule-movie-thumbnail"></div>
                    <div>
                        <h3 className="Schedule-movie-h3">Enola Gay</h3>
                        <h4>Quinta-feira - 15:00</h4>
                    </div>
                </div>
            </footer>

        </>
    )
}