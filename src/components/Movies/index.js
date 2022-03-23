import "./style.css"

import Movie from "../Movie"

export default function Movies() {
    return (
        <>
            <main>
                <h1 className="Movies-h1">
                    Selecione o filme
                </h1>

                <section className="Movies">
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                </section>
            </main>
        </>
    )
}