import { useEffect, useState } from "react";
import api from '../../services/api';
import Banner from "../../components/Banner/Index";
import { ListCards, CardItem } from "./style";
import { Link } from "react-router-dom";
import star from '../../img/star.svg';
import axios from "axios";

export function List({category, title}) {

  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      //top_rated
      //popular
      //now_playing
      //upcoming
    axios.get(`https://api.themoviedb.org/3/${category}/top_rated`, {
      params: {
        api_key: '93b872e765d2e0bc708fe8fd68ea2ad0',
        language: 'pt-BR',
        page: 1,
      }
    })

    .then(response => {
      console.log(response.data);
      setItens(response.data.results.slice(0, 20));
      setLoading(false);
    })

    .catch(error => {
      console.log(error.message);
    })
    

  }, [])


  if(loading){
    return(
      <div>
        <h3 style={{color:'white'}}>Carregando...</h3>
      </div>
    )
  }

  return (
    <>
      <Banner title={title} />
      <div className="container">

        <ListCards>

          {
            itens.map((item) => (

              <CardItem key={item.id}>             

                {/* {console.log(JSON.stringify(item.first_air_date).substring(1,5))} */}


                <Link to={`detalhe/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} title={item.title} width={360} />
                  <div className="content-card">
                    <h2>{ category === 'tv' ? item.name : item.title}</h2>
                    <h3>Ano: {JSON.stringify((category === 'tv' ? item.first_air_date : item.release_date)).substring(1,5)}</h3>
                    <span> <img src={star} alt="" /> {item.vote_average}</span>
                  </div>
                </Link>
              </CardItem>


            ))
          }

        </ListCards>

      </div>
    </>

  )

}