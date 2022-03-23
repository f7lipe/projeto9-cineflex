import "./style.css"

export default function Sucess() {
    return (

        <main>
            <h1 className="Movies-h1">
                Pedido feito com sucesso!
            </h1>

            <section>
                <h1 className="Movies-h1">
                    Filme e sessão
                </h1>
                <div>
                    <h2>
                        Enola Gay
                    </h2>
                    <h3>
                        22/06/2022 - 15:00
                    </h3>
                </div>
            </section>

            <section>
                <h1 className="Movies-h1">
                    Ingressos
                </h1>
                <div>
                    <h2>
                        Assento 16
                    </h2>

                    <h2>
                        Assento 17
                    </h2>

                </div>
            </section>


            <section>
                <h1 className="Movies-h1">
                    Comprador
                </h1>
                <div>
                    <h2>
                        Nome: João Alguma Coisa
                    </h2>

                    <h3>
                        CPF: 000.000.000-00
                    </h3>

                </div>
            </section>

            <button>Voltar pra Home</button>

        </main>
    )
}