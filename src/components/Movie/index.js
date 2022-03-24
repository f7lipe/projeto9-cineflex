import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./style.css"

export default function Movie(props) {
    const { id, posterURL, overview } = props
    return (
        
        <Link to={`/schedules/${id}`}>
            <img className="Movie" src={posterURL} key={posterURL} alt={overview} />
        </Link>
    )
}