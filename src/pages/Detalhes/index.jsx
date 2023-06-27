import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BannerDetail, Content } from "./style";

export default function Detalhes() {

    const { id } = useParams();
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${category}/${id}`, {
            params: {
                api_key: '93b872e765d2e0bc708fe8fd68ea2ad0',
                language: 'pt-BR',
            }
        })

            .then(response => {
                console.log(response.data);
                setItems(response.data);
                //setLoading(false);
            })

            .catch(error => {
                console.log(error.message);
            })
    }, [])


    return (
        <>
            <BannerDetail url={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}>
            </BannerDetail>

            <Content>

                    <img src={`https://image.tmdb.org/t/p/original${items.poster_path}`} alt="" width={360} />
                    <div>
                        <h1>{items.title}</h1>
                        <h2>{items.tagline}</h2>
                        <ul>                            
                            <li>Ano: {items.release_date}</li>
                            <li>Avaliação: {(items.vote_average*10).toFixed(0)}%</li>
                        </ul>
                        <p><strong>Sinopse: </strong>{items.overview}</p>

                        <button onClick={() => navigate(-1)}>Voltar</button>

                    </div>
            </Content>

        </>
    )

}