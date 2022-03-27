import { Link } from "react-router-dom";

import "./style.css"

export default function Schedule(props){
    const {weekday, date, showtimes} = props

    return(
        <>
        <h2  className="Schedule-h2">{`${weekday} – ${date}`}</h2>
        <section  className="Schedule-buttons">
          {
              showtimes.map((showtime)=>{
                  const {name, id} = showtime
                  return (  
                  <Link to={`/session/${id}`}>
                  <button key={id} className="Schedule-button"> {name}</button>
                  </Link>
                  ) 
              })
          }
        </section>

        </>
    )
}