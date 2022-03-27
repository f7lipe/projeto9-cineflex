import {  useParams } from "react-router"

import "./style.css"

export default function Sucess() {

    const {data } = useParams()
    let decoded 
    try {
       decoded = decodeURI(data)
    } catch (error){
        alert('Falha ao decodificar link')
    }
    const {name, cpf, movie, date, time, seats }= JSON.parse(decoded)


    return (

        <main>
            <h1 className="Sucess-h1">
                Pedido feito com sucesso!
            </h1>

            <section>
                <h1 className="Movies-h1">
                    Filme e sessão
                </h1>
                <div>
                    <h2>
                        {movie}
                    </h2>
                    <h3>
                        {date} - {time}
                    </h3>
                </div>
            </section>

            <section>
                <h1 className="Movies-h1">
                    Ingressos
                </h1>
                <div>
                    {
                        seats.map(seat=> <h2> {`Assento ${seat}`}</h2>)
                    }
                </div>
            </section>


            <section>
                <h1 className="Movies-h1">
                    Comprador
                </h1>
                <div>
                    <h2>
                        Nome: {name}
                    </h2>

                    <h3>
                        CPF: {cpf}
                    </h3>

                </div>
            </section>

            <button>Voltar pra Home</button>

        </main>
    )
}