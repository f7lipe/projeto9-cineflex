import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./style.css"

import Movies from "../Movies"
import Schedules from "../Schedules"
import Session from "../Session"
import Sucess from "../Sucess"

export default function App() {

    return (
        <>
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <BrowserRouter>

            <Routes>
                <Route path="/" element={<Movies/>} />
                <Route path="/schedules/:id" element={<Schedules/> } />
                <Route path="/session/:session_id"element={<Session/>} />
                <Route path="/sucess" element={<Sucess/>} />
            </Routes>
            </BrowserRouter>

        </>
    )


}

