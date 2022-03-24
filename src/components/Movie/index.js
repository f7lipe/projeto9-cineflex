import "./style.css"

export default function Movie(props){
    const {posterURL, overview} = props
    return(
        <img className="Movie" src={posterURL} key={posterURL} alt={overview}/>
        
    )
}