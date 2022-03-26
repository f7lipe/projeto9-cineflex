import { useState } from "react"

import "./style.css"

export default function Seat(props) {
    const {name, id, status} = props
    const [selected, setSelected] = useState(false)

    return <div id="" key={id} className={`Seat ${status ? '' : 'unavailable'} ${selected ? 'selected' : ''}`} onClick={()=>setSelected(selected ? false : true)}>{name}</div> 
}