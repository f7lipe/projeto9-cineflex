import "./style.css"

export default function Schedule(props){
    const {weekday, date, showtimes} = props
   
    return(
        <>
        <h2 className="Schedule-h2">{`${weekday} – ${date}`}</h2>
        <section className="Schedule-buttons">
          {
              showtimes.map((showtime, index)=>{
                  const {name} = showtime
                  return   <button key={index} className="Schedule-button"> {name}</button>
              })
          }
        </section>

        </>
    )
}