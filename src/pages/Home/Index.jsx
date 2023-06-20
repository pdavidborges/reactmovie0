import { Link } from "react-router-dom";
import cardHomeMovie from '../../img/card-home-movie.png';
import cardHomeSeries from '../../img/card-home-series.png';
import Banner from "../../components/Banner/Index";
import { ContentHome } from "./styles";

export default function Home() {

  return (
    <>
      
      <Banner title='Filmes & Séries' description='Lista de filmes e séries baseada na API The Movie DB. 
Confira as produções mais populares do mundo.' />

      <ContentHome>
        <Link to='/filmes'>
          <img src={cardHomeMovie} alt="" />
        </Link>

        <Link to='/series'>
          <img src={cardHomeSeries} alt="" />
        </Link>
      </ContentHome>
    </>
  )

}