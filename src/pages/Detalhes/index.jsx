import { useParams } from "react-router-dom"

export default function Detalhes(){

    const {id} = useParams();
    const {category} = useParams();
    

    return(
        <h1>Detalhes {category} {id}</h1>
    )

}