import { useEffect, useState } from "react";
import api from '../../services/api';
import { CardItem, CardsList } from "./styles";
import Banner from "../../components/Banner/Index";


export default function Filmes() {
  //https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&api_key=93b872e765d2e0bc708fe8fd68ea2ad0

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '93b872e765d2e0bc708fe8fd68ea2ad0',
          language: 'pt-BR',
          page: 1,
        }
      });

      //console.log(response.data.results.slice(0,10));
      setFilmes(response.data.results.slice(0, 20));

    }

    loadFilmes();

  }, [])

  return (
    <>
    <Banner title="Filmes Populares"/>
    <div className="container">

      <CardsList>

        {
          filmes.map((filme) => (

            <CardItem key={filme.id}>
              <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} width={360} />
              <div className="content-card">
                <h2>{filme.title}</h2>
                <h3>Ano: {filme.release_date}</h3>
                <span>* {filme.vote_average}</span>
              </div>
            </CardItem>

          ))
        }

      </CardsList>

    </div>
    </>

  )

}



